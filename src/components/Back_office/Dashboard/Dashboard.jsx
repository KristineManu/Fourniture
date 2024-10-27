import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <header>
        <h1>Dashboard Administrateur</h1>
        <nav>
            <span>Bonjour, Administrateur</span>
            <Link to='/user'>Notifications</Link>
            <Link to='/user'>Déconnexion</Link>
        </nav>
    </header>
    <aside>
        <ul>
            <li>  <Link to='/'>Accueil</Link></li>
            <li><Link to='/'>Gestion des Produits</Link></li>
            <li><Link to='/stocks'>Suivi des Stocks</Link></li>
            <li><Link to='/commandes'>Commandes</Link></li>
            <li><Link to='/clients'>Clients</Link></li>
        </ul>
        </aside>
    </div>
  )
}

export default Dashboard