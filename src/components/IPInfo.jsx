import css from './IPInfo.module.css'

export const IPInfo = () => {
  return (
    <div className={css.container}>
        <div className={css.box}>
            <h2>ip address</h2>
            <p>192.212.174.101</p>
        </div>
        <div className={css.box}>
            <h2>location</h2>
            <p>Brooklyn, NY 10001</p>
        </div>
        <div className={css.box}>
            <h2>timezone</h2>
            <p>UTC -05:00</p>
        </div>
        <div className={css.box}>
            <h2>isp</h2>
            <p>SpaceX Starlink</p>
        </div>
    </div>
  )
}
