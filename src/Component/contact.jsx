import React from "react";

function Contact() {
  return (
    <div id="contact_me">
      <div>
        <h1 className="d-flex justify-content-center align-items-center m-4">
          Contact
        </h1>
      </div>
      <div className="container text-center  shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="mt-2 w-full">
          <a href="mailto:awanish.sharma.5683@gmail.com">
            <button type="button" className="btn btn-outline-danger ">
              Email me
            </button>
          </a>

          <a href="http://drive.google.com/file/d/1iAG7FSFGbnO__KqGFUeJg1wAMMBOoy5K/view?usp=sharing">
            <button type="button" className="btn btn-outline-success m-2">
              My Resume
            </button>
          </a>
          <a href="https://github.com/Awanishsh">
            <button type="button" className="btn btn-outline-secondary">
              GitHub
            </button>
          </a>

          <a href="https://www.linkedin.com/in/awanish-sharma-bbb767201/">
            <button type="button" class="btn btn-outline-primary m-2">
              Linkedin
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
