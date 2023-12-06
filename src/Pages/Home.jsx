import React, { memo } from "react";

const Home = memo(() => {
  return (
    <div>
      <div>
        <section className="slider_section ">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="detail-box">
                        <h1>
                          ARCHITECT <br />
                          BUILDER CONSTRUCTION <br />
                          SERVICES
                        </h1>
                        <div className="btn-box">
                          <a href className="btn1">
                            Contact Us
                          </a>
                          <a href className="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="detail-box">
                        <h1>
                          ARCHITECT <br />
                          BUILDER CONSTRUCTION <br />
                          SERVICES
                        </h1>
                        <div className="btn-box">
                          <a href className="btn1">
                            Contact Us
                          </a>
                          <a href className="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="detail-box">
                        <h1>
                          ARCHITECT <br />
                          BUILDER CONSTRUCTION <br />
                          SERVICES
                        </h1>
                        <div className="btn-box">
                          <a href className="btn1">
                            Contact Us
                          </a>
                          <a href className="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="detail-box">
                        <h1>
                          ARCHITECT <br />
                          BUILDER CONSTRUCTION <br />
                          SERVICES
                        </h1>
                        <div className="btn-box">
                          <a href className="btn1">
                            Contact Us
                          </a>
                          <a href className="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="detail-box">
                        <h1>
                          ARCHITECT <br />
                          BUILDER CONSTRUCTION <br />
                          SERVICES
                        </h1>
                        <div className="btn-box">
                          <a href className="btn1">
                            Contact Us
                          </a>
                          <a href className="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#customCarousel1" data-slide-to={1} />
              <li data-target="#customCarousel1" data-slide-to={2} />
              <li data-target="#customCarousel1" data-slide-to={3} />
              <li data-target="#customCarousel1" data-slide-to={4} />
            </ol>
          </div>
        </section>
        {/* end slider section */}
      </div>
      {/* service section */}
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container ">
            <div className="heading_container">
              <h2>Services</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s1.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>Construction Services</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using L
                    </p>
                    <a href>Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s2.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>Building Modeling</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using L
                    </p>
                    <a href>Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s3.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>Pre construction</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using L
                    </p>
                    <a href>Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s4.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>Management</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using L
                    </p>
                    <a href>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end service section */}
      {/* about section */}
      <section className="about_section">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
                </p>
                <a href>Read More</a>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="images/about-img.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
      {/* project section */}
      <section className="project_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Projects</h2>
          </div>
          <div className="carousel-wrap ">
            <div className="filter_box">
              <h6>Category filter</h6>
              <nav className="owl-filter-bar">
                <a href="#" className="item active" data-owl-filter="*">
                  All
                </a>
                <a href="#" className="item" data-owl-filter=".painting">
                  Painting
                </a>
                <a href="#" className="item" data-owl-filter=".reconstruction">
                  Reconstruction{" "}
                </a>
                <a href="#" className="item" data-owl-filter=".repair">
                  Repairs{" "}
                </a>
                <a href="#" className="item" data-owl-filter=".residential">
                  Residential{" "}
                </a>
                <a href="#" className="item" data-owl-filter=".styling">
                  Styling{" "}
                </a>
              </nav>
            </div>
            <div className="owl-carousel project_carousel">
              <div className="item painting">
                <div className="box">
                  <div className="img-box">
                    <img src="images/project1.jpg" alt />
                    <a href className="pin_link">
                      <i className="fa fa-link" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="detail-box">
                    <h5>Interior work</h5>
                    <p>
                      alteration in some form, by injected humour, or randomised
                      words which don't look even slightly believable. If you
                      are going to use
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reconstruction">
                <div className="box">
                  <div className="img-box">
                    <img src="images/project2.jpg" alt />
                    <a href className="pin_link">
                      <i className="fa fa-link" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="detail-box">
                    <h5>Interior work</h5>
                    <p>
                      alteration in some form, by injected humour, or randomised
                      words which don't look even slightly believable. If you
                      are going to use
                    </p>
                  </div>
                </div>
              </div>
              <div className="item repair">
                <div className="box">
                  <div className="img-box">
                    <img src="images/project1.jpg" alt />
                    <a href className="pin_link">
                      <i className="fa fa-link" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="detail-box">
                    <h5>Interior work</h5>
                    <p>
                      alteration in some form, by injected humour, or randomised
                      words which don't look even slightly believable. If you
                      are going to use
                    </p>
                  </div>
                </div>
              </div>
              <div className="item residential">
                <div className="box">
                  <div className="img-box">
                    <img src="images/project1.jpg" alt />
                    <a href className="pin_link">
                      <i className="fa fa-link" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="detail-box">
                    <h5>Interior work</h5>
                    <p>
                      alteration in some form, by injected humour, or randomised
                      words which don't look even slightly believable. If you
                      are going to use
                    </p>
                  </div>
                </div>
              </div>
              <div className="item styling">
                <div className="box">
                  <div className="img-box">
                    <img src="images/project1.jpg" alt />
                    <a href className="pin_link">
                      <i className="fa fa-link" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="detail-box">
                    <h5>Interior work</h5>
                    <p>
                      alteration in some form, by injected humour, or randomised
                      words which don't look even slightly believable. If you
                      are going to use
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end project section */}
      {/* client section */}
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Testimonial</h2>
          </div>
        </div>
        <div
          id="customCarousel2"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt />
                      </div>
                      <div className="detail-box">
                        <div className="client_info">
                          <div className="client_name">
                            <h5>Morojink</h5>
                            <h6>Customer</h6>
                          </div>
                          <i className="fa fa-quote-left" aria-hidden="true" />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt />
                      </div>
                      <div className="detail-box">
                        <div className="client_info">
                          <div className="client_name">
                            <h5>Morojink</h5>
                            <h6>Customer</h6>
                          </div>
                          <i className="fa fa-quote-left" aria-hidden="true" />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt />
                      </div>
                      <div className="detail-box">
                        <div className="client_info">
                          <div className="client_name">
                            <h5>Morojink</h5>
                            <h6>Customer</h6>
                          </div>
                          <i className="fa fa-quote-left" aria-hidden="true" />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#customCarousel2"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#customCarousel2" data-slide-to={1} />
            <li data-target="#customCarousel2" data-slide-to={2} />
          </ol>
        </div>
      </section>
      {/* end client section */}
      {/* why us section */}
      <section className="why_us_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Why Choose Us?</h2>
          </div>
          <div className="why_us_container">
            <div className="box">
              <div className="img-box">
                <img src="images/w1.png" alt />
              </div>
              <div className="detail-box">
                <h5>Project done on time</h5>
                <p>
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classical Latin literature from 45 BC, making it over 2000
                  years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w2.png" alt />
              </div>
              <div className="detail-box">
                <h5>Always avaliable</h5>
                <p>
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classical Latin literature from 45 BC, making it over 2000
                  years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w3.png" alt />
              </div>
              <div className="detail-box">
                <h5>Professional and responsible</h5>
                <p>
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classical Latin literature from 45 BC, making it over 2000
                  years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href>Read More</a>
          </div>
        </div>
      </section>
      {/* end why us section */}
      {/* contact section */}
      <section className="contact_section layout_padding-bottom">
        <div className="container-fluid">
          <div className="col-lg-4 col-md-5 offset-md-1">
            <div className="heading_container">
              <h2>Contact Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="form_container">
                <form action>
                  <div>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="btn_box">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 px-0">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Home;
