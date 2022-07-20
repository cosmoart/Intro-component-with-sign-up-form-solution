import React from 'react';
import styled from 'styled-components';

const FooterA = styled.footer`
    font-size: 0.7rem;
    text-align: center;
    font-weight: 700;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
    `

export default function Footer() {
    return (
        <FooterA>
            Challenge by <a style={{ color: "#3e52a3" }} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener">Frontend Mentor</a>.Coded by <a style={{ color: "#3e52a3" }} href="https://github.com/cosmoart" target="_blank" rel="noopener">CosmoArt</a>.
        </FooterA>
    )
}