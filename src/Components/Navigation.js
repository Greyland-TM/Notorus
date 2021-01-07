import React, { Component } from 'react';
 
class Navigation  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            backgroundClassName: 'navigation__background',
            navClassName: 'navigation__nav',
            linkClassName: 'navigation__link'
        }
    }

    handleChecked = () => {
        if (this.state.checked === true) {
            this.setState ({
                checked: false, 
                backgroundClassName: 'navigation__background',
                navClassName: 'navigation__nav',
                linkClassName: 'navigation__link'
            })
        }else {
            this.setState ({
                checked: true, 
                backgroundClassName: 'navigation__background--checked',
                navClassName: 'navigation__nav--checked',
                linkClassName: 'navigation__link--checked'
            })
        }
    }

    render () {
        return (
            <div className="navigation">

                <input type="checkbox" className="navigation__checkbox" id='nav-toggle' />

                <label htmlFor='nav-toggle' className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className='navigation__background'>&nbsp;</div>

                <nav className='navigation__nav'>
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="" className='navigation__link'><span>01</span>About Notours</a></li>
                        <li className="navigation__item"><a href="" className='navigation__link'><span>02</span>Your benifits</a></li>
                        <li className="navigation__item"><a href="" className='navigation__link'><span>03</span>Popular tours</a></li>
                        <li className="navigation__item"><a href="" className='navigation__link'><span>04</span>Stories</a></li>
                        <li className="navigation__item"><a href="" className='navigation__link'><span>05</span>Book now</a></li>
                    </ul>
                </nav>

            </div>

            // <div className="navigation">

            //     <input type="checkbox" className="navigation__checkbok" id='nav-toggle' 
            //         checked={this.state.checked}
            //         />

            //     <label htmlFor='nav-toggle' className="navigation__button" onClick={this.handleChecked}>Menu</label>

            //     <div className={this.state.backgroundClassName}>&nbsp;</div>

            //     <nav className={this.state.navClassName}>
            //         <ul className="navigation__list">
            //             <li className="navigation__item"><a href="" className={this.state.linkClassName}><span>01</span>About Notours</a></li>
            //             <li className="navigation__item"><a href="" className={this.state.linkClassName}><span>02</span>Your benifits</a></li>
            //             <li className="navigation__item"><a href="" className={this.state.linkClassName}><span>03</span>Popular tours</a></li>
            //             <li className="navigation__item"><a href="" className={this.state.linkClassName}><span>04</span>Stories</a></li>
            //             <li className="navigation__item"><a href="" className={this.state.linkClassName}><span>05</span>Book now</a></li>
            //         </ul>
            //     </nav>

            // </div>
        );
    }
}

export default Navigation;