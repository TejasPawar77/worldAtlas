import { useState, useTransition } from "react";
import { useEffect } from "react"
import { getCountryData } from "../api/Api"
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/UI/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTrasition] = useTransition();
  const [countries, setCountries] = useState();

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTrasition(async() => {
      const res = await getCountryData();
      // console.log(res);
      setCountries(res.data);
    })
    
  },[]);

  if (isPending) return <Loader />;

  const searchCountry = (country) =>{
    if(search){
      return country.name.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

//  const filterCountries = countries.filter((country) => searchCountry(country));
 
  return <>
     {/* --- Login of country with all information ---*/}
     <section className="country-section container">
      <SearchFilter 
      search={search} 
      setSearch={setSearch} 
      filter={filter}
      setFilter={setFilter}
      />

      <ul className="grid grid-four-cols ">
        {Array.isArray(countries) && countries.map((country, index) => {
          return <CountryCard country={country} key={index}/>;
        })}
      </ul>
    </section>
    </> 
}
