import styled from "styled-components";

export const Wrapper = styled.div`
    /* z-index: 10; */
    width: 315px;
    height: 470px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 1;

    .title {
        height: 30px;
        background: #1b1b1b;
        font-size: 14px;
        line-height: 30px;

        padding: 0 10px;

        display: flex;
        justify-content: space-between;

        cursor: pointer;

        .right {
            display: flex;
            .icon {
                cursor: pointer;
                margin: 0 5px;
            }
        }
    }

    .contextMenu {
        height: 100%;
        .content {
            height: 100%;
        }
    }
`;

export const TitleWrapper = styled.div``;
