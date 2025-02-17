import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"} className="w-10 min-w-10 h-10 min-h-10 object-contain">
      <img src="/svg/logo.svg" alt="logo" />
    </Link>
  );
};
