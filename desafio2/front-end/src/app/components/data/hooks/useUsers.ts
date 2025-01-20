'use client'
import { useEffect, useState } from "react"
import { User } from "@/share/model/userInterface"

export default function useUsers() {
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<Partial<User> | null>(null)

    useEffect(() => {
        //Requisição GET para buscar todos os usuários
        fetch("http://localhost:4000/users") //URL da API
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

        //Após salvar, atualiza a lista de usuários
    async function updatedUsers() {
        const response = await fetch("http://localhost:4000/users");
        const updatedUsers = await response.json();
        setUsers(updatedUsers);
        setUser(null);
    }

    async function create() {
        if (!user) return;
        //POST - envia os dados para salvar o usuário
        const createUser = await fetch("http://localhost:4000/users", {
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json',
            },
            body: JSON.stringify(user),
        });             
        updatedUsers();
        console.log("New User: ", createUser);
    }

    async function update() {
        if(user) {
            //Atualiza um usuário já existente
            await fetch(`http://localhost:4000/users/${user.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(user),
            });
            updatedUsers();
        }
    }
        
    async function erase() {
        if (!user || !user) return
        //DELETE - função para remover o usuário 
        await fetch(`http://localhost:4000/users/${user.id}`, {
            method: 'DELETE',
        });
        updatedUsers();
    }

    return {
        users,
        user,
        create,
        update,
        erase,
        cancel: () => setUser(null),
        modifyUser: (user: Partial<User> | null) => setUser(user),
    }
}