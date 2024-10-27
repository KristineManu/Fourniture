import React from 'react'
import './inscription.css'
const Inscription = () => {
    return (
      <div className='img'>
      <form className="form_creat" method="POST" >
    <h1>Déjà client ?</h1> 
    <p> Connectez-vous ici pour poursuivre votre shopping!</p>

    
    <input className="box_creat" type="text"  name="last_name"  placeholder="nom" required/><br/><br/>

  
    <input className="box_creat" type="text"  name="first_name"  placeholder="prénom"required/><br/><br/>

 
    <input className="box_creat" type="email"  name="email" placeholder="adresse email"required/><br/><br/>

    
    <input className="box_creat" type="password" name="password" placeholder="mot de passe" required/><br/><br/>

    <input className="submit_creat" type="submit" value="S'inscrire"/>
</form>

      </div>
    )
  }
  

export default Inscription