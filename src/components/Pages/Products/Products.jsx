import React, { useEffect, useState } from 'react';
import './products.css';
import IMG1 from '../../../assets/img/bg_4.jpg';
import IMG2 from '../../../assets/img/m2.jpg';
import IMG3 from '../../../assets/img/m3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durée de l'animation (en ms)
      easing: 'linear', // Fonction d'animation
      once: true, // Si true, l'animation se jouera une seule fois à l'apparition
    });
  }, []);

  let productStore = [
    {
      id: '1',
      img: IMG1,
      category: 'Canapé',
    },
    {
      id: '2',
      img: IMG2,
      category: 'Table basse',
    },
    {
      id: '3',
      img: IMG3,
      category: 'Lustre',
    },
  ];


  return (
    <section className="products">
      <p>NOS PRODUITS</p>
      <div className="products_grid__container">
        {productStore.map(({ id, img, category }) => (
          <div className="products_grid-container" key={id}>
            <div className="grid_items" data-aos="zoom-in">
              <img src={img} alt={category} />
              <p className="title">{category}</p>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
};
export default Products