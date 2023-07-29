import { NextResponse } from 'next/server'
import { posts } from './posts'

export const GET = async (req: Request, res: Response) => {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get('q')
  let currentPost = posts

  if (query) {
    currentPost = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }

  return NextResponse.json(currentPost)
}

export const POST = async (req: Request, res: Response) => {
  const body = await req.json()

  return NextResponse.json(body)
}