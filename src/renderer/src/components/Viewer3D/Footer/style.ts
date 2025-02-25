import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    border: 1px solid #fff;
    box-sizing: border-box;
    pointer-events: all;
    font-size: small;
    background: rgba(37, 38, 42, 0.8);
    /* justify-content:; */
    .info {
        padding: 0 10px;

        color: #fff;
        border-right: 1px solid #fff;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;
