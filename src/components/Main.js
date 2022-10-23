import React from 'react'
import Fade from "react-reveal/Fade"
import Cards from './Cards'
import Tumblerdatabase from "./Tumblerdatabase"

export default function Main(){


    const cards = Tumblerdatabase.map(item => {
        return (
            <Fade duration={2000} delay={2000}>
            <Cards 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                title={item.title}
                price={item.price}
                description={item.description}
            />
            </Fade>
        )
    })        

    return (
        <div className='p-10 bg-fuchsia-200 duration-500 bg-cover bg-repeat grid grid-cols-1 overflow-hidden items-center justify-items-center align-middle md:items-center gap-2 m-1 md:grid-cols-2 xl:grid-cols-3'>
            {cards}
        </div>
    )
}
