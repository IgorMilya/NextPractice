import Navigation from '@/components/navigation/Navigation'

const navLinks = [
  { label: 'Home', href: '/', },
  { label: 'Blog', href: '/blog', },
  { label: 'About', href: '/about', },
]
const Header = () => {
  return (
    <header className='container'>
      <Navigation navLinks={navLinks}/>
    </header>
  )
}

export default Header