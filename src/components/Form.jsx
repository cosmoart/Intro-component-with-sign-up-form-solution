import React, { useRef } from 'react';
import styled from 'styled-components';

const EMAILREGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

const InputF = styled.input`
    padding: 10px;
	border: 2px solid #3e3c4920;
    border-radius:3px;
	color: hsl(249, 10%, 26%);
	transition: border-color 0.2s ease-in-out;
    &::placeholder{
        font-weight: 500;
    }
`

const LabelF = styled.label`
    text-align: right;
    color: hsl(0, 100%, 74%);
    font-size: 14px;
    transform: translateY(-40px);
    /* opacity: 0; */
	height: 0;
    transition: all 0.2s ease-in-out;
`

export default function Form() {
	const form = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const $mail = form.current.querySelector("#mail");

		for (let i of form.current.querySelectorAll('input')) {
			if (i.value === '') {
				i.nextElementSibling.textContent = `${i.placeholder} cannot be empty`;
				i.nextElementSibling.classList.add("form-error");
				form.current.querySelector(`input[name="${i.name}"]`).style.border = "2px solid hsl(0, 100%, 74%)";
			} else {
				i.nextElementSibling.textContent = "";
				i.nextElementSibling.classList.remove("form-error");
				form.current.querySelector(`input[name="${i.name}"]`).style.border = "2px solid #3e3c49";
			}
		}
		if (!$mail.value.match(EMAILREGEX) && $mail.value !== '') {
			$mail.nextElementSibling.textContent = "Looks like this is not an email";
			$mail.nextElementSibling.classList.add("form-error");
			return;
		}
		if (form.current.querySelectorAll('.form-error').length === 0) {
			form.current.submit();
		}
	}

	return (
		<form ref={form} className='flex gap-3 flex-col p-5 bg-white shadow-pShadow rounded-md'>
			<InputF type="text" id='firstName' name="firstName" placeholder="First Name" required />
			<LabelF htmlFor="firstName" aria-live='true'></LabelF>

			<InputF type="text" name="lastName" id='lastName' placeholder="Last Name" required />
			<LabelF htmlFor="lastName" aria-live='true' />

			<InputF type="mail" name="email" id='mail' placeholder="Email Address" required />
			<LabelF htmlFor="mail" aria-live='true' />

			<InputF type="password" name="password" id='password' placeholder="Password" required />
			<LabelF htmlFor="password" aria-live='true' />

			<button type="submit" className='bg-pGreen rounded-sm p-3 font-semibold uppercase' onClick={e => handleSubmit(e)}>Claim your free trial</button>
			<footer className='text-black text-opacity-50 text-xs font-bold'>By clicking the button, you are agreeing to our <a href="#terms" className='text-pRed'>Terms and Services</a></footer>
		</form>
	)
}