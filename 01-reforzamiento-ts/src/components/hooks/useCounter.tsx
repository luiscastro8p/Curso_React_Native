import { useState } from 'react';


export const useCounter = (inicial: number = 10) => {

    const [value, setValue] = useState(inicial)

    const acumular = (num: number) => {
        setValue(value + num)
    }
    return {
        value,
        acumular
    }
}
