import React from 'react';
import styled from '@emotion/styled';

const LogoComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    padding: 20px;
    font-size: 20px;
    color: #000;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #778899;
`;

export const Logo = () => {
    return <LogoComponent>Company logo</LogoComponent>;
};