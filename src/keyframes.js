import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1}
`;

export const fadeInPulse = keyframes`
    0% { opacity: 0; transform: scale(0.8) translateY(8px); }
    50% { opacity: 1; }
    70% { transform: scale(1) translateY(0); }
`;

export const slideLeft = keyframes`
    0% { margin-left: -100%; opacity: 0; }
    100% { margin-left: 0; opacity: 1; }
`;
export const slideRight = keyframes`
    0% { margin-right: -100%; opacity: 0; }
    100% { margin-right: 0; opacity: 1; }
`;

export const slideUp = keyframes`
    0% { margin-top: 100%; }
    100% { margin-top: 0; }
`;

export const showMenu = keyframes`
    0% { opacity: 0; transform: scale(0,0);  }
    100% { transform: scale(1,1); }
`;
