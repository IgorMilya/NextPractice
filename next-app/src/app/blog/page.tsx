import { Metadata } from 'next'
import Link from 'next/link'

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
  if (!res.ok) throw new Error('Error fetch')
  return await res.json()
}
export const metadata: Metadata = {
  title: 'Blog Next App',
}
const Blog = async () => {
  const posts = await getData()

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Blog