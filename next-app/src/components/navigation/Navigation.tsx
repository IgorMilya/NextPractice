'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLink = {
  label: string
  href: string
}

type NavigationProps = {
  navLinks: NavLink[]
}

const Navigation = ({ navLinks }: NavigationProps) => {
  const pathname = usePathname()

  return (
    <>
      {navLinks.map(link => (
        <Link key={link.label} href={link.href} className={pathname === link.href ? 'active' : ''}>
          {link.label}
        </Link>
      ))}
    </>
  )
}

export default Navigation