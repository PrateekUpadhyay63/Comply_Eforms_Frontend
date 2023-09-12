import React, { Fragment, Component, useState, useEffect } from "react";

// import Slider from "react-slick";
import bg1 from "../../Utils/originals/city.jpg";
import bg2 from "../../Utils/originals/citydark.jpg";
import bg3 from "../../Utils/originals/citynights.jpg";
import {Visibility,VisibilityOff} from '@mui/icons-material';
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/Actions";

import {
  Button,
  FormGroup,
  Input,
} from "@mui/material";
import "./index.scss";
import { useNavigate } from "react-router-dom"
import { AppDispatch } from "../../Redux/store";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isError, setError] = useState({ email: false, password: false });
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    initialSlide: 0,
    autoplay: true,
    adaptiveHeight: true,
  };

  useEffect(() => {
    localStorage.clear();
  }, []);
  const redirectFunc=()=>{
    history("/IndividualUs");
    // window.location.reload();
  }
  const handleChange = (e:any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
    if(data.email.trim()!=="" && data.password.trim()!=="")
   { 
    dispatch(loginAction(data,redirectFunc))
    redirectFunc();
  }
    else{
      if(data.email.trim()===""){
        setError({ ...isError, email: true });
      }else
     { setError({ ...isError, password: true });}
    }
  };
  return (
    <Fragment>
      <div className="h-99">
        <div className="h-100 g-0 row">
          <div className="d-none d-lg-block col-4">
            <div className="slider-light">
              {/* <Slider {...settings}>
                <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                  <div
                    className="slide-img-bg"
                    style={{
                      backgroundImage: "url(" + bg1 + ")",
                    }}
                  />
                  <div className="slider-content">
                    <h3>Perfect Balance</h3>
                    <p>
                      ArchitectUI is like a dream. Some think it's too good to
                      be true! Extensive collection of unified React Boostrap
                      Components and Elements.
                    </p>
                  </div>
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                  <div
                    className="slide-img-`        bg"
                    style={{
                      backgroundImage: "url(" + bg3 + ")",
                    }}
                  />
                  <div className="slider-content">
                    <h3>Scalable, Modular, Consistent</h3>
                    <p>
                      Easily exclude the components you don't require.
                      Lightweight, consistent Bootstrap based styles across all
                      elements and components
                    </p>
                  </div>
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                  <div
                    className="slide-img-bg opacity-6"
                    style={{
                      backgroundImage: "url(" + bg2 + ")",
                    }}
                  />
                  <div className="slider-content">
                    <h3>Complex, but lightweight</h3>
                    <p>
                      We've included a lot of components that cover almost all
                      use cases for any type of application.
                    </p>
                  </div>
                </div>
              </Slider> */}
            </div>
          </div>
          <div
            className=" col-md-8 col-lg-8 col h-100 d-flex bg-white justify-content-center align-items-center"
          >
            <div className="mx-auto app-login-box col-md-10 col-lg-9 col-sm-12 col">
              <div className="app-logo" />
              <h4 className="mb-0">
                <div className="label">Welcome</div>
                <span className="textClass">
                  Please sign in to your account
                </span>
              </h4>
              {/* <h6 className="mt-3">
                No account?{" "}
                <Link to="/register" className="text-primary">
                  Sign up now
                </Link>
              </h6> */}

              <div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <FormGroup>
                        <label className="textClasslabel">
                          Email
                        </label>
                        <Input
                          required
                          autoComplete="off"
                          type="email"
                          name="email"
                          id="exampleEmail"
                          value={data.email}
                          placeholder="Email here..."
                          onChange={handleChange}
                        />
                      </FormGroup>
                      {isError.email ? (<small className="errorClass">Please Enter Email.</small>) : ''}
                    </div>
                    <div className="column col col-md-6">
                      <FormGroup>
                        <label className="textClasslabel">
                          Password
                        </label>
                        <Input
                          required
                          autoComplete="off"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="examplePassword"
                          placeholder="Password here..."
                          value={data.password}
                          onChange={handleChange}
                        />
                        <div
                          className="position-absolute d-flex end-0 mr-5 h-10"
                          style={{ cursor: "pointer" ,top:"1.7rem"}}
                        >
                          {showPassword ? (
                            <Visibility
                              onClick={() => setShowPassword(false)}
                              aria-hidden="true"
                            />
                          ) : (
                            <VisibilityOff
                              onClick={() => setShowPassword(true)}
                              aria-hidden="true"
                            />
                          )}
                        </div>
                      </FormGroup>
                      {isError.password ? (<small className="errorClass">Please Enter Password.</small>) : ''}
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="ms-auto">
                      <Button type="submit" color="primary" size="small">
                        Login
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Login;
