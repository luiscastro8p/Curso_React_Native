interface Person {
    name: string;
    age: number;
    direction: Direction
}
interface Direction {
    city: string;
    state: string;
}

export  const ObjetosLiterales = () => {
    const me: Person = {
        name: 'Luis',
        age: 23,
        direction: {
            city: 'Los mochis',
            state: 'Sinaloa'
        }
    }

    return (
        <div>
            <h3>Objetos literales</h3>
            <code>
                <pre>{JSON.stringify(me, null, 2)}</pre>
            </code>
        </div>
    )
}
