import Link from 'next/link'
const Posts = ({posts}: {posts: any[]}) => {
  return (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
  )
}

export default Posts