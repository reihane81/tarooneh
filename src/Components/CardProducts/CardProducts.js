import React from 'react';
import {Link} from "react-router-dom";

// Styles
import styles from "./CardProducts.module.css";

const CardProducts = ({productData}) => {

    return (
        <div className={styles.cardContainer}>
            <Link to={`/products/${productData._id}`}>
                <div className="d-flex justify-content-between px-3 pt-1">
                    <div className="d-flex">
                        <p className="text-end">5/5</p>
                        <svg height="25" width="23" className="star rating" data-rating="2" fill="#ffb700">
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                        </svg>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" id={styles.svg} viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.66 29.66 0 004.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.75.75 0 01-1.422 0C10.537 5.389 8.841 4 6.736 4zM12 20.703l.343.667a.75.75 0 01-.686 0l.343-.667zM1 8.513C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.146 31.146 0 01-5.233 3.576l-.025.013-.007.003-.002.001-.344-.666-.343.667-.003-.002-.007-.003-.025-.013A29.308 29.308 0 0110 20.408a31.147 31.147 0 01-3.611-2.632C3.8 15.573 1 12.332 1 8.514z"></path></svg>
                </div>
                <img src={`https://api.taroneh.ir/storage/${productData.code}/${productData.photos}`} className="card-img m-auto" id={styles.imgCard} alt="Card" />
                <div className="card-body">
                    <p className="card-text" id={styles.titleCard}>{productData.title}</p>
                    <p className="card-text mb-2" id={styles.price}>قیمت هر کیلو</p>
                    <p className="card-text" id={styles.amount}>{productData.amount} تومان</p>
                </div>
            </Link>
        </div>
    )
}

export default CardProducts;