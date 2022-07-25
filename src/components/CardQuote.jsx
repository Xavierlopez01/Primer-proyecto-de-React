import React from 'react'

const CardQuote = ({ randomQuote, randomColors, getRandomAll }) => {

    const objectStyle = {
        color: randomColors
    }
    const objectBgStyle = {
        backgroundColor: randomColors
    }

    return (

        <div className='card' style={objectStyle}>
            <article className='card__container' >
                <span className='card__icon'><i class="fa-solid fa-quote-left"></i></span>
                <p className='card__quote'>{randomQuote.quote}</p>
            </article>
            <article className='card__container1'>
                <h4 className='card__author'>{randomQuote.author}</h4>
                <button onClick={getRandomAll} className='card__btn' style={objectBgStyle}>&#62;</button>
            </article>
        </div>

    )
}

export default CardQuote