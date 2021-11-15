type personNameType = {
    first: string
    last: string
}

type PersonProps = {
    name: personNameType
}

export const Person = (props:PersonProps) => {
    const fullName = `${props.name.first} ${props.name.last}`
    return (
        <p>{fullName}</p>
    )
}