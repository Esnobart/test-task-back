import { Booking } from "../Booking/Booking";
import Categories from "../Categories/Categories";
import css from './Features.module.css'

const filterCategories = (data) => {
    const categories = [];

    if (data.adults > 0) categories.push({ name: 'adults', count: data.adults });
    if (data.children > 0) categories.push({ name: 'children', count: data.children });

    if (data.engine) categories.push({ name: data.engine, count: 1 });
    if (data.transmission) categories.push({ name: data.transmission, count: 1 });

    for (const [key, value] of Object.entries(data.details)) {
        if (typeof value === 'number' && value > 0) {
            categories.push({ name: key, count: value });
        } else if (typeof value === 'string' && value !== '') {
            categories.push({ name: key, count: value });
        }   
    }

    return categories;
};

const formatValue = (value) => {
    return value.replace(/([a-zA-Z])(\d)/g, '$1 $2').replace(/(\d)([a-zA-Z])/g, '$1 $2');
}

const detailsCategories = (data) => {
    const details = [
        { name: 'Form', value: data.form.charAt(0).toUpperCase() + data.form.slice(1) },
        { name: 'Length', value: formatValue(data.length) },
        { name: 'Width', value: formatValue(data.width) },
        { name: 'Height', value: formatValue(data.height) },
        { name: 'Tank', value: formatValue(data.tank) },
        { name: 'Consumption', value: data.consumption }
    ];

    return details;
};

export const Features = ({data}) => {
    const categoris = filterCategories(data);
    const details = detailsCategories(data)
    return (
    <div className={css.advertFeatures}>
        <div>
        <div className={css.advertsFeatureDetailsContainer}>
        <ul className={css.advertsFeatureDetailsList}>
            {categoris.map(({ name, count }) => (
                <li className={css.advertFeaturesDetails} key={name}>
                    <Categories name={name} count={count} />
                </li>
            ))}
        </ul>
        </div>
        <div className={css.advertFeaturesVehicleDetailsContainer}>
            <h2 className={css.advertFeaturesMainText}>Vehincle details</h2>
            <ul className={css.advertFeaturesDetailsList}>
                {details.map(({ name, value }) => (
                    <li key={name} className={css.advertFeaturesDetail}>
                        <div className={css.advertFeaturesDetailContainer}>
                            <span className={css.advertFeaturesText}>{name}</span>
                            <span className={css.advertFeaturesText}>{value}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        <Booking />
    </div>
)
}