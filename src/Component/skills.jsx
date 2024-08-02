import React from "react";
import pic5 from "../assets/image/pic5.png";
import pic6 from "../assets/image/pic6.png";
import pic7 from "../assets/image/pic7.png";
import pic8 from "../assets/image/pic8.png";
import pic9 from "../assets/image/pic9.png";
import pic10 from "../assets/image/pic10.png";
import pic11 from "../assets/image/pic11.png";
import pic12 from "../assets/image/pic12.png";
import pic13 from "../assets/image/pic13.png";
import pic14 from "../assets/image/pic14.png";
import pic15 from "../assets/image/pic15.png";
import pic16 from "../assets/image/pic16.png";
import pic17 from "../assets/image/pic17.png";
import pic18 from "../assets/image/pic18.png";
import pic19 from "../assets/image/pic19.png";
import pic20 from "../assets/image/pic20.png";
import pic21 from "../assets/image/pic21.png";
import pic22 from "../assets/image/pic22.png";

function Skills() {
  return (
    <div id="Skills_me">
      <div>
        <h1 className="d-flex justify-content-center align-items-center m-4">
          Tech Skills
        </h1>
      </div>
      <div className="container text-center shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Front-end Skills */}
          <div className="col">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">Front-end</h5>
                <div className="card mb-1 mt-4">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic5}
                        className="img-fluid rounded-start"
                        alt="HTML5"
                      />
                    </div>
                    <div className="col-10 ">
                      <div className="card-body">
                        <h6 className="card-title ">HTML5</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic6}
                        className="img-fluid rounded-start"
                        alt="CSS"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">CSS</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic7}
                        className="img-fluid rounded-start"
                        alt="JavaScript"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">JavaScript</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back-end Skills */}
          <div className="col">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">Back-end</h5>
                <div className="card mb-1 mt-4">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic17}
                        className="img-fluid rounded-start"
                        alt="Node.Js"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">Node.Js</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic13}
                        className="img-fluid rounded-start"
                        alt="Express.Js"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">Express.Js</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic18}
                        className="img-fluid rounded-start"
                        alt="Postman"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">Postman</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Database Skills */}
          <div className="col">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">Database</h5>
                <div className="card mb-1 mt-4">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic15}
                        className="img-fluid rounded-start"
                        alt="MongoDB"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">MongoDB</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic14}
                        className="img-fluid rounded-start"
                        alt="MariaDB"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">MariaDB</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic16}
                        className="img-fluid rounded-start"
                        alt="MySQL"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">MySQL</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Framework Skills */}
          <div className="col">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">Framework</h5>
                <div className="card mb-1 mt-4">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic19}
                        className="img-fluid rounded-start"
                        alt="Tailwind"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">Tailwind</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic12}
                        className="img-fluid rounded-start"
                        alt="Bootstrap"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">Bootstrap</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic9}
                        className="img-fluid rounded-start"
                        alt="Next.js"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">Next.js</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Library Skills */}
          <div className="col">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">Library</h5>
                <div className="card mb-1 mt-4">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic10}
                        className="img-fluid rounded-start"
                        alt="React JS"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">React JS</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic8}
                        className="img-fluid rounded-start"
                        alt="Redux"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">Redux</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic11}
                        className="img-fluid rounded-start"
                        alt="jQuery"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">jQuery</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Version Control Skills */}
          <div className="col">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">Version Control</h5>
                <div className="card mb-1 mt-4">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic22}
                        className="img-fluid rounded-start"
                        alt="Git"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">Git</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic21}
                        className="img-fluid rounded-start"
                        alt="GitHub"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">GitHub</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="row g-0">
                    <div className="col-2">
                      <img
                        src={pic20}
                        className="img-fluid rounded-start"
                        alt="GitLab"
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h6 className="card-title">GitLab</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
