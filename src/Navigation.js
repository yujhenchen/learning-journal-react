import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="./">HOME</Link>
        </li>
        <li>
          <Link to="./about">ABOUT ME</Link>
        </li>
      </ul>
    </nav>
  );
}
