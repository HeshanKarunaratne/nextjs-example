import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Users'
}

import getAllUsers from '@/lib/getAllUsers';
export default async function Users() {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData

    const content = (
        <section>
            <h2>
                <Link href="/">Back To Home</Link>
            </h2>
            <br />
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )
    return content;
}
