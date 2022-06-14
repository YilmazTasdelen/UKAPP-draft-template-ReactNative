import React, { useState } from "react";

const useHome = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [items, setItems] = useState([
        { label: 'Closed Events', value: 0 },
        { label: 'Open Evnts', value: 1 },
    ]);

    return {
        open,
        setOpen,
        value, 
        setValue, 
        items,
        setItems, 
    }
};

export default useHome;