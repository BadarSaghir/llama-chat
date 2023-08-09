"use client"

import { useStore } from "./store"

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
    useStore.setState({ message: [] })
    return <>{children}</>

}

export default Provider
