import styled from "styled-components";

export const Web3DWrapper = styled.div`
    height: 100vh;
    color: #fff;

    .container {
        height: 100%;
        background-color: greenyellow; /* 半透明背景 */
        .header {
            height: 40px;
            background-color: #3498db;
            position: absolute;
            z-index: 99;
            width: 100%;
        }
        .footer {
            height: 40px;
            background: rgba(37, 38, 42, 0.8);
            position: absolute;
            z-index: 99;
            width: 100%;
            bottom: 0;
        }
    }
`;
