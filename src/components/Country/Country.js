import React from 'react';
import './Country.css'

const Country = (props) => {
  

    const {flags, name, population, continents,region}= props.country;

    return (
        
            <div className='country'>
            <img src={flags.svg} alt="" />
            <h1>{name.common} </h1>
            <h2>Continents:{continents[0]} </h2>
            <h2>Region:{region} </h2>
            <h2>Population:{population} </h2>
           
            
            
        
        </div>
    );
};

export default Country;