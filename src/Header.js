import {ReactComponent as MobileMenu} from './images/icon-menu.svg';
import {ReactComponent as Logo} from './images/logo.svg';
import {ReactComponent as Close} from './images/icon-close.svg'; 
import { useState } from 'react';

export const MobileHeader = () => {
    const [showMenuItems, setShowMenuItems] = useState(false);
  
    const handleToggleMenu = () => {
      setShowMenuItems(!showMenuItems);
    }
    return (
      <div className='header-left'>
            <MobileMenu className='menu' onClick={handleToggleMenu}/>
            <Logo/>
            <div className={showMenuItems ? "active" : "menu-items"}>
              <div className='nav-bar'>
              <Close className='close' onClick={handleToggleMenu}/> 
              <nav>
                <ul>
                  <li><a href='/'>Collections</a></li>
                  <li><a href='/'>Men</a></li>
                  <li><a href='/'>Women</a></li>
                  <li><a href='/'>About</a></li>
                  <li><a href='/'>Contact</a></li>
                </ul>
              </nav>
              </div>
           
            </div>
  
          </div>
    )
  };

export const DesktopHeader = () => {
    return (
      <div className='header-desktop-left'>
        <Logo/>
              <nav>
                <ul>
                  <a href='/'>Collections</a>
                  <a href='/'>Men</a>
                  <a href='/'>Women</a>
                  <a href='/'>About</a>
                  <a href='/'>Contact</a>
                </ul>
              </nav>                    
                  </div>
    )
  };