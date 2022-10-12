import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="">
                <div className="card flex-row shadow rounded-4">
                    <div className="img">
                        <img src={props.img} className="card-img-top rounded-4" alt="card-img" height={182} />
                    </div>
                    <div className="body mx-3">
                        <h5 className="title">{props.name}</h5>
                        <p className="text">{props.description}</p>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="fs-5 fw-semibold">Price: {props.price}</p>
                            <button className="btn btn-warning rounded-5 shadow">Order Now</button>
                        </div>
                        <p className="text-secondary">*prices may vary on selected dates</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;