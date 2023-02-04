import Card from './Card'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import SidebarLink from './SidebarLink'

const links = [
  { label: 'Home', icon: 'Grid', link: '/home' },
  {
    label: 'Calendar',
    icon: 'Calendar',
    link: '/calendar',
  },
  { label: 'Profile', icon: 'User', link: '/profile' },
  {
    label: 'Settings',
    icon: 'Settings',
    link: '/settings',
  },
]

const Sidebar = () => {
  return (
    <Card className="flex h-full w-40 flex-wrap items-center justify-between">
      <div className="flex w-full items-center justify-center">
        <Image src={logo} alt="Able logo" priority className="w-14" />
      </div>
      {links.map((link) => (
        <SidebarLink link={link} />
      ))}
    </Card>
  )
}

export default Sidebar
