import React from 'react';
import  './ResultCard.css';
import '../../Utils/reset.css'

export const ResultCard = ({ movie }) => {
    return (
        <div className='result-card'>
            <div className='poster-wrapper'>
                <img className='poster-content'
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                />
                <div className="info">
                    <div className="header">
                        <h3 className="title">{movie.title}</h3>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default ResultCard;