import React from 'react';
import { Link } from 'react-router-dom'
// Styles
import { Image } from './Thumb.styles';

const Thumb = ({image, movieId, clickable}) =>(
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thum' />
            </Link>
        ) : (
            <Image src={image} alt='movie-thum' />
        )
        }
    </div>
);

export default Thumb;