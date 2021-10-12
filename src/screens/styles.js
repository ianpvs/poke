import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    background-color: #f3f3f3;
    padding: 15px;
`;

export const Logo = styled.img`
    width: 350px;
    height: 200px;
    object-fit: contain;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px 0 0 5px;
    flex-grow: 1;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #263238;
    border: 1px solid #263238;
    color: #fff;
    border-radius: 0 5px 5px 0;
`;