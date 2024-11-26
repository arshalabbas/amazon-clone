import "./Account.scss";

const Account = () => {
  return (
    <a href="#" className="account-link">
      <div className="line-1">
        <span>Hello, sign in</span>
      </div>
      <span className="line-2">
        Account & Lists
        <span className="nav-down-arrow down-icon"></span>
      </span>
    </a>
  );
};

export default Account;
