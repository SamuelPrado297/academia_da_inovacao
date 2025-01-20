//Adiciona filhos a página
export interface PaginaProps { 
    children: any
    className?: string
}

export default function Page(props: PaginaProps) {
    return (
        <div>
            <main className={`flex-1 p-7 ${props.className ?? ''}`}>{props.children}</main>
        </div>
    ) 
}