'use client'

interface ContainerProps {
    wide?: Boolean,
    children: React.ReactNode
}

const Container: React.FC <ContainerProps> = ({wide,
    children
}) => {
    return (
        <div className={`${wide ? '2xl:mx-24' : 'mx-6'}`}>{children}</div>
    )
}

export default Container