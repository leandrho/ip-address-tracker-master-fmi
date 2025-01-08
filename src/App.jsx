import { IPInfo } from "./components/IPInfo"
import { IPSearch } from "./components/IPSearch"
import { Map } from "./components/Map"
import c from "./App.module.css"

function App() {
  return (
    <>
      <div className={c.container}>
        <section className={c.absolute}>
          <h1 className={c.title}>IP Address Tracker</h1>
          <IPSearch />
          <IPInfo />
        </section>
        <main className={c.main}>
          <picture className={c.back__pic}>
              <source media="(max-width: 580px)" srcSet="./images/pattern-bg-mobile.png" />
              <source media="(min-width: 581px)" srcSet="./images/pattern-bg-desktop.png" />
              <img src="./images/pattern-bg-desktop.png" alt="" className={c.back__img}/>
          </picture>
          <div id='map'>
            <Map />
          </div>
        </main>   
      </div>
    </>
  )
  
}

export default App
