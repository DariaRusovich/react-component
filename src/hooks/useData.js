import { useState, useEffect, useContext, createContext } from 'react'

const initialState = 0

const DataContext = createContext(initialState)

export function useData() {
    return useContext(DataContext)
}

export function DataProvider({children}) {
    const [state, setState] = useState(initialState)
    return <DataContext.Provider value={[state, setState]}>{children}</DataContext.Provider>
}