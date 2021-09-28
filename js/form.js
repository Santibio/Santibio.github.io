const form = document.getElementById('form');
const inputs = document.querySelectorAll('.contact-form input');

const regex = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const fields = {
	name: false,
	email: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(regex.name, e.target, 'name');
		break;
		case "email":
			validarCampo(regex.email, e.target, 'email');
		break;
	}
}

const validarCampo = (regex, input, field) => {
	if(regex.test(input.value)){
		document.getElementById(`${field}`).classList.remove('incorrect-form');
		document.getElementById(`${field}`).classList.add('correct-form');
		document.querySelector(`#group__${field} .form__input-error`).classList.remove('incorrect');
		fields[field] = true;
	} else {
		document.getElementById(`${field}`).classList.add('incorrect-form');
		document.getElementById(`${field}`).classList.remove('correct-form');
		document.querySelector(`#group__${field} .form__input-error`).classList.add('incorrect');
		fields[field] = false;
	}
}


inputs.forEach((input) => {
	
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


form.addEventListener('submit', e => {
	e.preventDefault()
	if(fields.name && fields.email){
		form.addEventListener('submit',()=>{
			form.reset();
		})
	} else {
		alert("No se completaron los campos requeridos");
	}
});