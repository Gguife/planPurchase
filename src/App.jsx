import './App.css'
import Menu from './components/menu/Menu'
import MainRouter from './routes/MainRouter'

function App() {

  return (
    <div className='app-container'>
      <div className='app-menu'>
        <Menu />
      </div>
      <div className="app-pages">
        <MainRouter />
      </div>
    </div>
  )
}

export default App
