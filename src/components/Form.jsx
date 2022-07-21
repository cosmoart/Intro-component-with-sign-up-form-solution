import React from 'react';
import styled from 'styled-components';

const InputF = styled.input`
    padding: 10px;
    border-radius:3px;
    &::placeholder{
        font-weight: 500;
    }
    `
export default function Form() {

    return (
        <form className='flex gap-3 flex-col p-5 bg-white shadow-pShadow rounded-md'>
            <InputF type="text" id='firstName' name="firstName" placeholder="First Name" required/>
            <label htmlFor="firstName" aria-live='true'></label>
            <InputF type="text" name="lastName" id='lastName' placeholder="Last Name" required />
            <label htmlFor="lastName" aria-live='true'></label>
            <InputF type="mail" name="email" id='mail' placeholder="Email Address" required />
            <label htmlFor="mail" aria-live='true'></label>
            <InputF type="password" name="password" id='password' placeholder="Password" required />
            <label htmlFor="password" aria-live='true'></label>
            <button type="submit" className='bg-pGreen rounded-sm p-3' >Claim your free trial</button>
            <footer className='text-black text-opacity-50 text-xs'>By clicking the button, you are agreeing to our <a href="https://www.example.com" className='text-pRed'>Terms and Services</a></footer>
        </form>
    )
}