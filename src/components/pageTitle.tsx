type PageTitleProps = {
    title: string
}

export const PageTitle = ({ title }: PageTitleProps): JSX.Element => {
    return <h1 className="text-3xl font-semibold">{title}</h1>;
}
