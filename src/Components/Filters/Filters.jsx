import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter, clearFilters } from '../../../redux/filterSlice';
import { selectFilters } from '../../../redux/selectors';
import { useNavigate, useLocation } from 'react-router-dom';
import css from './Filters.module.css';
import svg from '../../../icons.svg';

export const Filters = ({ resetPage }) => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);
    const navigate = useNavigate();
    const location = useLocation();

    const handleToggleFilter = (filterName) => {
        dispatch(toggleFilter(filterName));

        if (filterName === 'isFavorite') {
            if (!filters.isFavorite) {
                if (location.pathname !== '/favorite') {
                    dispatch(resetPage())
                    navigate('/favorite');                  
                }
            } else {
                if (location.pathname === '/favorite') {
                    dispatch(resetPage())
                    navigate('/catalog');
                }
            }
        }
    };

    const clearFilter = () => {
        dispatch(clearFilters())
    }

    return (
        <>
            <div className={css.filtersContainer}>
                <p className={css.filtersSupportingText}>Filters</p>
                <div className={css.filtersNameAndClear}>
                    <h2 className={css.filtersMainText}>Vehicle equipment</h2>
                    <button type='button' className={css.filtersClearBtn} onClick={() => clearFilter()}>Clear all</button>
                </div>
                <ul className={css.filtersList}>
                    {[
                        { name: 'airConditioner', label: 'AC', icon: 'AC-icon' },
                        { name: 'automatic', label: 'Automatic', icon: 'automatic-icon' },
                        { name: 'kitchen', label: 'Kitchen', icon: 'kitchen-icon' },
                        { name: 'tv', label: 'TV', icon: 'TV-icon' },
                        { name: 'showerBathroom', label: 'Shower/Bathroom', icon: 'shower-icon' }
                    ].map(filter => (
                        <li key={filter.name}>
                            <label className={css.filtersEquipment}>
                                <input
                                    type="checkbox"
                                    checked={filters[filter.name] || false}
                                    onChange={() => handleToggleFilter(filter.name)}
                                    className={css.filterCheckbox}
                                />
                                <span className={css.customCheckbox}></span>
                                <svg width="32" height="32" className={css.locationIcon}>
                                    <use href={`${svg}#${filter.icon}`}></use>
                                </svg>
                                <p className={css.filtersListText}>{filter.label}</p>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className={css.filtersMainText}>Vehicle type</h2>
                <ul className={css.filtersList}>
                    {[
                        { name: 'van', label: 'Van', icon: 'van-icon' },
                        { name: 'fullyIntegrated', label: 'Fully Integrated', icon: 'fullyIntegrated-icon' },
                        { name: 'alcove', label: 'Alcove', icon: 'alcove-icon' }
                    ].map(filter => (
                        <li key={filter.name}>
                            <label className={css.filtersEquipment}>
                                <input
                                    type="checkbox"
                                    checked={filters[filter.name] || false}
                                    onChange={() => handleToggleFilter(filter.name)}
                                    className={css.filterCheckbox}
                                />
                                <span className={css.customCheckbox}></span>
                                <svg width="32" height="32" className={css.locationIcon}>
                                    <use href={`${svg}#${filter.icon}`}></use>
                                </svg>
                                <p className={css.filtersListText}>{filter.label}</p>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className={css.filtersMainText1}>Other</h2>
                <label className={css.filtersEquipment}>
                    <input
                        type="checkbox"
                        checked={filters['isFavorite'] || false}
                        onChange={() => handleToggleFilter('isFavorite')}
                        className={css.filterCheckbox}
                    />
                    <span className={css.customCheckbox}></span>
                    <svg width="32" height="32" className={css.locationIcon}>
                        <use href={`${svg}#favoriteActive-icon`}></use>
                    </svg>
                    <p className={css.filtersListText}>Favorite</p>
                </label>
            </div>
        </>
    );
};
