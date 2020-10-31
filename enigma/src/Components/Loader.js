import React from 'react'

function Loader() {
    return (
        <div className="flex justify-center">
            <div className="loading-spinner">
                <div className="loading-ball"></div>
                <p className="loading-p">LOADING</p>
            </div>
        </div>
    )
}

export default Loader