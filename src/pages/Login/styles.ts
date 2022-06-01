import styled from "styled-components";

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 900px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 30px;
    div {
        margin-top: 10px;
        label {
            float: left;
            display: block;
            width: 100px;
        }
        input {
            margin-left: 0px;
            width: 300px;
        }
    }
    button {
        margin-top: 10px;
        width: 160px;
        background-color: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #fff;
        font-weight: bold;
    }
`