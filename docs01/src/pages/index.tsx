import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
      <button onClick={() => router.push('/posts')}>
        Click to navigate to posts
      </button>
    </>
  )
}