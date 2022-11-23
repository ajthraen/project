import React from 'react';
import UndrawDog from '../assets/undraw_good_dog.svg'

const Landing = () => {
    return (
        <section id='landing'>
            <header>
                <div className="header__container1">
                    <div className="header__description1">
                        <h1>Learn how to train your dog online!</h1>
                        <h2 className='pb-3'>Help your dog reach their full <span className='purple'>Potential</span></h2>
                        <a href="#features">
                            <button className='btn2'>How Do I Start?</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawDog} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
