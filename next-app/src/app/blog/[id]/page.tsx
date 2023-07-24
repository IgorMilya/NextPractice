type PostProps = {
  params: {
    id: string
  }
}
const getData = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  })
  return await res.json()
}
export const generateMetadata = async ({ params }: PostProps) => {
  const post = await getData(params.id)

  return {
    title: post.title,
  }
}
const Post = async ({ params }: PostProps) => {
  const { id } = params
  const post = await getData(id)
  return (
    <>

      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}

export default Post