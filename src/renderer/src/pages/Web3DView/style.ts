import styled from "styled-components";

export const Web3DWrapper = styled.div`
    height: 100vh;
    color: #fff;

    .panel {
        position: absolute;
        z-index: 99;
        width: 100%;
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        height: 100%;
        pointer-events: none;

        .subMenu {
            flex: 1;
            align-self: flex-end;
            background: rgba(0, 0, 0, 0.5);
            width: 300px;
            pointer-events: "auto";
        }
    }
`;
