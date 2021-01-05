import React from 'react';

const Card = (props) => (
        <div className="col-1-of-3">
            <div className="card">
                <div className={props.front}>
                    <div className={props.picture}>
                        &nbsp;
                    </div>
                    <h4 className={props.header}>
                        <span className={props.span}>
                            {props.headerTxt1}
                        </span>
                        
                    </h4>
                    <div className={props.details}>
                    <ul>
                        <li>{props.days} day tour</li>
                        <li>up to {props.people} people</li>
                        <li>{props.guids} tour guids</li>
                        <li>sleep in {props.sleeping}</li>
                        <li>Dificulty: {props.dificulty}</li>
                    </ul>
                    </div>
                </div>
                <div className={props.back}>
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">{props.price}</p>
                            <a href="#" className="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

export default Card;