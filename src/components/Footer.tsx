

const Footer = () => {
return (
  // Footer
  <footer className="text-center text-lg-start bg-body-tertiary text-muted">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block"style={{marginLeft:"600px"}}>
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="" className="me-4 text-reset" style={{backgroundColor:"black"}}>
          <i className="fab fa-facebook-f"style={{backgroundColor:"black"}}></i>
        </a>
        <a href="" className="me-4 text-reset"style={{backgroundColor:"black"}}>
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" className="me-4 text-reset"style={{backgroundColor:"black"}}>
          <i className="fab fa-google"></i>
        </a>
        <a href="" className="me-4 text-reset"style={{backgroundColor:"black"}}>
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" className="me-4 text-reset"style={{backgroundColor:"black"}}>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="" className="me-4 text-reset"style={{backgroundColor:"black"}}>
          <i className="fab fa-github"></i>
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}

    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4" style={{marginLeft:"-15px"}}>
              <i className="fas fa-gem me-3" ></i>Blog Factory
            </h6>
            <p style={{fontStyle:"italic"}}>
              " The key is, no matter what story you tell, make your buyer the hero. "
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">
              Topics
            </h6>
            <p>
              <a href="#!" className="text-reset">Global Politics</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Environment</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Health</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Sports</a>
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">
              Social Media Links
            </h6>
            <p>
              <a href="#!" className="text-reset">Facebook</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Instagram</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Twitter</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Linkdln</a>
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3"style={{marginLeft:"-15px"}}></i> New Delhi, DL 10012, IN</p>
            <p>
              <i className="fas fa-envelope me-3"style={{marginLeft:"-15px"}}></i>
              infoblog@example.com
            </p>
            <p><i className="fas fa-phone me-3"style={{marginLeft:"-15px"}}></i> + 01 234 567 88</p>
            <p><i className="fas fa-print me-3"style={{marginLeft:"-15px"}}></i> + 01 234 567 89</p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
      © 2025 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">blogfactory.com</a>
    </div>
  </footer>
  // Footer
)
}

export default Footer;