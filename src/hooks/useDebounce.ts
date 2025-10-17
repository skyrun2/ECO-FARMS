'use client'

import { useEffect, useState } from "react"

export default function useDebounce<T>(val: T,delay=500):T{
    const [debounceVal, setDebounceVal] = useState(val);

    useEffect(()=>{
        const handler = setTimeout(()=> setDebounceVal(val),delay);
        return () => clearTimeout(handler);

    },[val,delay])

    return debounceVal;
}