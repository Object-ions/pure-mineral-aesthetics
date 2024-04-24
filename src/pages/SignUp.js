import './SignUp.scss';
import { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase.config';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import OAuth from '../components/OAuth';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Getting the Auth value from getAuth()
      const auth = getAuth();

      // Register the user with the fx that return a promise and assigning it into userCredential
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Getting the actual user info (will use us for the db)
      const user = userCredential.user;

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      // setDoc is what actually going to update our db and set the user in the users collection
      await setDoc(doc(db, 'users', user.uid), formDataCopy);

      // Updating the display name
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      // Redirect to home
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong with registration');
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader"> Sign Up</p>
        </header>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name}
            onChange={onChange}
          />

          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? 'text' : 'password'}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <Link to={'/forgot-password'} className="forgotPasswordLink">
            Forgot Password?
          </Link>

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#fff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        <OAuth />

        <Link to="/sign-in" className="registerLink">
          Sign In instead
        </Link>
      </div>
    </>
  );
};

export default SignUp;
