import React from 'react'
import './formContact.scss'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import Swal from 'sweetalert2'

const FormContact = () => {

	const [messaggeOk, setMessaggeOk] = useState(false)

	const Toast = Swal.mixin({
		toast: true,
		position: 'top',
		color: '#ffffff',
		background: '#041c38',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
	})

	const sendEmail = (event) => {
		event.preventDefault();
		emailjs.sendForm('service_ux8umva', 'template_6yo6cbe', event.target, '7PdH6bDCe03t6ONv7')
			.then(response => {
				console.log(response);
				setSendClick(!sendClick)
				Toast.fire({
					icon: 'success',
					title: 'Mensaje enviado !'
				})
				event.target.reset()
			})
			.catch(error => console.log(error))
		setMessaggeOk(!messaggeOk)
	}

	const [sendClick, setSendClick] = useState(false)

	const hoverButton = () => {
        setSendClick(false)
    }

    return (
		<div className='form-container'>
			<div className="contact_form">
				<div className="table">			
					<h1 className='contact-me'>Contáctame</h1>
					<form className='form-content' onSubmit={sendEmail}>				
						<p>
							<label htmlFor="name" className="insert-name">Nombre *</label>
							<input type="text" name="user_name" id="name" required="required" placeholder="Escribe tu nombre"/>
						</p>

						<p>
							<label htmlFor="email" className="insert-email">Email *</label>
							<input type="email" name="user_email" id="email" required="required" placeholder="Escribe tu Email"/>
						</p>

						<p>
							<label htmlFor="subject" className="insert-subject">Asunto *</label>
							<input type="text" name="user_subject" id="subject" required="required" placeholder="Escribe un asunto"/>
						</p>

						<p>
							<label htmlFor="message" className="colocar_mensaje">Mensaje *</label>
							<textarea name="user_message" className="insert-message" id="message" required="required" placeholder="Deja aquí tu comentario..."></textarea> 
						</p>
						<div className='button-container'>
							<div className='btnSend'>
								{sendClick ? (<button className='btn-formOne' id="send" onClick={hoverButton}><p className='btn-text'>Enviado !</p></button>)
									: (<button className='btn-formTwo' type="submit" name="enviar_formulario"><p className='btn-text'>Enviar</p></button>)}
							</div>
						</div> 
					</form>
				</div>	
			</div>
		</div>

    )
}

export default FormContact