import React from "react";
import pic1 from "../assets/image/pic1.jpg";
import pic2 from "../assets/image/pic2.jpg";
import pic3 from "../assets/image/pic3.jpg";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={pic2} className="image-carousel" alt="First slide" />

            <div className="carousel-caption">
              <h1 className="carousel-text">Hi, I'm Awanish sharma</h1>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={pic1} className="image-carousel" alt="Second slide" />

            <div class="carousel-caption ">
              <h1 className="carousel-text">Full stack developer</h1>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={pic3} className="image-carousel" alt="Third slide" />

            <div class="carousel-caption">
              <h1 className="carousel-text">Nature lover</h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev d-none d-sm-block"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next d-none d-sm-block"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
