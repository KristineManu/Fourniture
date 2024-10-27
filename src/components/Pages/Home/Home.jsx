import React, { useState } from 'react'; // Importation des bibliothèques nécessaires
import './home.css'; // Importation du fichier CSS pour le style
import { GrFormPrevious } from "react-icons/gr"; // Icône pour le bouton précédent
import { MdNavigateNext } from "react-icons/md"; // Icône pour le bouton suivant
import BG1 from "../../../assets/img/bg_4.jpg"; // Importation de la première image
import BG2 from "../../../assets/img/bg_6.jpg"; // Importation de la deuxième image
import Products from '../Products/Products.jsx'; // Importation du composant Products

const Home = () => {
  // État pour suivre l'index actuel du slide
  const [currentIndex, setCurrentIndex] = useState(1);

  // Tableau contenant les images à afficher dans le carrousel
  const slides = [BG1, BG2, BG1];
const text = ['Noel', 'Chic', 'Nouveauté']
  // Fonction pour changer de slide en fonction de la direction (1 pour suivant, -1 pour précédent)
  const handleSlideChange = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction; // Calcule le nouvel index
      if (newIndex < 0) return slides.length - 1; // Si l'index est en dehors, on va au dernier slide
      if (newIndex >= slides.length) return 0; // Si l'index dépasse, on revient au premier slide
      return newIndex; // Retourne le nouvel index
    });
  };

  return (
    <>
      <div>
        <div className="carousel">
          <div className="carousel_text">
            {/* Bouton précédent */}
            <button className="btn" id="prev" onClick={() => handleSlideChange(-1)}>
              <GrFormPrevious size={60} />
            </button>

            {/* Bouton suivant */}
            <button className="btn" id="next" onClick={() => handleSlideChange(1)}>
              <MdNavigateNext size={60} />
            </button>
            
              {/* Boucle à travers les slides pour les afficher */}
              {slides.map((src, index) => (
                <div className={`slide ${index === currentIndex ? 'active' : ''}`} key={index}>
                  <img src={src} alt={`Slide ${index + 1}`} />

                  <h1>{text[index]}</h1>
                  </div>


              ))}
            
          </div>
        </div>

      </div>
      <Products /> {/* Inclusion du composant Products */}
    </>
  );
};

export default Home // Exportation du composant Home
