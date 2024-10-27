import React from 'react'
import './plans.css'
import M2 from '../../../assets/img/m2.jpg'
import { Link } from 'react-router-dom'


const Plans = () => {


  return (

    <div className='article_container'>
      
      <div className='article'>
      <h2><Link to="/meubles">Meuble</Link></h2>
        
        <div className='article_img-container'>
          <Link to="/"><img className='article_img' src={M2} alt="" /></Link>
        </div>
      </div>

      
      <div className='article'>
      <Link to="/"><h2>Canapé</h2></Link>
        
        <div className='article_img-container'>
          <Link to="/"><img className='article_img' src={M2} alt="" /></Link>
        </div>
      </div>

      <div className='article'>
      <Link to="/"><h2>Déco</h2></Link>
        
        <div className='article_img-container'>
          <Link to="/"><img className='article_img' src={M2} alt="" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Plans
