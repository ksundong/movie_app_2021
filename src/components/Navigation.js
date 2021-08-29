import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to={{
        pathname: "/about",
        state: {  // route에서 정보 보내는 방법
          fromNavigation: true
        }
      }}>About</Link>
    </div>
  );
}

export default Navigation;
