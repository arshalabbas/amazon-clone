import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="inner-container">
        <br />
        <div className="signin-content">
          <div className="v-spacer-20" />
          <div className="signin-btn-container">
            <h2>See personalized recommendations</h2>
            <a href="#" className="signin-btn">
              Sign in
            </a>
            <div>
              New customer?&nbsp;
              <a href="#">Start here.</a>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
    // <div className="sign-in-container">
    //   <div className="inner-container">
    //     <div className="v-spacer-20 bg-white" />
    //     <div className="signin-content">
    //       <br />
    //       <div className="signin-button-container">
    //         <h2>See personalized recommendations</h2>
    //         <a href="#">
    //           <span>Sign in</span>
    //         </a>
    //         <div className="tool-tip">
    //           New customer?&nbsp;
    //           <span>Start here.</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SignIn;
