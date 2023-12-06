import React, { memo } from "react";
import { Link } from "react-router-dom";

const Signup = memo(() => {
  return (
    <div>
      <section classname="contact_section layout_padding">
        <div classname="container-fluid">
          <div classname="offset-md-3 col-md-6">
            <div classname="heading_container">
              <h2>Contact Us</h2>
            </div>
          </div>
          <div classname="row">
            <div classname="offset-md-3 col-md-6 ">
              <div classname="form_container">
                <form action>
                  <div>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="password" placeholder="Password" />
                  </div>
                  <div classname="btn_box">
                    <button>Sign Up</button>
                  </div>
                </form>
                <div>
                  <Link to="/login">
                    Click here If you've already registered
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Signup;
