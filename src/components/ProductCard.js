import React from 'react';
import ReactStarts from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";


const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    
  return (
    <>
    <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3" } `}>
      <Link to=":id" className="product-card position-relative">
        
        <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
                  <img src={wish} alt="wishlist" />
            </button>
        </div>

        <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
        </div>

        <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
                Kids headphones bulk 10 pack multi colored for students
            </h5>

            <ReactStarts count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
            <p className={`description ${grid === 12 ? "d-block" : "d-none" }`}>
            Experience the ultimate convenience and
            versatility with our multifunctional smartwatch, 
            featuring cutting-edge technology and stylish design.
            Enhance your lifestyle effortlessly...
            </p>
            <p className="price">$100.00</p>
        </div>

        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                
                <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="compare" />
                </button>

                <button className="border-0 bg-transparent">
                    <img src={view} alt="view" />
                </button>
                
                <button className="border-0 bg-transparent">
                    <img src={addcart} alt="addcart" />
                </button>

                
            </div>
        </div>

      </Link>
    </div>



    <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3" } `}>
      <Link className="product-card position-relative">
        
        <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
                 <img src={wish} alt="wishlist" />
            </button>
        </div>

        <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
        </div>

        <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
                Kids headphones bulk 10 pack multi colored for students
            </h5>

            <ReactStarts count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
            <p className={`description ${grid === 12 ? "d-block" : "d-none" }`}>
            Experience the ultimate convenience and
            versatility with our multifunctional smartwatch, 
            featuring cutting-edge technology and stylish design.
            Enhance your lifestyle effortlessly...
            </p>
            <p className="price">$100.00</p>
        </div>

        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                
                <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="compare" />
                </button>

                <button className="border-0 bg-transparent">
                    <img src={view} alt="view" />
                </button>
                
                <button className="border-0 bg-transparent">
                    <img src={addcart} alt="addcart" />
                </button>

                
            </div>
        </div>

      </Link>
    </div>

    </>
 );
};

export default ProductCard;
