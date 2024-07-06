import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../../redux/filterSlice';
import { selectFilters } from '../../redux/selectors';
import css from './Filters.module.css';
import svg from "../../icons.svg";

export const Filters = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

    const handleToggleFilter = (filterName) => {
        dispatch(toggleFilter(filterName));
    };

    return (
        <div>
            <p className={css.filtersSupportingText}>Filters</p>
            <h2>Vehicle equipment</h2>
            <ul className={css.filtersList}>
                <li className={`${css.filtersEquipment} ${filters.airConditioner ? css.active : ''}`} onClick={() => handleToggleFilter('airConditioner')}>
                    <svg width="9" height="10" className={css.locationIcon}>
                        <use href={`${svg}#AC-icon`}></use>
                    </svg>
                    <p className={css.filtersListText}>AC</p>
                </li>
                <li className={`${css.filtersEquipment} ${filters.automatic ? css.active : ''}`} onClick={() => handleToggleFilter('automatic')}>
                    <svg width="9" height="10" className={css.locationIcon}>
                        <use href={`${svg}#automatic-icon`}></use>
                    </svg>
                    <p className={css.filtersListText}>Automatic</p>
                </li>
                <li className={`${css.filtersEquipment} ${filters.kitchen ? css.active : ''}`} onClick={() => handleToggleFilter('kitchen')}>
                    <svg width="9" height="10" className={css.locationIcon}>
                        <use href={`${svg}#kitchen-icon`}></use>
                    </svg>
                    <p className={css.filtersListText}>Kitchen</p>
                </li>
                <li className={`${css.filtersEquipment} ${filters.tv ? css.active : ''}`} onClick={() => handleToggleFilter('tv')}>
                    <svg width="9" height="10" className={css.locationIcon}>
                        <use href={`${svg}#tv-icon`}></use>
                    </svg>
                    <p className={css.filtersListText}>TV</p>
                </li>
                <li className={`${css.filtersEquipment} ${filters.showerBathroom ? css.active : ''}`} onClick={() => handleToggleFilter('showerBathroom')}>
                    <svg width="9" height="10" className={css.locationIcon}>
                        <use href={`${svg}#shower-icon`}></use>
                    </svg>
                    <p className={css.filtersListText}>Shower/Bathroom</p>
                </li>
            </ul>
        </div>
    );
};
