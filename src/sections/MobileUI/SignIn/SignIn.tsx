import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="native-sign-in-container">
      <div className="native-heading-container">
        <h3>Sign in for the best experience</h3>
      </div>
      <div className="sign-in-btn">
        <a href="#">Sign in securely</a>
      </div>
      <div className="sign-up-link-container">
        <a href="#">
          <span>Create an account</span>
        </a>
      </div>
    </div>
  );
};

export default SignIn;
