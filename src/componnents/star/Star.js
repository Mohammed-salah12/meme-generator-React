import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

export default function Star({ isfav, setProfile }) {
    function toggleStart() {
        setProfile(prevState => ({
            ...prevState,
            isfav: !prevState.isfav
        }))
    }

    return (
        <div className='starContinerDiv'>
            <FontAwesomeIcon icon={isfav ? filledStar : emptyStar}
                onClick={toggleStart} />
        </div>
    )

}
