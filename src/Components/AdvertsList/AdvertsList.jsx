import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectFilteredAdverts, selectPage, selectHasMore } from "../../../redux/selectors";
import { fetchAdverts } from "../../../redux/operations";
import Advert from "../Advert/Advert";
import { Loading } from "../Loading/Loading";
import css from './AdvertsList.module.css';
import { useEffect, useRef } from "react";
import { incrementPage } from "../../../redux/advertsSlice";

export const AdvertsList = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const filteredAdverts = useSelector(selectFilteredAdverts);
    const page = useSelector(selectPage);
    const hasMore = useSelector(selectHasMore);

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        dispatch(fetchAdverts(page));

        return () => {
            dispatch(fetchAdverts(0));
        };
    }, [page]);

    const handleShowMore = () => {
        dispatch(incrementPage());
    };

    return (
        <div className={css.advertsListContainer}>
            {loading && <Loading />}
            <ul className={css.advertsList}>
                {filteredAdverts.map(advert => (
                    <li className={css.advertsCard} key={advert._id}><Advert data={advert} /></li>
                ))}
            </ul>
            {hasMore && filteredAdverts.length > 0 && !loading && (
                <button onClick={handleShowMore} className={css.loadMoreBtn}>
                    Load more
                </button>
            )}
        </div>
    );
};
