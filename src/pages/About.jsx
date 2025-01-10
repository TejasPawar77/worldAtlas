import React from 'react'
import countries from '../api/countryData.json';


export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Amazing Facts
      </h2>

      {/* the card of amazing fact*/}
      <div className="gradient-cards">
        {countries.map((country) => {
          const {id, name, capital, amazingFact} = country;
          return(
          <div className="card" key={id}>
            <div className="container-card bg-blue-box">
              <p className="card-title">{name}</p>
              <p>
                <span className="card-description">capital: </span>
                {capital}
              </p>
              <p>
                <span className="card-description">Amazing Fact: </span>
                {amazingFact}
              </p>
            </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}
