import { AdvertsList } from "../../Components/AdvertsList/AdvertsList";
import { Location } from "../../Components/Location/Location";
import { Filters } from "../../Components/Filters/Filters";
import css from './CatalogPage.module.css'


export default function CatalogPage() {
  return (
    <>
    <div className={css.appMainContainer}>
      <div className={css.LocationAndFilters}>
        <Location />
        <Filters />
      </div>
      <AdvertsList  />
      </div>
    </>
  )
}
