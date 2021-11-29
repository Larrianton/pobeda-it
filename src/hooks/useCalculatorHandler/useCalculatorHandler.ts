import {useState} from "react";

export const useCalculatorHandler = () => {
    const [codeMetal, setCodeMetal] = useState<string>('gold');
    const [metalSample, setMetalSample] = useState<string>("");
    const [paymentType, setPaymentType] = useState<string>("");
    const [codePayment, setCodePayment] = useState<string>("");
    const [result, setResult] = useState<string>(" ");
    const [weight, setWeight] = useState("")
    return {
        setCodeMetal, setMetalSample, setPaymentType, setCodePayment, setResult,
        setWeight, codeMetal, metalSample, paymentType, codePayment, result, weight
    }
};

