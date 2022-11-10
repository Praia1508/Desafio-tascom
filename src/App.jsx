import './App.css'
import Footer from './components/Footer'
import GlobalSituation from './components/GlobalSituationMain/GlobalSituation'
import Header from './components/Header'
import SituationByCountry from './components/SituationByCountryMain/SituationByCountry'

function App() {

  return (
    <div className='app'>
      <Header />
      <GlobalSituation />
      <SituationByCountry />
      <Footer />
    </div>
  )
}

export default App
