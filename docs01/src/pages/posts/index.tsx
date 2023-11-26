import { postList } from "@/posts"

export default function Posts() {
    return (
        <div>
            Posts
            {postList.map(post => {
                return (
                    <>
                        {post.show && <>
                            <h1>{post.id}</h1>
                            <h2>{post.title}</h2></>}

                    </>
                )
            })}
        </div>
    )
}