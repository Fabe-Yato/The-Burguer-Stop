import React from 'react'
import '../Menu.css'
import Hamburguer from './hamburguer.png'

const Header = () => {
    return(
        <div>
            <div className = 'menu'> 
                <h1 className = 'logo-menu'>
                    <img className = 'hamburguer-logo' src={Hamburguer} />
                    TheBurguer<span>Stop</span>
                </h1>
                <ul>   
                    <li>Inicio</li>
                    <li>Cardápio</li>
                    <li>Promoções</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;