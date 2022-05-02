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
                  <li><a>Collections</a></li>
                  <li><a>Men</a></li>
                  <li><a>Women</a></li>
                  <li><a>About</a></li>
                  <li><a>Contact</a></li>
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
                  <a>Collections</a>
                  <a>Men</a>
                  <a>Women</a>
                  <a>About</a>
                  <a>Contact</a>
                </ul>
              </nav>                    
                  </div>
    )
  };