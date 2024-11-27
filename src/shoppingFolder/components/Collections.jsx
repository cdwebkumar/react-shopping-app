import React from 'react'

const Collections = (props) => {
  var genFas = props.gentsFashion;
  const { title, image1, image2, image3, image4, image5, image6 } = genFas
  return (
    <div className='collSection'>
      <h2>{title}</h2>
      <img className='wmBanner' src="assets/GentsBanner.gif" alt={title} />

      <div className="imgBlk">
        <img src={image1} alt={title} />
        <img src={image2} alt={title} />
        <img src={image3} alt={title} />
        <img src={image4} alt={title} />
        <img src={image5} alt={title} />
        <img src={image6} alt={title} />
      </div>
    </div>
  )
}

export default Collections
