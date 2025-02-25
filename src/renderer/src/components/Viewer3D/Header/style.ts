import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
    background-color: #2f3034;
    pointer-events: all;
    .item {
        width: 105px;
        margin: 0 10px;
        display: flex;

        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        transition:
            color 0.3s ease,
            background-color 0.3s ease;
    }

    .menu {
        &:hover {
            color: #5788ff;
            background: linear-gradient(
                180deg,
                rgba(87, 136, 255, 0),
                rgba(87, 136, 255, 0.26) 100%,
                #5788ff 0
            );
        }
    }
`;
