import { useIP } from '../hooks/useIP';
import css from './IPInfo.module.css'


export const IPInfo = () => {
    const {ipInfo, ip} = useIP();
  return (
    <div className={css.container}>
        <div className={css.box}>
            <h2>ip address</h2>
            <p>{ip}</p>
        </div>
        <div className={css.box}>
            <h2>location</h2>
            <p>{ipInfo.region}</p>
        </div>
        <div className={css.box}>
            <h2>timezone</h2>
            <p>UTC {ipInfo.timezone}</p>
        </div>
        <div className={css.box}>
            <h2>isp</h2>
            <p>{ipInfo.isp}</p>
        </div>
    </div>
  )
}
