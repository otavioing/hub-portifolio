(() => {
	const MAX_MESSAGE_LENGTH = 500;

	const state = {
		modal: null,
		form: null,
		successBanner: null,
		isOpen: false,
	};

	const onlyLettersPattern = /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)*$/u;
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

	const fields = {
		name: {
			inputId: 'formulario-nome',
			errorId: 'formulario-nome-erro',
			sanitize(value) {
				return value
					.replace(/\s+/g, ' ')
					.trim()
					.replace(/[^A-Za-zÀ-ÿ\s]/gu, '')
					.replace(/\s+/g, ' ')
					.split(' ')
					.filter(Boolean)
					.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
					.join(' ');
			},
			validate(value) {
				const normalized = value.trim();

				if (!normalized) {
					return 'Informe seu nome.';
				}

				if (normalized.length < 3) {
					return 'O nome deve ter no mínimo 3 caracteres.';
				}

				if (!onlyLettersPattern.test(normalized)) {
					return 'Use apenas letras no nome.';
				}

				return '';
			},
		},
		phone: {
			inputId: 'formulario-telefone',
			errorId: 'formulario-telefone-erro',
			sanitize(value) {
				const digits = value.replace(/\D/g, '').slice(0, 11);

				if (digits.length <= 2) {
					return digits;
				}

				const area = digits.slice(0, 2);
				const remaining = digits.slice(2);

				if (remaining.length <= 4) {
					return `(${area}) ${remaining}`;
				}

				if (remaining.length <= 8) {
					return `(${area}) ${remaining.slice(0, 4)}-${remaining.slice(4)}`;
				}

				return `(${area}) ${remaining.slice(0, 5)}-${remaining.slice(5)}`;
			},
			validate(value) {
				const digits = value.replace(/\D/g, '');

				if (!digits) {
					return 'Informe seu telefone.';
				}

				if (digits.length < 10) {
					return 'Digite um telefone com 10 ou 11 dígitos.';
				}

				if (digits.length > 11) {
					return 'O telefone deve ter no máximo 11 dígitos.';
				}

				return '';
			},
		},
		email: {
			inputId: 'formulario-email',
			errorId: 'formulario-email-erro',
			sanitize(value) {
				return value.replace(/\s+/g, '').toLowerCase();
			},
			validate(value) {
				if (!value) {
					return 'Informe seu e-mail.';
				}

				if (!emailPattern.test(value)) {
					return 'Digite um e-mail válido.';
				}

				return '';
			},
		},
		message: {
			inputId: 'formulario-mensagem',
			errorId: 'formulario-mensagem-erro',
			counterId: 'formulario-mensagem-contador',
			sanitize(value) {
				return value.slice(0, MAX_MESSAGE_LENGTH);
			},
			validate(value) {
				const normalized = value.trim();

				if (!normalized) {
					return 'Escreva uma mensagem.';
				}

				if (value.length > MAX_MESSAGE_LENGTH) {
					return `A mensagem deve ter no máximo ${MAX_MESSAGE_LENGTH} caracteres.`;
				}

				return '';
			},
		},
	};

	function ready(fn) {
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', fn, { once: true });
			return;
		}

		fn();
	}

	function createField({ id, label, type, placeholder, maxlength, inputmode, autocomplete, textarea = false, hint, counterId }) {
		const field = document.createElement('div');
		field.className = 'form-field';

		const labelElement = document.createElement('label');
		labelElement.setAttribute('for', id);
		labelElement.textContent = label;

		const control = textarea ? document.createElement('textarea') : document.createElement('input');
		control.id = id;
		control.name = id.replace('formulario-', '');
		control.required = true;
		if (!textarea) {
			control.type = type;
			control.autocomplete = autocomplete;
			if (inputmode) {
				control.inputMode = inputmode;
			}
		} else {
			control.setAttribute('rows', '5');
			control.spellcheck = true;
		}

		if (placeholder) {
			control.placeholder = placeholder;
		}

		if (maxlength) {
			control.maxLength = maxlength;
		}

		const error = document.createElement('div');
		error.id = `${id}-erro`;
		error.className = 'form-field__error';
		error.setAttribute('aria-live', 'polite');

		control.setAttribute('aria-describedby', `${error.id}${counterId ? ` ${counterId}` : ''}`.trim());
		control.setAttribute('aria-invalid', 'false');

		field.appendChild(labelElement);
		field.appendChild(control);

		const meta = document.createElement('div');
		meta.className = 'form-field__meta';
		meta.appendChild(error);

		if (hint || counterId) {
			const helper = document.createElement('div');
			helper.className = 'form-field__counter';
			if (counterId) {
				helper.id = counterId;
			}
			helper.textContent = hint || '';
			meta.appendChild(helper);
		}

		field.appendChild(meta);

		return { field, control, error };
	}

	function createModal() {
		const overlay = document.createElement('div');
		overlay.className = 'form-modal-overlay';
		overlay.hidden = true;

		const modal = document.createElement('div');
		modal.className = 'form-modal';
		modal.setAttribute('role', 'dialog');
		modal.setAttribute('aria-modal', 'true');
		modal.setAttribute('aria-labelledby', 'formulario-modal-title');

		const header = document.createElement('div');
		header.className = 'form-modal__header';

		const headingBlock = document.createElement('div');

		const title = document.createElement('h2');
		title.id = 'formulario-modal-title';
		title.className = 'form-modal__title';
		title.textContent = 'Preencha o formulário';

		const subtitle = document.createElement('p');
		subtitle.className = 'form-modal__subtitle';
		subtitle.textContent = 'Os campos são formatados e validados em tempo real.';

		headingBlock.appendChild(title);
		headingBlock.appendChild(subtitle);

		const closeButton = document.createElement('button');
		closeButton.type = 'button';
		closeButton.className = 'form-modal__close';
		closeButton.setAttribute('aria-label', 'Fechar formulário');
		closeButton.textContent = '×';

		header.appendChild(headingBlock);
		header.appendChild(closeButton);

		const body = document.createElement('div');
		body.className = 'form-modal__body';

		const banner = document.createElement('div');
		banner.className = 'form-modal__banner';
		banner.setAttribute('aria-live', 'polite');

		const form = document.createElement('form');
		form.className = 'form-modal__grid';
		form.noValidate = true;

		const nameField = createField({
			id: fields.name.inputId,
			label: 'Nome',
			type: 'text',
			placeholder: 'Digite seu nome completo',
			autocomplete: 'name',
		});

		const phoneField = createField({
			id: fields.phone.inputId,
			label: 'Telefone',
			type: 'tel',
			placeholder: '(11) 99999-9999',
			autocomplete: 'tel',
			inputmode: 'numeric',
		});

		const emailField = createField({
			id: fields.email.inputId,
			label: 'E-mail',
			type: 'email',
			placeholder: 'seuemail@dominio.com',
			autocomplete: 'email',
		});

		const messageField = createField({
			id: fields.message.inputId,
			label: 'Mensagem',
			type: 'text',
			placeholder: 'Conte um pouco sobre o que você precisa...',
			textarea: true,
			maxlength: MAX_MESSAGE_LENGTH,
			hint: `0/${MAX_MESSAGE_LENGTH}`,
			counterId: fields.message.counterId,
		});

		const footer = document.createElement('div');
		footer.className = 'form-modal__footer';

		const hint = document.createElement('p');
		hint.className = 'form-modal__hint';
		hint.textContent = 'Validação e formatação acontecem enquanto você digita.';

		const submit = document.createElement('button');
		submit.type = 'submit';
		submit.className = 'form-modal__submit';
		submit.textContent = 'Enviar';

		footer.appendChild(hint);
		footer.appendChild(submit);

		form.appendChild(banner);
		form.appendChild(nameField.field);
		form.appendChild(phoneField.field);
		form.appendChild(emailField.field);
		form.appendChild(messageField.field);
		form.appendChild(footer);

		body.appendChild(form);
		modal.appendChild(header);
		modal.appendChild(body);
		overlay.appendChild(modal);

		document.body.appendChild(overlay);

		state.modal = overlay;
		state.form = form;
		state.successBanner = banner;

		const controls = {
			name: nameField.control,
			phone: phoneField.control,
			email: emailField.control,
			message: messageField.control,
			submit,
			closeButton,
		};

		return controls;
	}

	function setFieldState(control, errorElement, message) {
		const isInvalid = Boolean(message);
		control.classList.toggle('is-invalid', isInvalid);
		control.setAttribute('aria-invalid', String(isInvalid));
		errorElement.textContent = message;
	}

	function updateMessageCounter(counterElement, value) {
		const count = value.length;
		counterElement.textContent = `${count}/${MAX_MESSAGE_LENGTH}`;
		counterElement.classList.toggle('is-warning', count >= 450);
	}

	function validateAndReport(control, config, options = {}) {
		const errorElement = document.getElementById(config.errorId);
		const before = control.value;
		const sanitized = config.sanitize(before);

		if (sanitized !== before) {
			control.value = sanitized;
		}

		if (config === fields.message) {
			updateMessageCounter(document.getElementById(config.counterId), control.value);
		}

		const errorMessage = config.validate(control.value);
		setFieldState(control, errorElement, options.touched || control.value ? errorMessage : '');

		return !errorMessage;
	}

	function validateAll(controls) {
		const results = [
			validateAndReport(controls.name, fields.name, { touched: true }),
			validateAndReport(controls.phone, fields.phone, { touched: true }),
			validateAndReport(controls.email, fields.email, { touched: true }),
			validateAndReport(controls.message, fields.message, { touched: true }),
		];

		return results.every(Boolean);
	}

	function openModal(controls) {
		if (!state.modal) {
			return;
		}

		state.modal.hidden = false;
		requestAnimationFrame(() => {
			state.modal.classList.add('is-open');
		});

		document.body.classList.add('form-modal-open');
		state.isOpen = true;

		controls.name.focus();
	}

	function closeModal() {
		if (!state.modal) {
			return;
		}

		state.modal.classList.remove('is-open');
		document.body.classList.remove('form-modal-open');
		state.isOpen = false;

		window.setTimeout(() => {
			if (!state.isOpen) {
				state.modal.hidden = true;
			}
		}, 220);
	}

	function bindEvents(controls) {
		const opener = document.querySelector('.cta-section .cta-secondary');

		if (opener) {
			opener.addEventListener('click', (event) => {
				event.preventDefault();
				openModal(controls);
			});
		}

		state.modal.addEventListener('click', (event) => {
			if (event.target === state.modal) {
				closeModal();
			}
		});

		controls.closeButton.addEventListener('click', closeModal);

		window.addEventListener('keydown', (event) => {
			if (event.key === 'Escape' && state.isOpen) {
				closeModal();
			}
		});

		state.form.addEventListener('submit', (event) => {
			event.preventDefault();

			if (!validateAll(controls)) {
				const firstInvalid = [controls.name, controls.phone, controls.email, controls.message]
					.find((control) => control.getAttribute('aria-invalid') === 'true');

				if (firstInvalid) {
					firstInvalid.focus();
				}

				return;
			}

			state.successBanner.textContent = 'Formulário validado com sucesso. Se houver integração de envio, os dados já estão prontos.';
			state.successBanner.classList.add('is-visible');

			controls.submit.disabled = true;

			window.setTimeout(() => {
				state.successBanner.classList.remove('is-visible');
				controls.submit.disabled = false;
				closeModal();
				state.form.reset();
				updateMessageCounter(document.getElementById(fields.message.counterId), '');
				[controls.name, controls.phone, controls.email, controls.message].forEach((control) => {
					const errorElement = document.getElementById(`${control.id}-erro`);
					setFieldState(control, errorElement, '');
				});
			}, 1200);
		});
	}

	ready(() => {
		const controls = createModal();

		controls.name.addEventListener('input', () => {
			const formatted = fields.name.sanitize(controls.name.value);
			if (formatted !== controls.name.value) {
				controls.name.value = formatted;
			}
			validateAndReport(controls.name, fields.name);
		});

		controls.phone.addEventListener('input', () => {
			const formatted = fields.phone.sanitize(controls.phone.value);
			if (formatted !== controls.phone.value) {
				controls.phone.value = formatted;
			}
			validateAndReport(controls.phone, fields.phone);
		});

		controls.email.addEventListener('input', () => {
			const formatted = fields.email.sanitize(controls.email.value);
			if (formatted !== controls.email.value) {
				controls.email.value = formatted;
			}
			validateAndReport(controls.email, fields.email);
		});

		controls.message.addEventListener('input', () => {
			const formatted = fields.message.sanitize(controls.message.value);
			if (formatted !== controls.message.value) {
				controls.message.value = formatted;
			}
			validateAndReport(controls.message, fields.message);
		});

		bindEvents(controls);
	});
})();
