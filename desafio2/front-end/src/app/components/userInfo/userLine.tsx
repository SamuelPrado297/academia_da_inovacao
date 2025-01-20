import { User } from "@/share/model/userInterface";
import { FaUserAlt } from "react-icons/fa";

export interface UserLineProps {
    user: User;
    onClick?: (user: User) => void
}

//Função que mostra o de usuário criado na tela
export default function UserLine(props: UserLineProps) {
    return (
        <div className="flex items-center gap-5 bg-zinc-900 p-4 rounded-md cursor-pointer"
            onClick={() => props.onClick?.(props.user)}>
            <FaUserAlt className="flex w-10 h-10"/>
            <div className="flex flex-col">
                <span className="text-lg font-black">{props.user.name}</span>
                <span className="text-sm text-zinc-400">{props.user.email}</span>
            </div>
        </div>
    )
}