function Project() {
  return (
    <div id="project_me">
      <div>
        <h1 className="d-flex justify-content-center align-items-center m-4">
          Projects
        </h1>
      </div>
      <div className="container text-center shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="col ">
          <div className="card m-2">
            <div className="card-body ">
              <h5 className="card-title fs-3">Learning management system</h5>
              <div>
                <h6 className=" fs-6 fw-normal text-wrap text-start fst-italic">
                  {" "}
                  About project Designed and developed a Learning Management
                  System using the MERN stack. Implemented secure user
                  authentication and authorization using JWT and bcrypt. Created
                  RESTful API endpoints for course management, user enrollment,
                  and content management with CRUD operations. Developed a
                  modern, responsive user interface using React.js and
                  Material-UI. Integrated Redux for efficient state management,
                  enhancing application performance and scalability..
                </h6>
                <a href="http://github.com/Awanishsh/LMS">
                  <button type="button" className="btn btn-primary">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card m-2">
            <div className="card-body ">
              <h5 className="card-title fs-3">UI-PAY</h5>
              <div>
                <h6 className="fs-6 fw-normal text-wrap text-start fst-italic">
                  {" "}
                  About project User Authentication using JWT and bcrypt Payment
                  Processing,Dashboard and Reporting,Responsive UI RESTful API:
                  Built RESTful API endpoints for seamless integration between
                  frontend and backend, enabling CRUD operations for payment
                  management
                </h6>
                <a href="https://github.com/Awanishsh/UI_PAY/tree/main/Client">
                  <button type="button" className="btn btn-primary">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card m-2">
            <div className="card-body ">
              <h5 className="card-title fs-3">Book management system</h5>
              <div>
                <h6 className=" fs-6 fw-normal text-wrap text-start fst-italic">
                  About Project Developed a book management system using
                  MongoDB, Express.js, React.js, and Node.js (MERN
                  stack).Implemented user authentication, CRUD operations,
                  search and filter functionalities, user profiles, and a
                  responsive UI. Leveraged technologies for efficient data
                  storage, rest backend API development, and interactive
                  frontend interface.
                </h6>
                <a href="https://github.com/Awanishsh/Book_management_system/tree/development/Frontend">
                  <button type="button" className="btn btn-primary">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card m-2">
            <div className="card-body ">
              <h5 className="card-title fs-3">Background Changer</h5>
              <div>
                <h6 className=" fs-6 fw-normal text-wrap text-start fst-italic">
                  Designed and developed the user interface using React.js
                  components, including buttons or dropdowns for selecting
                  different backgrounds. Implemented functionality to change the
                  background dynamically based on user input, utilizing state
                  management in React..
                </h6>
                <a href="https://github.com/Awanishsh/bgchanger">
                  <button type="button" className="btn btn-primary">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card m-2">
            <div className="card-body ">
              <h5 className="card-title fs-3">Tic-Tac-Toe Game</h5>
              <div>
                <h6 className=" fs-6 fw-normal text-wrap text-start fst-italic">
                  Developed an interactive Tic-Tac-Toe game using React,
                  showcasing skills in component-based architecture, state
                  management, and user interaction handling. Created reusable
                  Square, Board, and Game components to manage the game board
                  and gameplay logic. Utilized React's useState hook to manage
                  game state, including current player turns and game statu
                  Implemented game logic to determine the winner and handle game
                  moves efficiently. Ensured the game board is responsive and
                  visually appealing across different devices. Incorporated
                  click events to allow players to interact with the game
                  seamlessly.
                </h6>
                <a href="https://github.com/Awanishsh/Tic-Tac-Toe">
                  <button type="button" className="btn btn-primary">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
