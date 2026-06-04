// Hero section
import { Button } from './Button'
import './HeroSection.css'

function HeroSection(){
    return(
        <section className="HeroSection">
            <div className='hero'>
                <div className="hero-right">
                    <img className='hero-img' src="/Hero img.png" alt="solar system" />
                </div>
                <div className="hero-left">
                    <div className='hero-details'>
                        <h1>Explore Our Solar System Through Data</h1>
                        <p>Understand the planets not just by name, but by measurable facts. From size and mass to gravity and density, this page breaks down the solar system in a clear, data-driven way.</p>

                        <div className="button">

                        <Button href="#PlanetCardSection" buttonTitle={"Explore the data"} background={"rgba(22, 75, 175, 1)"} color={"white"}/>

                        <Button href="#FormSection" buttonTitle={"Contact Us"} background={"#051540"}
                        border={"1px solid rgba(221, 221, 221, 1)"} color={"white"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection