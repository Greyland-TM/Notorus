import React from 'react';

const Booking = () => (
    <div className="section-book">
        <div className="row">
            <div className="book">
                <div className="book__form">
                    <form action="#" className="form">

                        <div className='u-margin-bottom-medium'>
                            <h2 className="heading-secondary">Start Booking now</h2>
                        </div>

                        <div className="form__group">
                            <input type="text" className="form__input" placeholder='Full Name' id='name'required/>
                            <lable for='name'className="form__lable">Full Name</lable>
                        </div>

                        <div className="form__group">
                            <input type="email" className="form__input" placeholder='Email address' id='email'required/>
                            <lable for='email'className="form__lable">Email address</lable>
                        </div>

                        <div className="form__group">

                            <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id='small' name='size'/>
                                <label htmlFor='small' className="form__radio-lable">
                                    <span className="form__radio-button"></span>
                                    Small tour group
                                </label>
                            </div>

                            <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id="large" name='size'/>
                                <label htmlFor="large" className="form__radio-lable">
                                    <span className="form__radio-button"></span>
                                    Large tour group
                                </label>
                            </div>

                            <div className="form__group u-margin-top-small">
                                <button className="btn btn--green">Next step &rarr; </button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default Booking;