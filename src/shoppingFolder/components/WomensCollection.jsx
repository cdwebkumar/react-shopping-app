import React from 'react'

const WomensCollection = (props) => {
    var ladFas = props.ladiesFashion;
    const { title, image1, image2, image3, image4, image5, image6 } = ladFas;
    return (
        <div className='womenCollection'>
            <h2 className='WCtitle'>{title}</h2>
            <img className='wmBanner' src="assets/LadiesBanner.gif" alt={title} />
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

export default WomensCollection
