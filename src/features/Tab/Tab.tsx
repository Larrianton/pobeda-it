import React from "react";
import style from "./Tab.module.css";

type TabPropsType = {
    isActive: boolean
    value: string
    code: string
    onClick: (code: string) => void
}
export const Tab: React.FC<TabPropsType> = (props) => {
    return (
        <div
            className={`${style.btnWrapper}  ${props.isActive ? style.btnWrapperActive : ""}`}
            onClick={() => props.onClick(props.code)}>
            {props.value}
        </div>
    );
}