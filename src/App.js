import Navigation from './component/Navigation'
import Header from './component/Header'
import Games from './component/Games'
import Footer from './component/Footer'
import './App.css'
import background from './img/bg.png'

function App() {
  return (
    <>
      <section style={{ background: 'url(' + background + ')' }}>
        <Navigation />
        <Header />
      </section>
      <Games />
      <Footer />
    </>
  );
}

export default App;
