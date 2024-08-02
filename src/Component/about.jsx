import React from "react";
import pic4 from "../assets/image/pic4.png";

function About() {
  return (
    <div>
      <div>
        <h1 className=" d-flex justify-content-center align-items-center m-4">
          About me
        </h1>
      </div>

      <div
        id="about_us"
        className="container text-center shadow p-3 mb-5 bg-body-tertiary rounded"
      >
        <div className="row">
          <div className="col m-4">
            <img src={pic4} alt="..." className="image-size w-100  " />
          </div>
          <div class="col flex m-4">
            <p className="about-us fs-5 p-5 text-wrap bg-light rounded-5 text-start fst-italic">
              Web Developer with expertise of React.js, Node.js, Express.js,
              MangoDB, Redux, HTML and CSS, Bootstrap,Tailwind, Ajax, Mysql.
              currently learning full stack web development. I am passionate
              programmer and a learner, born and brought up in India. Currently,
              I am enrolled in Almabetter - Web Development Program. I love
              learning about new technologies, what problems are they solving
              and How can I use them to build better and scalable products.
              <div className="mt-4 w-full">
                <a href="#contact_me">
                  <button type="button" className="btn btn-outline-primary ">
                    Let's talk
                  </button>
                </a>
                <a href="http://drive.google.com/file/d/1iAG7FSFGbnO__KqGFUeJg1wAMMBOoy5K/view?usp=sharing">
                  <button
                    type="button"
                    className="btn btn-outline-secondary m-2"
                  >
                    My Resume
                  </button>
                </a>
                <a href="https://github.com/Awanishsh">
                  <button type="button" className="btn btn-outline-success">
                    GitHub
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/awanish-sharma-bbb767201/">
                  <button type="button" class="btn btn-outline-info m-2">
                    Linkedin
                  </button>
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
