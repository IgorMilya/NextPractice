import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import { headers, cookies } from 'next/headers'

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id
  const headersList = headers()
  const cookiesList = cookies()
  const type = headersList.get('Content-Type')
  const cookie1 = cookiesList.get('Cookie_1')


  // redirect('/blog')

  return NextResponse.json({ id, type, cookie1 })
}