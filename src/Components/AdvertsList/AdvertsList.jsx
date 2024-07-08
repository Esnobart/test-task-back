import { useDispatch } from "react-redux";
import Advert from "../Advert/Advert";
import { Loading } from "../Loading/Loading";
import css from './AdvertsList.module.css';
import { useEffect, useRef } from "react";

export const AdvertsList = ({ renderFunc, changeFavor, incrementPage, selectPage, data, loading, hasMore }) => {
    const dispatch = useDispatch();

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        dispatch(renderFunc(selectPage));

        return () => {
            dispatch(renderFunc(0));
        };
    }, [selectPage]);

    const handleShowMore = () => {
        dispatch(incrementPage());
    };

    return (
        <div className={css.advertsListContainer}>
            {loading && <Loading />}
            <ul className={css.advertsList}>
                {data.map(advert => (
                    <li className={css.advertsCard} key={advert._id}><Advert data={advert} changeFavor={changeFavor} /></li>
                ))}
            </ul>
            {hasMore && data.length > 0 && !loading && (
                <button onClick={handleShowMore} className={css.loadMoreBtn}>
                    Load more
                </button>
            )}
        </div>
    );
};
