'use client'
import useUsers from "@/app/components/data/hooks/useUsers";
import Page from "@/app/components/templates/page"; 
import Title from "@/app/components/templates/title";
import UserForm from "@/app/components/userInfo/userForm";
import UserList from "@/app/components/userInfo/userList";


export default function UserPage() {
    const { user, users, create, update ,erase, modifyUser } = useUsers()

    return (
        <Page className="flex flex-col gap-10">
            <Title primary="Usuários" secondary="Usuários Cadastrados"/>

            {user ? (
                <UserForm
                    user={user}
                    onChange={modifyUser}
                    create={create}
                    update={update}
                    cancel={() => modifyUser(null)}
                    delete={erase}
                />
            ): (
            <>
            <div className="flex justify-end">
                <button className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-md"
                    onClick={() => modifyUser({name: '', cpf: '', phone: '', email: '', nacionality: ''})}>
                    <span>+ Novo Usuário</span>
                </button>
            </div>
            <UserList users={users} onClick={modifyUser}/>
            </>
            )}
        </Page>
    )
}
