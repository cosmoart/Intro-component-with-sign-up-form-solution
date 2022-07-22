import React, { useRef } from 'react';

const EMAILREGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

export default function Form() {
	const form = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const $mail = form.current.querySelector("#mail");

		for (let i of form.current.querySelectorAll('input')) {
			if (i.value === '') {
				i.style.marginBottom = "0";
				i.nextElementSibling.textContent = `${i.placeholder} cannot be empty`;
				i.nextElementSibling.classList.add("form-error");
				form.current.querySelector(`input[name="${i.name}"]`).style.border = "1px solid hsl(0, 100%, 74%)";
			} else {
				i.style.marginBottom = "15px";
				i.nextElementSibling.textContent = "";
				i.nextElementSibling.classList.remove("form-error");
				form.current.querySelector(`input[name="${i.name}"]`).style.border = "1px solid #3e3c4930";
			}
		}
		if (!$mail.value.match(EMAILREGEX) && $mail.value !== '') {
			$mail.style.marginBottom = "0";
			$mail.style.border = "1px solid hsl(0, 100%, 74%)";
			$mail.nextElementSibling.textContent = "Looks like this is not an email";
			$mail.nextElementSibling.classList.add("form-error");
			return;
		}

		if (form.current.querySelectorAll('.form-error').length === 0) {
			form.current.submit();
			form.current.reset();
		}
	}

	return (
		<form ref={form} className='flex flex-col p-6 bg-white shadow-pShadow rounded-md'>
			<input className='inputF md:py-3 md:px-7' type="text" id='firstName' name="firstName" placeholder="First Name" required />
			<label className='labelF' htmlFor="firstName" aria-live='true'/>

			<input className='inputF  md:py-3 md:px-7' type="text" name="lastName" id='lastName' placeholder="Last Name" required />
			<label className='labelF' htmlFor="lastName" aria-live='true' />

			<input className='inputF  md:py-3 md:px-7' type="mail" name="email" id='mail' placeholder="Email Address" required />
			<label className='labelF' htmlFor="mail" aria-live='true' />

			<input className='inputF  md:py-3 md:px-7' type="password" name="password" id='password' placeholder="Password" required />
			<label className='labelF' htmlFor="password" aria-live='true' />

			<button type="submit" className='bg-pGreenDark hover:brightness-110 rounded-sm mt-2' onClick={e => handleSubmit(e)}>
				<div className="bg-pGreen rounded-sm p-3 font-semibold uppercase transition -translate-y-1 hover:-translate-y-[6px] active:-translate-y-0">Claim your free trial</div>
			</button>
			<footer className='text-black text-opacity-40 text-[11px] font-bold mt-1'>By clicking the button, you are agreeing to our <a href="#terms" className='text-pRed'>Terms and Services</a></footer>
		</form>
	)
}