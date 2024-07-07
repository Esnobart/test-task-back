import { NavLink } from "react-router-dom";
import css from './HomePage.module.css'

export default function HomePage() {
    return (
        <div className={css.StartPage}>
            <h1 className={css.MainText}>Wellcome to Nightcrawler</h1>
            <p className={css.Text}>After pressing this button you will give us your soul and go to the catalog</p>
            <NavLink to="/catalog" className={css.Button}>Start searching</NavLink>
        </div>
    )
}