import React from 'react';
import styled from 'styled-components';

const InputF = styled.input`
    padding: 10px;
    border-radius:3px;
    &::placeholder{
        font-weight: 600;
    }
    `
export default function Form() {

    return (
        <form className='flex gap-3 flex-col p-5 bg-white shadow-pShadow rounded-md'>
            <InputF type="text" name="firstName" placeholder="First Name" />
            <InputF type="text" name="lastName" placeholder="Last Name" />
            <InputF type="mail" name="email" placeholder="Email Address" />
            <InputF type="password" name="password" placeholder="Password" />
            <button type="submit" className='bg-pGreen'>Claim your free trial</button>
            <p className='text-black text-opacity-50'>By clicking the button, you are agreeing to our <a href="https://www.example.com">Terms and Services</a></p>
        </form>
    )
}