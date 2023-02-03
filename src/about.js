import Header from './header';
import Footer from './footer';
import Section from './section';

function About() {
return(

<div>
    <header className="header">
        <Header/>
    </header>

    

    <section className="section" >
        <Section/>
    </section>

    <footer className="footer">
        <Footer/>
    </footer>

</div>

)
}




export default About;