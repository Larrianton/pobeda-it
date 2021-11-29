import React from "react";
import style from "./Calculator.module.css"
import {Tab} from "../../features/Tab/Tab";
import {MetalType, PaymentType} from "../../state/state";
import {SelectMetal} from "../../features/SelectMetal/SelectMetal";
import {SelectPayment} from "../../features/SelectPayment/SelectPayment";
import {SelectWeight} from "../../features/SelectWeight/SelectWeight";
import {useCalculatorHandler} from "../../hooks/useCalculatorHandler";


type CalculatorPropsType = {
    style: object;
    preciousMetalsList: Array<MetalType>
    paymentList: Array<PaymentType>
}
export const Calculator: React.FC<CalculatorPropsType> = (props) => {
    const {
        setCodeMetal, setMetalSample, setPaymentType, setCodePayment, setResult,
        setWeight, codeMetal, metalSample, paymentType, codePayment, result, weight
    } = useCalculatorHandler();

    const metal = props.preciousMetalsList.find(el => el.code === codeMetal)

    const changePaymentType = (title: string, code: string) => {
        setPaymentType(title);
        setCodePayment(code);
    }

    const toggleActiveMetal = (code: string) => {
        setCodeMetal(code);
        setMetalSample("Проба метала ");
        setPaymentType("Способ оплаты");
        setWeight(" ");
    }

    const setLocalStorage = () => {
        localStorage.setItem("codeMetal", codeMetal)
        localStorage.setItem("paymentType", paymentType)
        localStorage.setItem("weight", weight)
        localStorage.setItem("result", result)
    }

    const clearForm = ()=> {
        setCodePayment(" ");
        setMetalSample("Проба метала ");
        setPaymentType("Способ оплаты");
        setWeight(" ");
    }

    const onClickCalculate = () => {
        let result = "";
        if (metal) {
            const changedElement = metal.finenessList.find(el => el.value === +(metalSample))
            if (changedElement && codePayment === "cash") result = `${changedElement.cash * Number(weight)}`
            if (changedElement) result = `${changedElement.checkingAccount * Number(weight)}`
        }
        setResult(result);
        setLocalStorage();
        clearForm();
    }
    const isDisabled = (!metalSample && !paymentType && !weight)
    return (
        <div className={style.calculatorWrapper}>
            <div className={style.calculatorHeader}>
                <h1>Калькулятор</h1>
            </div>
            <div className={style.calculatorMain}>
                <div className={style.calculatorImg} style={props.style}> </div>
                <div className={style.calculatorPayment}>
                    <div className={style.calculatorPaymentTabs}>
                        {props.preciousMetalsList.map(el => <Tab
                            isActive={codeMetal === el.code} key={el.code}
                            value={el.title}
                            code={el.code}
                            onClick={toggleActiveMetal}/>)}
                    </div>

                    <div
                        className={style.calculatorPaymentDescription}>Укажите <br/> следующие
                        параметры
                    </div>
                    <div className={style.calculatorPaymentSelects}>
                        {metal &&
                        <SelectMetal value={metalSample} onChange={setMetalSample}
                                     items={metal.finenessList}/>}
                        {props.paymentList &&
                        <SelectPayment value={paymentType} onChange={changePaymentType}
                                       code={codePayment}
                                       items={props.paymentList}/>}
                        <SelectWeight value={weight} onChange={setWeight}/>
                    </div>
                    <div className={style.calculatorPaymentResults}>
                        <span className={style.descriptionResult}>Итого:{result}</span>

                        <button onClick={onClickCalculate}
                                disabled={isDisabled}
                                className={style.btnResult}>Рассчитать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}