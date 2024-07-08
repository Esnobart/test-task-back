import { AdvertsList } from "../../Components/AdvertsList/AdvertsList";
import { Location } from "../../Components/Location/Location";
import { Filters } from "../../Components/Filters/Filters";
import css from './FavoritePage.module.css'
import { fetchFavorite, removeFavorite } from "../../../redux/operations";
import { incrementPage, resetPage } from "../../../redux/favoriteSlice";
import { selectFavoriteHasMore, selectFavoriteLoading, selectFavoritePage, selectFilteredFavorite } from "../../../redux/selectors";
import { useSelector } from "react-redux";

export default function CatalogPage() {
    const page = useSelector(selectFavoritePage);
    const filteredData = useSelector(selectFilteredFavorite);
    const loading = useSelector(selectFavoriteLoading);
    const hasMore = useSelector(selectFavoriteHasMore);
  return (
    <>
    <div className={css.appMainContainer}>
      <div className={css.LocationAndFilters}>
        <Location />
        <Filters resetPage={resetPage} />
      </div>
      <AdvertsList 
        renderFunc={fetchFavorite} 
        changeFavor={removeFavorite} 
        incrementPage={incrementPage} 
        selectPage={page} 
        data={filteredData}
        loading={loading}
        hasMore={hasMore}
       />
      </div>
    </>
  )
}
