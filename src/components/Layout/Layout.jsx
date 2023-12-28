import React from 'react'
import AppFooter from './AppFooter'
import AppNavbar from './AppNavbar'

const Layout = ({children}) => {
  return (
    <>
    <AppNavbar/>
    <div className='App'>{children}</div>
    <AppFooter/>
    </>
  )
}

export default Layout