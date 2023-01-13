
export const Funciones = () => {
    const sumar = (a: number, b: number): number => {
        return a + b
    }

    return (
        <div>
            <h3>Funciones</h3>
            El resultado es: {sumar(1, 3)}
        </div>
    )
}
