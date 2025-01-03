import React, { ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// Define the props type

type LayoutProps = {
    children: ReactNode; // Type for children prop
}
  
  const LayOut: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
    <Header className='self-stretch'/>
    {children}
    <Footer className="mt-[100px]"/>
        
    </>
  )
}

export default LayOut