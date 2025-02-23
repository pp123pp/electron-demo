import styled from "styled-components";

export const Wrapper = styled.div`
    height: 30px;
    background: rgba(37, 38, 42, 0.8);
    position: absolute;
    z-index: 99;
    width: 100%;
    bottom: 0;

    display: flex;
    border: 1px solid #fff;
    box-sizing: border-box;

    font-size: small;

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
