import svg from "../../icons.svg"
import css from './Categories.module.css'

const Categories = ({ name, count }) => {
    return (
        <div className={css.advertCategorie}>
            <svg width="20" height="20">
                <use href={`${svg}#${name}-icon`}></use>
            </svg>
            <p className={css.advertCategorieText}>
                {count > 1 ? `${count} ${name}` : name}
            </p>
        </div>
    );
};

export default Categories;