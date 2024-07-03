import { Link, Outlet } from "react-router-dom";

function LR1() {
  return (
    <div>
      <h2>Lord of The Rings I</h2>
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
export default LR1;
