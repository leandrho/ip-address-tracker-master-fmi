import { useRef } from 'react';
import { useIP } from '../hooks/useIP';
import c from './IPSearch.module.css';

export const IPSearch = () => {
  const ipref = useRef(null);
  const {ip, setIP} = useIP();
  const handleSubmit = (e)=>{
    e.preventDefault();
    setIP(ipref.current.value);
  }
  return (
    <form onSubmit={handleSubmit} className="search__form">
      <div className={c.search__box}>
        <input ref={ipref} type="text" name="search_input" id="search_input" placeholder="Search for any IP Address or domain" className={c.input}/>
        <button type="submit" className={c.btn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
        </button>
      </div>
    </form>
  )
}
