import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "../SelectMetal/SelectMetal.module.css"
import {useSelectHandler} from "../../hooks/useSelectHandler";


export type SelectWeightPropsType = {
    value: string
    onChange: (value: any) => void
}


export function SelectWeight(props: SelectWeightPropsType) {
    const {active, setActive, toggleItems} = useSelectHandler();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setActive(!active)
        }
    }


    return (
        <div className={styles.selectWrapper} onClick={toggleItems}>
            <div className={styles.select}>
                {active ? <input value={props.value} onChange={onChange}
                                 autoFocus={true} onKeyPress={onKeyPressEnter}
                    /> :
                    <span className={styles.main}
                          onClick={toggleItems}> {props.value ? props.value : "Вес в граммах"}</span>}
            </div>
        </div>
    );
}
