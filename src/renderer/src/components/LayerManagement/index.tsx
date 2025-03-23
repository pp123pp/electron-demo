import classNames from "classnames";
import { CSSProperties, memo } from "react";
import { Wrapper } from "./style";

export default memo(function ({
    style,
    className = "",
}: {
    style?: CSSProperties;
    className?: string;
}) {
    return (
        <Wrapper style={style} className={classNames(className)}>
            拖动我
        </Wrapper>
    );
});
