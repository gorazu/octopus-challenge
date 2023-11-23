import styled from 'styled-components';

export interface ButtonProps {
    size?: 'small' | 'medium';
}

const Button = styled.button<ButtonProps>`
    background-color: var(--sohoLights);
    color: var(--siphon);
    border-radius: 8px;
    box-shadow: 0;
    padding: ${({ size }) => (size === 'small' ? '0' : '1rem 2rem')};
    height: ${({ size }) => size === 'small' && '2.4rem'};
    width: ${({ size }) => size === 'small' && '2.4rem'};
    font-size: ${({ size }) => (size === 'small' ? '1rem' : '1.2rem')};
    font-family: Gotham, helvetica, arial, sans-serif;
    border: none;
    outline: inherit;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        background-color: var(--plum);
        color: var(--purpleHaze);
    }
`;

export default Button;
