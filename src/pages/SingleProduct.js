import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';

const SingleProduct = () => {
  return (
    <>
       <Meta title={"Product Name"} />
       <BreadCrumb title="Product Name" />
       {/* we make it dynamic product name  */}

       <div className="main-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-6"></div>
                </div>
            </div>

            {/* copy popular-wrapper from Home.js here */}
            <section className="popular-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">

                <div className="col-12">
                     <div className="section-heading">Our Popular Products</div>
                </div>

                </div>

               <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
         
             </section>

       </div>


      
    </>
  );
};

export default SingleProduct;
