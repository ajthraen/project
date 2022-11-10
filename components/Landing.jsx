import React from 'react';
import UndrawDog from '../assets/undraw_good_dog.svg'

const Landing = () => {
    return (
        <section id='landing'>
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Learn how to train your dog online!</h1>
                        <h2>Help your dog reach their full <span className='purple'>Potential</span></h2>
                        <a href="#features">
                            <button className='btn'>How Do I Start?</button>
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
