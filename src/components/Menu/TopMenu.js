import React from 'react'
import { Navbar} from'react-bootstrap'
import { ReactComponent as Logo } from "../../assets/img/logo (1).svg";

import './TopMenu.scss'
export const TopMenu = () => {
  return (


    <Navbar bg="dark" variant="dark" className='top-menu'>
    <BrandNav />
    
    
    
    
    </Navbar>
  )
}



function BrandNav() {
    return (
      <Navbar.Brand>
        <Logo />
        <h2>La casa de los helados</h2>
      </Navbar.Brand>
    );
  }


  