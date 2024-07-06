import css from './Location.module.css'
import svg from "../../icons.svg"

export const Location = () => {
    return (
        <div>
            <p className={css.locationText}>Location</p>
            <div className={css.locationWrapper}>
                <svg width="9" height="10" className={css.locationIcon}>
                    <use href={`${svg}#location-icon`}></use>
                </svg>
                <input type="text" className={css.locationInput} />
            </div>
        </div>
    )
}