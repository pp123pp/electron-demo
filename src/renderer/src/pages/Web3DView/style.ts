import styled from "styled-components";

export const Web3DWrapper = styled.div`
    height: 100vh;
    color: #fff;

    .container {
        height: 100%;
        background-color: greenyellow; /* 半透明背景 */
        .header {
            height: 40px;
            position: absolute;
            z-index: 99;
            width: 100%;
            .subMenu {
                width: 280px;
                height: calc(100% - 70px);
                position: absolute;
                transition: right 0.4slinear;
                right: 0;
                top: 40px;
                background-color: rgba(37, 38, 42, 0.9);
                z-index: 1;
            }
        }
    }
`;
