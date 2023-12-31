'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname()
  const session = useSession()

  console.log(session)
  return (
    <>
      {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={pathname === link.href ? 'active' : ''}
          >
            {link.label}
          </Link>
        ),
      )}
      {session?.data && (<Link href='/profile'>Profile</Link>)}
      {session?.data ? (<Link href='#' onClick={() => signOut({ callbackUrl: '/' })}>Sign out</Link>) : (
        <Link href='/signin'>Signin</Link>)}
    </>
  )
}

export { Navigation }
