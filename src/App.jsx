import { IPInfo } from "./components/IPInfo"
import { IPSearch } from "./components/IPSearch"

import c from "./App.module.css"

function App() {
  return (
    <>
      <div className={c.container}>
        <header>
          <h1>IP Address Tracker</h1>
          <IPSearch />
        </header>
        <main>
          <figure className="map">
            <img src="" alt="location map" />
          </figure>
        </main>
        <div>
          <IPInfo />
        </div>
        
      </div>
    </>
  )
  
}

export default App
