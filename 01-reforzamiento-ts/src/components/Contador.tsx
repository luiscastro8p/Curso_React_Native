import { useState } from 'react'

export const Contador = () => {
    const [value, setValue] = useState(0)
    
    const acumular = (num: number) => {
        setValue(value + num)
    }

    return (
        <>
            <h3>Contador <small> {value}</small></h3>
            <div className='d-flex justify-content-around align-items-center'>
                <button className='btn btn-primary'

                    onClick={() => acumular(1)}>+1</button>
                <button className='btn btn-secondary'
                    onClick={() => setValue(-1)}>-1</button>
            </div>
        </>
    )
}
