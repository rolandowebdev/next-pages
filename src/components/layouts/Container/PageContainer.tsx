type PageContainerProps = {
    title: string
    children: React.ReactNode
}

export const PageContainer = ({ children, title }: PageContainerProps) => {
    return (
        <main className="my-8 flex flex-col">
            <h1 className="mb-8 text-center text-4xl font-bold">{title}</h1>
            {children}
        </main>
    )
}
