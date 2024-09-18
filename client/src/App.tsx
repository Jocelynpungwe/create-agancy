import Header from './components/header/Header'
import Aside from './components/aside/Aside'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <div className="openMenu">
        <Aside />
      </div>
      <Main />
      <Footer />
    </>
  )
}

export default App
