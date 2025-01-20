import UserLine from "./userLine"
import { User } from "@/share/model/user"

export interface UserListProps {
    users: User[];
    onClick?: (user: User) => void
}

//Função que faz a listagem de usuários na tela
export default function UserList(props: UserListProps) {
    return (
        <div className="flex flex-col gap-4">
            {props.users.map((user: User) => {
                return <UserLine key={user.id} user={user} onClick={props.onClick} />
            })}
        </div>
    )
}