import "./css/styles.css"
import List from "./components/list.js"
const gifts = ["Medias", "Gorras", "Tuki"]

function App() {
  return (
    <div className="App">
      <div className="txt">
        <h1>Regalos:</h1>
        <List />
      </div>
    </div>
  )
}

export default App
