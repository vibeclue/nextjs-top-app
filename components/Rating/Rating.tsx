import { JSX, useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import cn from 'classnames';
import StarIcon from './star.svg';
import styles from './Rating.module.css';


export const Rating = ({ isEditable = false, rating, setRating, ...props}: RatingProps) => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));  // заполняю массивом пустных фрагментов

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    //заполнение массива фрагментов
    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
            return (
                <StarIcon 
                    key={index}
                    className={cn(styles.star, {
                        [styles.filled]: index < currentRating
                    })}
                />
            );
        });
        setRatingArray(updatedArray);
    }
 
    return (
        // <div {...props}>  <- передача атрибов дива. Делается в пропс когда экстендится от HTML элемента
        <div {...props}> 
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
}