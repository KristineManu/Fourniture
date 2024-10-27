import React from 'react'
import './header.css'
import LOGO from '../../assets/img/logo.png'
import { MdOutlineAccountCircle } from "react-icons/md"
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { LuShoppingBasket } from "react-icons/lu"
import { Link } from 'react-router-dom'
import M2 from '../../assets/img/m2.jpg'


const Header = () => {

    return (


        <header className="header">

            <div className="container">
                <div className="header_inner">
                    <div className="header_inner-first">
                        <Link to="/"><img src={LOGO} alt="logo" height="40px" width="40px" /></Link>
                        <nav>
                            <ul>
                                <li><Link to="/login"><MdOutlineAccountCircle size={30} /> </Link> </li>

                                <li><Link to="/"><MdOutlineFavoriteBorder size={30} /></Link> </li>
                                <li><Link to="/"><LuShoppingBasket size={30} /></Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header_inner-second">
                        <nav>
                            <ul>
                                <li className="plans">
                                    <Link to="/plans">  BON PLANS</Link>
                                    <div className='popup_content'>
                                        <figure className='my_figure'>
                                        
                                         <Link to="/meubles"><img src={M2} alt="" height="250px" width="250px" /></Link>
                                         <figcaption className='my_caption'>Meubles</figcaption>
                                         
                                        </figure>
                                        <figure className='my_figure'>
                                        
                                         <Link to="/"><img src={M2} alt="" height="250px" width="250px" /></Link>
                                         <figcaption className='my_caption'>Canapés</figcaption>
                                         
                                        </figure>
                                        <figure className='my_figure'>
                                        
                                         <Link to="/"><img src={M2} alt="" height="250px" width="250px" /></Link>
                                         <figcaption className='my_caption'>Deco</figcaption>
                                         
                                        </figure>
                                    </div>
                                </li>
                                <li className="news">
                                    <Link to="/news">NOUVEAUTES</Link>
                                    <div className='popup_content'>
                                        <h3>Petite Page</h3>
                                        <p>Ceci est une petite description ou une section qui apparaît au survol de l'élément.</p>
                                    </div>
                                </li>
                                <li className='sofas'>
                                    <Link to="/sofas">CANAPES</Link>
                                    <div className='popup_content'>
                                        <h3>Petite Page</h3>
                                        <p>Ceci est une petite description ou une section qui apparaît au survol de l'élément.</p>
                                    </div>
                                    </li>
                                <li className='products'>
                                    <Link to="/products">TOUS LES PRODUITS</Link>
                                <div className='popup_content'>
                                        <h3>Petite Page</h3>
                                        <p>Ceci est une petite description ou une section qui apparaît au survol de l'élément.</p>
                                    </div>
                                </li>
                                <li className='deco'>
                                    <Link to="/deco">DECO</Link>
                                    <div className='popup_content'>
                                        <h3>Petite Page</h3>
                                        <p>Ceci est une petite description ou une section qui apparaît au survol de l'élément.</p>
                                    </div>
                                    </li>

                            </ul>
                        </nav>

                    </div>
                    



                </div>

            </div>



        </header >

    )
}

export default Header