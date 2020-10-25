import styled from 'styled-components';

import { shade } from 'polished';

export const Title = styled.div`
    display: flex;
    align-content: center;

    img {
        width: 800px;
        height: 400px;

        margin-top: -150px;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;

    height: 50px;

    max-width: 750px;

    
    input{
        border: 0;
        width: 60%;
        flex: 1;
        margin-right: 5px;

    }

    button {
        border: 0;
        background: #3bcf13;
        border-radius: 5px 0px 0px 0px;

        &:hover {
            background: ${shade(0.2, '#3bcf13')};
        }
    }



`;


export const Repository = styled.div`

    margin-top: 80px;
    max-width: 750px;

    a {
    color: #000;
    height: 110px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background: #FFF;

    width: 100%;
    transition: transform 0.2s;

    & + a {
        margin-top: 15px;
    }

    &:hover {
        transform: translateX(10px);

        div strong {
            text-decoration: underline;
        }

        svg {
            color: #00FFaa;
        }

    }




    

    img {
        width: 100px;
        height: 100px;
        margin-right: 10px;
    }

    div {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-self: flex-start;

        div {
            display: flex;
            flex-direction: row;
            font-size: 18px;

            span {
                margin-left: 7px;
            }
        }


    }

    svg {
        margin-left: 10px;
        height: 100%;
    }
    }
`;


export const Error = styled.span`
  color: #ff0000;
`;