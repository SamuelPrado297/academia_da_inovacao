import Link from "next/link";

export interface TitleProps {
    primary: string;
    secondary: string;
}

export default function Title(props: TitleProps) {
    return (
        <div className="flex gap-2">
            <div className="flex flex-col">
                <Link href="/"><p className="text-3xl text-green-500">&#8592;</p></Link>
                <h1 className="text-2xl font-black">{props.primary}</h1>
                <h2 className="text-zinc-400">{props.secondary}</h2>
            </div>
        </div>
    )
}