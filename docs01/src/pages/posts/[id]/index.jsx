import { useRouter } from 'next/router'

export default function PostsId() {
    const router = useRouter()
    return <p>Post Id: {router.query.id}</p>
}
