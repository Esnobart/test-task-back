import css from './Advert.module.css';
import Categories from '../Categories/Categories';
import svg from '../../../icons.svg';
import { useState, useEffect } from 'react';
import { changeFavorite } from '../../../redux/operations';
import { AdvertModal } from '../AdvertModal/AdvertModal';
import { useDispatch } from 'react-redux';

const filterCategories = (data) => {
    const categories = [];

    if (data.adults > 0) categories.push({ name: 'adults', count: data.adults });

    if (data.engine) categories.push({ name: data.engine, count: 1 });
    if (data.transmission) categories.push({ name: data.transmission, count: 1 });

    for (const [key, value] of Object.entries(data.details)) {
        if (key === 'kitchen' || key === 'beds' || key === 'airConditioner') {
            if (typeof value === 'number' && value > 0) {
                categories.push({ name: key, count: value });
            } else if (typeof value === 'string' && value !== '') {
                categories.push({ name: key, count: value });
            }
        }
        
    }

    return categories;
};


const Advert = ({ data }) => {
    const dispatch = useDispatch();
    const categories = filterCategories(data);
    const [isOpen, setIsOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(data.isFavorite); 

    useEffect(() => {
        setIsFavorite(data.isFavorite); 
    }, [data.isFavorite]);

    const toggleFavorite = () => {
        const newFavoriteState = !isFavorite; 
        setIsFavorite(newFavoriteState); 

        dispatch(changeFavorite({ _id: data._id, isFavorite: newFavoriteState }));
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const isClose = () => {
        setIsOpen(false)
    }

    return (
        <div key={data._id} className={css.advertsMainContainer}>
            <img src={data.gallery[0]} className={css.advertListPhoto} alt={data.name} />
            <div className={css.advertInfoContainer}>
                <div className={css.advertsNameAndPrice}>
                    <h1 className={css.advertNameText}>{data.name}</h1>
                    <div className={css.advertsPriceAndFavorite}>
                        <h2 className={css.advertPrice}>€{data.price},00</h2>
                        <button className={css.favoriteIcon} onClick={toggleFavorite}>
                            <svg width="24" height="24">
                                <use href={data.isFavorite ? `${svg}#favoriteActive-icon` : `${svg}#favorite-icon` }></use>
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
                <button type='button' className={css.advertShowMoreBtn} onClick={openModal}>Show more</button>
            </div>
            {isOpen && <AdvertModal isOpen={isOpen} isClose={isClose} data={data} />}
        </div>
    )
}

export default Advert;