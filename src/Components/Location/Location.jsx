import css from './Location.module.css'
import svg from '../../../icons.svg';

export const Location = () => {
    return (
        <div className={css.locationContainer}>
            <p className={css.locationText}>Location</p>
            <div className={css.locationWrapper}>
                <svg width="18" height="20" className={css.locationIcon}>
                    <use href={`${svg}#location-icon`}></use>
                </svg>
                <input type="text" className={css.locationInput} />
            </div>
        </div>
    )
}