import React from 'react'
import './scss/Comparison.scss'
const Comparsion = () => {
    return (
        <div className="comparsion-parent">
            <div className="background">
                <div className="width">
                    <div className="title">
                        <h1>Popular comparisons</h1>
                    </div>
                    <div className="card">
                        <div className="padding-inner">
                            <div className='card-parent'>
                                <div className="name-img">
                                    <div className="name">
                                        <div className="img">
                                            <img src="./images/samsungtext.png" alt="" />
                                        </div>
                                        <p>Samsung Galaxy S24 Ultra</p>
                                    </div>
                                    <div className="mobile-img">
                                        <img src="./images/samsungmobile.png" alt="" />
                                    </div>
                                </div>
                                <div className="vs-img">
                                    <img src="./images/vs.png" alt="" />
                                </div>

                                <div className="name-img">
                                    <div className="name">
                                        <div className="img">
                                            <img src="./images/vivotext.png" alt="" style={{ width: '100%' }} />
                                        </div>
                                        <p>Vivo V23 Pro</p>
                                    </div>
                                    <div className="mobile-img">
                                        <img src="./images/vivomobile.png" alt="" />
                                    </div>
                                </div>

                                <div className="compare-button">
                                    <input type="button" value={"Compare"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comparsion