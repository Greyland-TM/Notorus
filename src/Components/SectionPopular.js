import React from 'react';
import Card from './cards';

const Popular = () => (
    <div>
        <section className='section-tours'>
            <div className='u-center-txt u-margin-bottom-big'>
                <h2 className="heading-secondary">Most popular tours</h2>
            </div>
            <div className="row">
                <Card 
                    // class names
                    front='card__side card__side--front card__side--front-1'
                    back='card__side card__side--back card__side--back-1'
                    picture='card__picture card__picture--1'
                    header='card__header'
                    span="card__heading--span card__heading--span-1"
                    details='card__details'

                    // custom text
                    headerTxt1='The sea Explorer'
                    days='3'
                    people='30'
                    guids='2'
                    sleeping='cozy hotels'
                    dificulty='easy'
                    price='$297'
                ></Card>
                <Card 
                    // class names
                    front='card__side card__side--front card__side--front-2'
                    back='card__side card__side--back card__side--back-2'
                    picture='card__picture card__picture--2'
                    header='card__header'
                    span="card__heading--span card__heading--span-2"
                    details='card__details'

                    // custom text
                    headerTxt1='The forrest hiker'
                    days='7'
                    people='40'
                    guids='6'
                    sleeping='provided tents'
                    dificulty='medium'
                    price='$497'
                ></Card>
                <Card 
                    // class names
                    front='card__side card__side--front card__side--front-3'
                    back='card__side card__side--back card__side--back-3'
                    picture='card__picture card__picture--3'
                    header='card__header'
                    span="card__heading--span card__heading--span-3"
                    details='card__details'

                    // custom text
                    headerTxt1='The snow adventurer'
                    days='5'
                    people='15'
                    guids='3'
                    sleeping='provided tents'
                    dificulty='hard'
                    price='$897'
                ></Card>
            </div>

            <div className="u-center-txt u-margin-top">
                <a href="#" className="btn btn--green">Discover all tours</a>
            </div>
        </section>

    </div>
);

export default Popular;