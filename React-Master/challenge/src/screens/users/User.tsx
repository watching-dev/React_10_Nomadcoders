import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User id: {userId} / name: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      {/* /붙이면 절대 경로가 돼서 다르게 나옴 <Link to={"/followers"}>see followers</Link> */}
      {/* 없으면 현재 url 경로 뒤에 붙는 상대경로로 됨 */}
      <Link to={"followers"}>see followers</Link>
      <Outlet context={{ name: users[Number(userId) - 1].name }} />
    </div>
  );
}
export default User;
