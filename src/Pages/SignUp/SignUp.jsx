import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
const SignUp = () => {
  const [disable, setDisable] = useState(true);
  const captchaRef = useRef(null);
  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password, name });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = () => {
    const userCaptcha = captchaRef.current.value;
    if (validateCaptcha(userCaptcha) == true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between w-full lg:px-16 px-4">
        <div className="text-center lg:text-left lg:w-1/2 w-full">
          <h1 className="text-3xl md:text-5xl font-bold">Sign Up</h1>
          <p className="py-4 md:py-6 text-sm md:text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full lg:w-1/2 md:max-w-md max-w-sm shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Enter The Captcha Text Given"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleCaptcha}
                className="btn btn-outline btn-xs mt-2"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disable}
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
            <p className=" text-2xl p-4">
              <small>
                Already have an Account?
                <Link className="text-indigo-600" to="/login">
                  Login here
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
