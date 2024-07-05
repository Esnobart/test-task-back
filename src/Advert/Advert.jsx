import css from './Advert.module.css'

export const Advert = ({ data }) => {
    return (
        <div key={data._id}>
            <img src={data.gallery[0]} className={css.advertListPhoto} />
        </div>
    )
}