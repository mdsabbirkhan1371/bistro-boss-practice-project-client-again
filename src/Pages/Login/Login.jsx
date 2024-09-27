import React, { useEffect, useRef, useState } from 'react';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from 'react-simple-captcha';

const Login = () => {
  const [disable, setDisable] = useState(true);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const captchaRef = useRef(null);

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
          <h1 className="text-3xl md:text-5xl font-bold">Login now!</h1>
          <p className="py-4 md:py-6 text-sm md:text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full lg:w-1/2 md:max-w-md max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
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
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
