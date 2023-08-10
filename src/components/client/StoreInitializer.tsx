"use client"

import React, { useRef } from "react"
import _store from "../../store/store"

export const StoreInitializer:React.FC<{value:Omit<ReturnType< typeof _store.getState>,string>}> = ({value}) => {

    const initialize=useRef(false)
    if(!initialize.current){
        _store.setState(value)
        initialize.current=true
    }
    

    return<></>
}