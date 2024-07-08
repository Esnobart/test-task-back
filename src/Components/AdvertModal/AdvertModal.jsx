import Modal from "react-modal";
import { useState } from "react";
import { Features } from "../Features/Features";
import { Reviews } from "../Reviews/Reviews";
import clsx from 'clsx';
import svg from '../../../icons.svg';
import css from './AdvertModal.module.css'

export const AdvertModal = ({isOpen, isClose, data}) => {
    const [activeTab, setActiveTab] = useState(''); 

    const renderTabContent = () => {
        switch (activeTab) {
            case 'features':
                return <Features data={data} />;
            case 'reviews':
                return <Reviews data={data.reviews} />;
            default:
                return (
                    <></>
                );
        }
    }

    const buildLinkClass = (tab) => {
        return clsx(css.advertModalLink, { [css.advertModalLinkActive]: activeTab === tab });
    };

    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={isClose}
          className={css.advertModal}
          overlayClassName={css.advertOverlay}>
            <div className={css.advertModalNameAndClose}>
                <h1 className={css.advertModalName}>{data.name}</h1>
                <button className={css.advertModalCloseBtn} onClick={isClose}>
                    <svg width="32" height="32">
                        <use href={`${svg}#close-icon`}></use>
                    </svg>
                </button>
            </div>
            <div className={css.advertRateAndLocation}>
                <div className={css.advertRating}>
                    <svg width="16" height="14">
                        <use href={`${svg}#rating-star`}></use>
                    </svg>
                    <p className={css.advertRatingText}>{data.rating} ({data.reviews.length} Reviews)</p>
                </div>
                <div className={css.advertLocation}>
                    <svg width="16" height="16">
                        <use href={`${svg}#location-icon`}></use>
                    </svg>
                    <p className={css.advertLocationText}>{data.location}</p>
                </div>
            </div>
            <p className={css.advertModalPrice}>€{data.price},00</p>
            <ul className={css.advertModalImageList}>
                {data.gallery.map(image => (
                    <li key={image} className={css.advertModalImage}><img src={image} className={css.advertModalImg} /></li>
                ))}
            </ul>
            <p className={css.advertModalDescription}>{data.description}</p>
            <ul className={css.advertModalLinks}>
                <li className={buildLinkClass('features')}>
                    <button className={css.advertModalLinkBtn} onClick={() => setActiveTab('features')}>Features</button>
                </li>
                <li className={buildLinkClass('reviews')}>
                    <button className={css.advertModalLinkBtn} onClick={() => setActiveTab('reviews')}>Reviews</button>
                </li>
            </ul>
            {renderTabContent()}
        </Modal>
    )
}