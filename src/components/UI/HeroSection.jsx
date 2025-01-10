import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
     return (
       <main className="hero-section main">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className="heading-xl">Amazing Facts about world</h1>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti blanditiis atque omnis ex?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odio. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt possimus excepturi magni inventore qui quasi itaque id perspiciatis provident ad.</p>
            <button className="btn">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </div>
    
          <div className="hero-image">
            {/* <h1>This is image</h1> */}
            <img src="https://tse2.mm.bing.net/th?id=OIP.XB0VKnfA6MkJqCuYiGpfLwHaE8&pid=Api&P=0&h=180" alt="world wonder" />
          </div> 
        </div>
       </main>
       )
}