import Header from './header';
import Footer from './footer';
import Aside from './aside';
import Section from './section';
import Test1 from './test1';
import Test2 from './test2';
import Test3 from './test3';


function Home() {
  return (
    <div className="App">
    
    <header className="header">
      <Header/>
    </header>

   <div className="container">

    <aside className="aside">
      <Aside/>
    </aside>

    <section>
      <Section/>
    </section>

  </div>

  <div className="container1">
    
      <Test1/>
    

    
      <Test2/>
    

    
      <Test3/>
    


  </div>

    

    <footer className="footer">
      <Footer/>
    </footer>


    


    </div>
  );
}

export default Home;
