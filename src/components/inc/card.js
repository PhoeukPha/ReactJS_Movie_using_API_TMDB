import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Card = ({ id, title, img }) => {

    return (
        <div className="col-6 col-sm-6 col-md-3 col-xl-3 mt-2">
            <div className="card card_custom_item">
                <Link to={{
                    pathname: `/ReactJS_Movie_using_API_TMDB/movie/${id}`,
                    state: {
                        stateName: "state to be passed."
                    }
                }}>
                    <img src={img} className="card-img-top img_thumn" alt="..." />
                    <span className="play">
                        <FontAwesomeIcon icon={faCirclePlay} />
                    </span>
                    <div className="card-body pt_pb_5px">
                        <h5 className="card-title">{title}</h5>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Card;
