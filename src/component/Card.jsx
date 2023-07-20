import React from 'react'
import { Link } from 'react-router-dom'

export const Card = (props) => {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div class="card">
                    <img src={props.imgscr} class="card-img-top" alt={props.imgscr} />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title .</p>
                        <Link to="" class="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        </>

    )
}
