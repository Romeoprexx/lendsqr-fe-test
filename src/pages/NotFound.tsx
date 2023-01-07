import { ReactComponent as Logo } from "../assets/lendsqr-logo.svg";

const NotFound = () => {
  return (
    <div className="error-page">
      <Logo height="50px" width="" />
      <h1>This page cannot be found</h1>
      <p>Make sure the URL you typed is valid</p>
    </div>
  );
};

export default NotFound;
