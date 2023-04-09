import "./about.css";

export default function About() {

  return (
    <div className="container cont" style = {{backgroundColor: 'white', color: 'black', borderWidth: '1px', borderColor: 'black'}}>
      <h1 className="aboutUs">About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style = {{backgroundColor: 'white', color: 'black', borderWidth: '1px', borderColor: 'black'}}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style = {{backgroundColor: 'white', color: 'black', borderWidth: '1px', borderColor: 'black'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
               About eNoteBook
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {{backgroundColor: 'white', color: 'black', borderWidth: '1px', borderColor: 'black'}}>
            eNoteBook is a platform where you can store you Notes or other important details. This platform stores you notes and gives you an upperhand to access them from anywhere by loggin into your account.
            </div>
          </div>
        </div>
        <div className="accordion-item" style = {{backgroundColor: 'white', color: 'black', borderWidth: '1px', borderColor: 'black'}}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style = {{backgroundColor: 'white', color: 'black', borderWidth: '1px', borderColor: 'black'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Developer
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {{backgroundColor: 'white', color: 'black', borderWidth: '1px', borderColor: 'black'}}>
              <strong>Animesh Jain</strong> 
            </div>
          </div>
        </div>
        <div className="accordion-item" style = {{backgroundColor: 'white', color: 'black', borderWidth: '1px', borderColor: 'black'}}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style = {{backgroundColor: 'white', color: 'black', borderWidth: '1px', borderColor: 'black'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              More features coming
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {{backgroundColor: 'white', color: 'black', borderWidth: '1px', borderColor: 'black'}}>
              <ul>
                <li>A user details page</li>
                <li>More interactive UI for viewing the notes</li>
                <li>Upgrading designs</li>
                <li>Making it more user friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}