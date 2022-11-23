import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container5">
                <div className="row">
                    <h2 className="pb-3 section__title">
                        Why choose <span className='purple'>Top Dog Academy</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight 
                            icon={<FontAwesomeIcon icon="bolt" />} 
                            title="Fast Sign Up"
                            para="Get access to Top Dog Academy's full curriculum with a few clicks."
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="fa-building-columns" />} 
                            title="4 Steps to Mastery"
                            para="Learn the 4 Pillars of Training to correct your dog's worst behaivors."
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="tags" />} 
                            title="Affordable"
                            para="Find out how pro's train for a tenth the price of board and train programs."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
