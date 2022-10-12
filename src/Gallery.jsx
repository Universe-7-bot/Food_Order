import React, { useState } from "react";
import Card from "./Card";
import Menu from "./Sdata";

const Gallery = () => {

    const [items, setItems] = useState(Menu);

    const filterItems = (category) => {
        const updatedItems = Menu.filter((value, index) => {
            return value.category === category;
        })

        setItems(updatedItems);
    }

    return (
        <>
            <div className="m-2">
                <h2 className="text-center">Order Your Favourite Dish</h2>
            </div>
            <hr />
            <div className="m-2">
                <div className="d-flex justify-content-evenly">
                    <button onClick={() => filterItems("Breakfast")} className="btn btn-secondary fw-semibold rounded-5 shadow">Breakfast</button>
                    <button onClick={() => filterItems("Lunch")} className="btn btn-secondary fw-semibold rounded-5 shadow">Lunch</button>
                    <button onClick={() => filterItems("Evening")} className="btn btn-secondary fw-semibold rounded-5 shadow">Evening</button>
                    <button onClick={() => filterItems("Dinner")} className="btn btn-secondary fw-semibold rounded-5 shadow">Dinner</button>
                    <button onClick={() => setItems(Menu)} className="btn btn-secondary fw-semibold rounded-5 shadow">All</button>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {
                                items.map((value, index) => {

                                    const { id, image, name, category, price, description } = value;

                                    return (
                                        <div className="col-md-4 my-4">
                                            <Card id={id} img={image} name={name} category={category} price={price} description={description} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;