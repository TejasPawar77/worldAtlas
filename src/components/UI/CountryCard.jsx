
export const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital,
    } = country;
    return <>
        <li className="container container-card bg-blue-box">
            <div className="">
                <img src={flags.svg} alt={flags.alt} className="hero-image" />
            </div>
            <p>{name}</p>
            <p>{population}</p>
            <p>{capital}</p>
            <p>{region}</p>
        </li>
    </>
}