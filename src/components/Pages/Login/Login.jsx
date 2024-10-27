import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { VscPackage } from "react-icons/vsc"
import { CiDiscount1 } from "react-icons/ci"
import { CiGift } from "react-icons/ci"


const Login = () => {
  return (
    <div className="login">
      <div className="login__form-container">
        <form className="login__form">
          <h1 className="login__title">Déjà client ?</h1>
          <p className="login__text">Connectez-vous ici pour poursuivre votre shopping!</p>

          <input className="login__input" type="email" name="email" placeholder="email" required />
          <input className="login__input" type="password" name="password" placeholder="mot de passe" required />
          <input className="login__submit" type="submit" value="Se connecter" />
        </form>

        <div className="login__form">
          <h1 className="login__title">Nouveau client ?</h1>
          <div className='login_correction'><VscPackage size={25}/>
          <p className="login__text">Suivez et gérez vos commandes</p>
          </div>
          <div className='login_correction'><CiDiscount1 size={25}/>
          <p className="login__text">Restez informé de nos bon plans & ventes privées</p>
          </div>
          <div className='login_correction'>
          <CiGift size={25}/><p className="login__text">Et pleins d'autres surprises</p>
          </div>
           
            <Link to="/inscription" className="login__submit">Créer un compte</Link>
          
        </div>
      </div>
    </div>

  )
}
export default Login







