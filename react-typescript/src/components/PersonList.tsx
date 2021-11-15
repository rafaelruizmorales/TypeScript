type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            <ul>
                {
                    props.names.map(name => {
                        return (
                            <li key={name.first}>{name.first} {name.last}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}