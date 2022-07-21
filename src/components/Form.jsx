import React, { useRef } from 'react';
import styled from 'styled-components';

const InputF = styled.input`
    padding: 10px;
    border-radius:3px;
    &::placeholder{
        font-weight: 500;
    }
`

const LabelF = styled.label`
    text-align: right;
    color: hsl(0, 100%, 74%);
    font-size: 14px;
    transform: translateY(-20px);
    opacity: 0;
    transition: all 0.2s ease-in-out;
`

export default function Form() {
    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // list of the elements minus the last
        console.log(form.current.querySelectorAll('input'));
        for (let i of form.current.querySelectorAll('input')) {
            if (i.value === '') {
                console.log(i.nextElementSibling);
                // i.nextElementSibling.textContent = `${i.placeholder} cannot be empty`;
                i.nextElementSibling.classList.add("form-error");
                // document.querySelector(`label[for="${i.name}"]`).classList.add('error');
            }
        }
    }

    return (
        <form ref={form} className='flex gap-3 flex-col p-5 bg-white shadow-pShadow rounded-md'>
            <InputF type="text" id='firstName' name="firstName" placeholder="First Name" required />
            <LabelF htmlFor="firstName" aria-live='true'>afwagwgwgwa</LabelF>

            <InputF type="text" name="lastName" id='lastName' placeholder="Last Name" required />
            <LabelF htmlFor="lastName" aria-live='true' />

            <InputF type="mail" name="email" id='mail' placeholder="Email Address" required />
            <LabelF htmlFor="mail" aria-live='true' />

            <InputF type="password" name="password" id='password' placeholder="Password" required />
            <LabelF htmlFor="password" aria-live='true' />

            <button type="submit" className='bg-pGreen rounded-sm p-3' onClick={e => handleSubmit(e)}>Claim your free trial</button>
            <footer className='text-black text-opacity-50 text-xs font-bold'>By clicking the button, you are agreeing to our <a href="#terms" className='text-pRed'>Terms and Services</a></footer>
        </form>
    )
}