import { Link, Outlet } from "react-router-dom";

function HP1() {
  return (
    <div>
      <h2>Harry Potter I</h2>
      <ul>
        <li>
          <Link to={"chapters"}>Chapters</Link>
        </li>
        <li>
          <Link to={"characters"}>Characters</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default HP1;
