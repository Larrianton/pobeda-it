import React from "react";
import styles from "../SelectMetal/SelectMetal.module.css"
import {PaymentType} from "../../state/state";
import {useSelectHandler} from "../../hooks/useSelectHandler";


export type SelectPaymentPropsType = {
    code: string
    value: string
    onChange: (title: string, code: string) => void
    items: Array<PaymentType>
}


export function SelectPayment(props: SelectPaymentPropsType) {
    const {
        active,
        hoveredElementValue,
        setHoveredElementValue,
        toggleItems
    } = useSelectHandler();

    const hoveredItem = props.items.find(i => i.code === hoveredElementValue)

    const onItemClick = (title: string, code: string) => {
        props.onChange(title, code);
        toggleItems();
    }

    return (
        <div className={styles.selectWrapper} onClick={toggleItems}>
            <div className={styles.select} tabIndex={0}>
                <span
                    className={styles.main}> {props.value ? props.value : "Способ оплаты"}</span>
            </div>
            {active &&
            <div className={styles.items}>
                {props.items.map(i => <li key={i.code}
                                          onMouseEnter={() => setHoveredElementValue(i.code)}
                                          className={styles.item + " " + (hoveredItem === i ? styles.selected : " ")}
                                          onClick={() => onItemClick(i.title, i.code)}> {i.title}</li>)}
            </div>
            }

        </div>
    );


}
