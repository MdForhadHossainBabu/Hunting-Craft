import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';
// import toast from "react-hot-toast";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const Register = () => {
  const [show, setShow] = useState(false);

  const showPassword = e => {
    const box = e.target.checked;
    setShow(box);
  };

  const { createUser, updateUserProfile, setProfile, profile } =
    useContext(AuthContext);
  const [error, setError] = useState('');

  const handleSign = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(name, email, password, photo);

    if (password !== confirmPassword) {
      setError("Password did't Match");
      return;
    }

    if (password.length < 6) {
      setError('Password length must be at least 6 character');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError('Your Password Should have at least one uppercase Characters');
      return;
    }
    setError('');
    createUser(email, password)
      .then(result => {
        updateUserProfile(name, photo).then(() => {
          // toast.success(`${result.user.email} register successfully`)
          // setProfile(result.user)
          console.log(result.user);
          form.reset();

          // mongodb collection sign up
          const createdAt = result.user?.metadata?.creationTime;
          const user = {
            name,
            email,
            password,
            photo,
            confirmPassword,
            createdAt: createdAt,
          };

          fetch('https://assignment-10-server-nine-omega.vercel.app/user', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(user),
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  title: 'register success',
                  text: `You are currently Register`,
                  icon: 'success',
                  confirmButtonText: 'Cool',
                });
              }
            });
        });
      })
      .catch(error => {
        toast.error(`${email} already used this email`);
        console.error(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Art & Craft || Register</title>
      </Helmet>
      <div className="flex flex-col  font-display">
        <div className="flex flex-col items-center justify-center px-12">
          <h2 className="text-4xl font-bold text-center text-rose-500 mt-12">
            Register Now
          </h2>
          <form
            onSubmit={handleSign}
            className="flex flex-col gap-5 md:w-1/2 w-full lg:w-1/2 my-12 border-4 px-4 py-4 space-y-3"
          >
            <div className="space-y-2">
              <p>Name :</p>
              <input
                className="outline-none px-5 py-2 bg-slate-200 text-green-500 w-full rounded-md"
                type="text"
                name="name"
                placeholder="Type Your Name*"
                id=""
                required
              />
            </div>
            <div className="space-y-2">
              <p>Email :</p>
              <input
                className="outline-none px-5 py-2 bg-slate-200 text-green-600 w-full rounded-md"
                type="email"
                name="email"
                placeholder="Email*"
                required
                id=""
              />
            </div>
            <div className="space-y-2">
              <p>Photo URL : </p>
              <input
                className="outline-none px-5 py-2 bg-slate-200 text-green-600 w-full rounded-md"
                type="text"
                name="photo"
                placeholder="Photo URL*"
                required
                id=""
              />
            </div>
            <div className="space-y-2">
              <p>Password</p>
              <input
                className="outline-none px-5 py-2 bg-slate-200 text-green-500 w-full rounded-md"
                type={show ? 'text' : 'Password'}
                name="password"
                required
                placeholder="Password*"
                id=""
              />
            </div>
            <div className="space-y-2">
              <p>Password Confirm :</p>
              <input
                className="outline-none px-5 py-2 bg-slate-200 text-green-500 w-full rounded-md"
                type={show ? 'text' : 'Password'}
                name="confirmPassword"
                required
                placeholder="Confirm Password*"
                id=""
              />
              {error && (
                <h2 className="text-red-500">
                  <small>{error}</small>
                </h2>
              )}
            </div>
            <div className="flex gap-2 items-center">
              <input
                onChange={showPassword}
                type="checkbox"
                name="showPassword"
                required
                id=""
              />{' '}
              <p className="flex items-center mb-1">
                {show ? 'hide password' : 'show password'}
              </p>
            </div>
            <input
              className="border px-12 rounded-lg py-1 bg-rose-600 text-white hover:scale-105 duration-300 font-bold"
              type="submit"
              value="Register"
            />
            <div className="my-4 text-center">
              You have already an account ?{' '}
              <Link
                to="/login"
                className="text-blue-600 font-bold hover:font-extrabold hover:text-blue-700 hover:border-b-4 border-blue-600"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
