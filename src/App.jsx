import { IPInfo } from "./components/IPInfo"
import { IPSearch } from "./components/IPSearch"

function App() {
  return (
    <>
      <div className="">
        <header>
          <h1>IP Address Tracker</h1>
          <IPSearch />
        </header>
        <main>
          <IPInfo />
        </main>
      </div>
    </>
  )
  
}

export default App
