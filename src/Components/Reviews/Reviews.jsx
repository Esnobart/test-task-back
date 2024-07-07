import css from './Reviews.module.css';
import Avatar from '../Avatar/Avatar';
import svg from '../../../icons.svg';
import { Booking } from '../Booking/Booking';

const StarRating = ({ rating }) => {
    const starElements = [];

    for (let i = 0; i < rating; i++) {
        starElements.push(
            <svg key={i} width="16" height="15">
                <use href={`${svg}#rating-star`}></use>
            </svg>
        );
    }

    const remainingStars = 5 - rating; 
    for (let i = 0; i < remainingStars; i++) {
        starElements.push(
            <svg key={`missed-${i}`} width="16" height="15">
                <use href={`${svg}#missed-star`}></use>
            </svg>
        );
    }

    return (
        <div className={css.starRating}>
            {starElements}
        </div>
    );
};

export const Reviews = ({ data }) => {
    return (
        <div className={css.advertReviews}>
            <ul className={css.advertReviewsList}>
                {data.map((review, index) => (
                    <li key={index} className={css.reviewItem}>
                        <div className={css.advertsReviewsAvatarAndName}>
                            <Avatar name={review.reviewer_name} />
                            <div className={css.reviewDetails}>
                                <p className={css.reviewerName}>{review.reviewer_name}</p>
                                <StarRating rating={review.reviewer_rating} />
                            </div>
                        </div>
                        <p className={css.reviewComment}>{review.comment}</p>
                    </li>
                ))}
            </ul>
            <Booking />
        </div>
    );
};
