import React, { useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

import { Gents,Ladies } from '../data';
import WomensCollection from '../components/WomensCollection'

const MainPage = () => {

    const [gentsFashion, setGentsFashion] = useState(Gents);
    const [ladiesFashion, setLadiesFashion] = useState(Ladies);
    console.log(gentsFashion)

    return (
        <div>
            <Header />
            <Banner />
            <Collections gentsFashion={gentsFashion} />
            <WomensCollection ladiesFashion={ladiesFashion} />
            <Footer />
        </div>
    )
}

export default MainPage
