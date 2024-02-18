import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Navbar:React.FC = () => {
  
  const NavContainer = styled.div`
    background-color : #000000;
    color: #fed136;
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.3rem;
  `

  const NavList = styled.li`
  color: #fed136;
  list-style-type: none;
  margin: 0rem 1.6rem;
  `

  let navList: string[] = ['About', 'Books','Download','Services','Contact']
    return (
    <>
    <NavContainer>
            {navList.map((nav: string, index: number)=>
            
            <NavList key={`list${index}`}>
                    {nav}
            </NavList>)}
            
    </NavContainer>

    <Outlet />
        
    </>
  )

}

export default Navbar