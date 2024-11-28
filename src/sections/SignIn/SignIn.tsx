import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <div className="inner-container">
        <div className="v-spacer-20" />
        <div className="signin-content"></div>
        <div className="signin-button-container">
          <h2>See personalized recommendations</h2>
          <a href="#">
            <span>Sign in</span>
          </a>
          <div className="tool-tip">
            New customer?&nbsp;
            <span>Start here.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
