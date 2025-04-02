import styled from "styled-components";

export const Wrapper = styled.div`
    color: #000;

    .menu {
        width: 200px;
        position: fixed;
        z-index: 30000000001;
        background: #292a2e;
        border-radius: 4px;
        color: #e6e6e6;
        box-shadow: 0 2px 6px 0 rgba(26, 26, 28, 0.4);

        ul {
            padding: 0;
            margin: 0;
            li {
                margin: 0;
                text-align: left;
                cursor: pointer;
                width: 100%;
                height: 30px;
                line-height: 30px;
                padding: 0 10px;
                box-sizing: border-box;
                list-style: none;

                &:hover {
                    background: #3d3d3d;
                }
            }
        }
    }
`;
