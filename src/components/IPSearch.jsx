import c from './IPSearch.module.css';

export const IPSearch = () => {
  return (
    <form onSubmit={()=>{}} className="search__form">
      <div className={c.search__box}>
        <input type="text" name="search_input" id="search_input" placeholder="Search for any IP Address or domain"/>
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
        </button>
      </div>
    </form>
  )
}
