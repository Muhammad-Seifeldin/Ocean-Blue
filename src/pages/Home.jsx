import About from "../components/AboutSection"
import Hero from "../components/HeroSection"
import Services from "../components/Services"
import Journal from "../components/JournalSection"
import ScrollToTopButton from "../components/ScrollTopButton"

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Journal />
            <ScrollToTopButton />
        </div>
    )
}

export default Home