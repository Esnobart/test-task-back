import css from './Advert.module.css';
import Categories from '../Categories/Categories';
import svg from "../../icons.svg"


const filterCategories = (data) => {
    const categories = [];

    // Adults and children
    if (data.adults > 0) categories.push({ name: 'adults', count: data.adults });
    if (data.children > 0) categories.push({ name: 'children', count: data.children });

    // Engine and transmission
    if (data.engine) categories.push({ name: data.engine, count: 1 });
    if (data.transmission) categories.push({ name: data.transmission, count: 1 });

    // Details
    for (const [key, value] of Object.entries(data.details)) {
        if (typeof value === 'number' && value > 0) {
            categories.push({ name: key, count: value });
        } else if (typeof value === 'string' && value !== '') {
            categories.push({ name: key, count: value });
        }
    }

    return categories;
};


const Advert = ({ data }) => {
    const categories = filterCategories(data)
    return (
        <div key={data._id} className={css.advertsMainContainer}>
            <img src={data.gallery[0]} className={css.advertListPhoto} alt={data.name} />
            <div className={css.advertInfoContainer}>
                <div className={css.advertsNameAndPrice}>
                    <h1 className={css.advertNameText}>{data.name}</h1>
                    <div className={css.advertsPriceAndFavorite}>
                        <h2 className={css.advertPrice}>€{data.price}.00</h2>
                        <button className={css.favoriteIcon}>
                            <svg width="24" height="24">
                                <use href={`${svg}#favorite-icon`}></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={css.advertRateAndLocation}>
                    <div className={css.advertRating}>
                        <svg width="16" height="14">
                            <use href={`${svg}#rating-star`}></use>
                        </svg>
                        <p className={css.advertRatingText}>{data.rating} ({data.reviews.length} Reviews)</p>
                    </div>
                    <div className={css.advertLocation}>
                        <svg width="16" height="16">
                            <use href={`${svg}#location-icon`}></use>
                        </svg>
                        <p className={css.advertLocationText}>{data.location}</p>
                    </div>
                </div>
                <p className={css.advertDescription}>{data.description}</p>
                <ul className={css.advertCategoriesList}>
                    {categories.map(({ name, count }) => (
                        <li className={css.advertDetails} key={name}>
                            <Categories name={name} count={count} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Advert;