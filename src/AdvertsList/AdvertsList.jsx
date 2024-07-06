import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectAdverts, selectPage, selectHasMore } from "../../redux/selectors";
import { fetchAdverts } from "../../redux/operations";
import { incrementPage, resetPage } from "../../redux/advertsSlice";
import Advert from "../Advert/Advert";
import { Loading } from "../Loading/Loading";
import css from './AdvertsList.module.css';
import { useEffect } from "react";

export const AdvertsList = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const adverts = useSelector(selectAdverts);
    const page = useSelector(selectPage);
    const hasMore = useSelector(selectHasMore);

    useEffect(() => {
        dispatch(resetPage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAdverts(page));
    }, [page]);

    const handleShowMore = () => {
        dispatch(incrementPage());
    };

    return (
        <div>
            {loading && <Loading />}
            <ul className={css.advertsList}>
                {adverts.map(advert => (
                    <li className={css.advertsCard} key={advert._id}><Advert data={advert} /></li>
                ))}
            </ul>
            {hasMore && (
                <button onClick={handleShowMore} className={css.showMoreButton}>
                    Show more
                </button>
            )}
        </div>
    );
};
