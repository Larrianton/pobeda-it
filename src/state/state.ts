import {v1} from "uuid";

export const state: StateType = {
    preciousMetals: [
        {
            code: "gold",
            title: "Золото",
            finenessList: [
                {
                    id: v1(),
                    value: 375,
                    cash: 90,
                    checkingAccount: 100
                },
                {
                    id: v1(),
                    value: 575,
                    cash: 190,
                    checkingAccount: 250
                },
                {
                    id: v1(),
                    value: 585,
                    cash: 200,
                    checkingAccount: 260
                }
            ]
        }, {
            code: "silver",
            title: "Серебро",
            finenessList: [
                {
                    id: v1(),
                    value: 375,
                    cash: 30 ,
                    checkingAccount: 50
                },
                {
                    id: v1(),
                    value: 500,
                    cash: 60,
                    checkingAccount: 120
                },
                {
                    id: v1(),
                    value: 999,
                    cash: 120,
                    checkingAccount: 190
                }
            ]
        },
        {
            code: "platinum",
            title: "Платина",
            finenessList: [
                {
                    id: v1(),
                    value: 850,
                    cash: 240,
                    checkingAccount: 300
                },
                {
                    id: v1(),
                    value: 900,
                    cash: 290,
                    checkingAccount: 320
                },
                {
                    id: v1(),
                    value: 950,
                    cash: 320,
                    checkingAccount: 390
                }
            ]
        },
    ],
    payment: [
        {
            code: "cash",
            title: "Наличные"
        },
        {
            code: "checkingAccount",
            title: "На расчётный счёт"
        },
    ]
}
export type FinenessType = {
    id: string,
    value: number,
    cash: number,
    checkingAccount: number
}
export type MetalType = {
    code: string,
    title: string,
    finenessList: Array<FinenessType>
}
export type PaymentType = {
    code: string,
    title: string
}
export type StateType = {
    preciousMetals: Array<MetalType>,
    payment: Array<PaymentType>
}