export const TiposBasicos = () => {
    const name: string = 'luis';
    const age: number = 23;
    const active: boolean = true;
    const poderes: (string | number)[] = ['Velocidad', 'Volar', 'Respirar en el agua'];


    return (
        <>
            <h3>Tipos Basicos</h3>
            {name} , {age} , {active ? 'activo' : 'no activo'}
            <br />
            {poderes.join(', ')}
        </>
    )
}


