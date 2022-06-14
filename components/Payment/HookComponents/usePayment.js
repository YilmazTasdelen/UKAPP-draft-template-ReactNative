import React, { useState } from "react";
import * as Statics from '../../Static/constants';
import axios from "axios";

const usePayment = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [items, setItems] = useState([
        { label: 'Tutorial Payments', value: 0 },
        { label: 'KP Payments', value: 1 },
    ]);
    const pilotPaymentList =[
        {
            id:1,
            pilotName:"Yılmaz Taşdelen",
            amount:100,
            status:true
        },
        {
            id:2,
            pilotName:"Burcu Tur",
            amount:100,
            status:true
        },
        {
            id:3,
            pilotName:"Serdar  Tur",
            amount:100,
            status:true
        },
        {
            id:3,
            pilotName:"Anıl  Tur",
            amount:100,
            status:true
        },{
            id:4,
            pilotName:"Berkan Öztürk",
            amount:100,
            status:true
        },
        {
            id:5,
            pilotName:"Kasra Sharifi",
            amount:100,
            status:true
        }
    ];

    const pilotPaymentList2 =[
        {
            id:1,
            pilotName:"Yılmaz Taşdelen",
            amount:200,
            status:true
        },
        {
            id:2,
            pilotName:"Burcu Tur",
            amount:400,
            status:true
        },
        {
            id:3,
            pilotName:"Serdar  Tur",
            amount:123,
            status:true
        },
        {
            id:3,
            pilotName:"Anıl  Tur",
            amount:213,
            status:true
        },
    ];
    return {
        open,
        setOpen,
        value, 
        setValue, 
        items,
        setItems,
        pilotPaymentList,
        pilotPaymentList2 
    }
};

export default usePayment;