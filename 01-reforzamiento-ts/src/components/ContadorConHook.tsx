import { useState } from 'react'
import { useCounter } from './hooks/useCounter'

export const ContadorConHook = () => {
    const { value , acumular} = useCounter(100);

    return (
        <>
            <h3>Contador <small> {value}</small></h3>
            <div className='d-flex justify-content-around align-items-center'>
                <button className='btn btn-primary'

                    onClick={() => acumular(1)}>+1</button>
                <button className='btn btn-secondary'
                    onClick={() => acumular(-1)}>-1</button>
            </div>
        </>
    )
}
