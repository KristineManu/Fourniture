import React, { useState } from 'react'
import './items.css'
import store from './store'

const Items = ({category}) => {
  const [isEnter, setIsEnter] = useState(null);
 const FilterItems = category ? store.filter(item => item.category === category) : store

  return (
    <div className="store_items__main__container">
      {FilterItems.map((item, id) => (

  
        <div className='store_items__main'
          onMouseEnter={() => setIsEnter(id)}
          onMouseLeave={() => setIsEnter(null)}
          style={{
            border: `${isEnter === id  ? '1px solid rgba(0, 0, 0, 0.4)' : ''}`
          }}
          key={id}
        >
          <div>
            <img src={isEnter === id ? item.imgHover : item.img} alt={item.name} />
          </div>

          <h3>{item.name}</h3>
          <span>{item.desc}</span>
          <p>{item.desc_more}</p>
          <h4>{item.price}</h4>
        </div>
      ))}
    </div>
  )
}

export default Items