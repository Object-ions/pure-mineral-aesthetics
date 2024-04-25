import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('email was sent');
      setEmail('');
      navigate('/sign-in');
    } catch (error) {
      toast.error('Could not send password reset email');
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
            style={{ width: '350px' }}
          />

          <div className="signInBar">
            <button
              className="signInButton"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className="signInText">Send Reset Link</div>
              <ArrowRightIcon fill="#fff" width="34px" height="34px" />
            </button>
          </div>
          <Link className="forgotPasswordLink" to={'/sign-in'}>
            Back to the Sign In
          </Link>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
