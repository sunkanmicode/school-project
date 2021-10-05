import "./nav.css";
import logo from "../../img/sch2.jpg";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Admission</a>
        </li>
        <div>
          <img className="logo" src={logo} width="100px" height="100px" />
        </div>

        <li>
          <a href="#">Academics</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
