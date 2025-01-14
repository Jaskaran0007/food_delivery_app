import React from 'react';

export const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit: "contain !important"}}>
        <div className="carousel-inner" id='carousel'>
        <div className="carousel-caption" style={{ zIndex: "10" }}>
              <form className='d-flex'>
                <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'/>
                <button className='btn btn-outline-success' type='submit'>Search</button>
              </form>
            </div>
          <div className="carousel-item active">
            <img
              src="https://storage.googleapis.com/a1aa/image/ebZeAfNvH6YdxIlgyxqeNVFan8scVxe5F1dpe4fKXc4U2WEzJA.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(30%)"}}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://storage.googleapis.com/a1aa/image/SZ4QJfYsXVzEHKu39uUhQe3SDXlvFJTFi28hTeSl4BghXRMnA.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(30%)"}}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1293840244/photo/top-view-rich-plum-nuts-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=e6eaUb4ICfs35-JKaCT8xM8wC79knAuXqTf_Pqub9_o="
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="Third slide"
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;