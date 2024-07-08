import { AdvertsList } from "../../Components/AdvertsList/AdvertsList";
import { Location } from "../../Components/Location/Location";
import { Filters } from "../../Components/Filters/Filters";
import css from './CatalogPage.module.css'
import { fetchAdverts, changeFavorite } from "../../../redux/operations";
import { incrementPage, resetPage } from "../../../redux/advertsSlice";
import { selectAdvertsHasMore, selectAdvertsLoading, selectAdvertsPage, selectFilteredAdverts } from "../../../redux/selectors";
import { useSelector } from "react-redux";

export default function CatalogPage() {
  const page = useSelector(selectAdvertsPage);
  const filteredData = useSelector(selectFilteredAdverts);
  const loading = useSelector(selectAdvertsLoading);
  const hasMore = useSelector(selectAdvertsHasMore);
  return (
    <>
    <div className={css.appMainContainer}>
      <div className={css.LocationAndFilters}>
        <Location />
        <Filters resetPage={resetPage} />
      </div>
      <AdvertsList 
        renderFunc={fetchAdverts} 
        changeFavor={changeFavorite} 
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
