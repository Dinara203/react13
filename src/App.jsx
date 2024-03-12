import Header  from './components/Header/Header'
import Footer  from './components/Footer/Footer'
import Start  from './pages/Start/Strat'
import CatalogPage from './pages/Catalog/Catalog'
import TovarPage from './pages/TovarPage/TovarPage'
import UsersPage from './pages/Users/Users'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import CreatePage from './pages/CreatePage/CreatePage'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Start/>} />
        <Route path="/catalog" element = {<CatalogPage/>} />
        <Route path="/catalog/:id" element = {<TovarPage/>} />
        <Route path="/users" element = {<UsersPage/>} />
        <Route path="/add" element = {<CreatePage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
