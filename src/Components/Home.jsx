import React from "react";
import Carousel from "../Components/Carousel"

const Home = () => {
    return (
        <div className="main" style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto' }}>
        <h1> Piesele zilei</h1>
        <Carousel>
        </Carousel>
        </div>
    )
}

export default Home