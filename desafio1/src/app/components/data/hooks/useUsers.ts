'use client'
import Backend from "@/backend"
import { useEffect, useState } from "react"
import { User } from "@/share/model/user"

export default function useUsers() {
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<Partial<User> | null>(null)

    useEffect(() => {
        Backend.users.get().then(setUsers)
    }, [])

    async function create() {
        if (!user) return
        await Backend.users.create(user)
        const users = await Backend.users.get()
        setUsers(users)
        setUser(null)
    }

    async function update() {
        if (!user || !user.id) return
        await Backend.users.update(user.id, user)
        const users = await Backend.users.get()
        setUsers(users)
        setUser(null)
    }

    async function erase() {
        if (!user || !user.id) return
        await Backend.users.delete(user.id)
        const users = await Backend.users.get()
        setUsers(users)
        setUser(null)
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