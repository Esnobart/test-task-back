import { useSelector } from "react-redux";
import { selectAdverts, selectLoading } from "../../redux/selectors";
import { Advert } from "../Advert/Advert";
import { Loading } from "../Loading/Loading";

export const AdvertsList = () => {
    const adverts = useSelector(selectAdverts);
    const loading = useSelector(selectLoading);
    console.log(adverts);

    return (
        <div>
            {loading && <Loading />}
            <ul>
                {adverts.map(advert => (
                    <li key={advert._id}><Advert data={advert} /></li>
                ))}
            </ul>
        </div>
    )
}