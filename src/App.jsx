import Poem from './Poem.jsx'
import './App.css'

function App() {

  return (
    
    <div className="all">
      <div className="body">
        <h1 className="title">Which <span className="script">Emily Dickinson</span> poem are you?</h1>
        <Poem />
      </div>
    </div>
  )
}

export default App
