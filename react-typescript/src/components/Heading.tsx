type headingProps = {
    children: string | React.ReactNode
}

export const Heading = (props: headingProps) => {
    return (
        <>
            {props.children}
        </>
    )
}