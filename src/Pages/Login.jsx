import React, { memo } from "react";
import { Link } from "react-router-dom";

const Login = memo(() => {
  return (
    <div>
      <section classname="contact_section layout_padding">
        <div classname="container-fluid">
          <div classname="col-md-6 offset-md-1">
            <div classname="heading_container">
              <h2>Contact Us</h2>
            </div>
          </div>
          <div classname="row">
            <div classname="col-md-6 offset-md-3">
              <div classname="form_container">
                <form action>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="password" placeholder="Password" />
                  </div>
                  <div classname="btn_box">
                    <button>Login</button>
                  </div>
                </form>
                <div>
                  <Link to="/signup">Click here If you've not registered</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Login;
