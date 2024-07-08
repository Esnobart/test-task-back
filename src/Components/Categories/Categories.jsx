import svg from '../../../icons.svg';
import css from './Categories.module.css'

const Categories = (name, count) => {
    const capitalizeWords = (str) => str.replace(/\b\w/g, char => char.toUpperCase());
    
    return (
        <div className={css.advertCategorie}>
            <svg width="20" height="20">
                <use href={`${svg}#${name}-icon`}></use>
            </svg>
            <p className={css.advertCategorieText}>
                {count > 1 ? `${count} ${capitalizeWords(name)}` : capitalizeWords(name)}
            </p>
        </div>
    );
};

export default Categories;