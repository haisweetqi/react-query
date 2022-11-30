import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const router = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/students',
      name: 'Students',
    },
  ]
  return (
    <div>
      {router.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          style={{ textDecoration: 'none', margin: '1rem', padding: '3rem' }}>
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default Header
