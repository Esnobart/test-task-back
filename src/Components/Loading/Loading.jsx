import css from './Loading.module.css'

export const Loading = () => {
    return (
        <div className={css.loaderContainer}>
            <p className={css.loaderText}>Loading</p>
            <div className={css.loader}></div>
        </div>
    );
}
