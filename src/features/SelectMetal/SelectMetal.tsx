import React from "react";
import styles from "./SelectMetal.module.css"
import {FinenessType} from "../../state/state";
import {useSelectHandler} from "../../hooks/useSelectHandler";


export type SelectMetalPropsType = {
    value: string
    onChange: (value: any) => void
    items: Array<FinenessType>
}


export function SelectMetal(props: SelectMetalPropsType) {
    const {
        active,
        hoveredElementValue,
        setHoveredElementValue,
        toggleItems
    } = useSelectHandler();

    const hoveredItem = props.items.find(i => i.id === hoveredElementValue)

    const onItemClick = (value: number) => {
        props.onChange(value);
        toggleItems();
    }

    return (
        <div className={styles.selectWrapper} onClick={toggleItems}>
            <div className={styles.select} tabIndex={0}>
                <span className={styles.main}
                > {props.value ? props.value : "Проба метала"}</span>
            </div>
            {active &&
            <div className={styles.items}>
                {props.items.map(i => <li key={i.id}
                                          onMouseEnter={() => setHoveredElementValue(i.id)}
                                          className={styles.item + " " + (hoveredItem === i ? styles.selected : " ")}
                                          onClick={() => onItemClick(i.value)}> {i.value}</li>)}
            </div>
            }

        </div>
    );


}
