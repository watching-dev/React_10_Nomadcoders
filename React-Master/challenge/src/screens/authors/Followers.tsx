import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  name: string;
}
function Followers() {
  const { name } = useOutletContext<IFollowersContext>();
  return <h1>{name}의 followers</h1>;
}
export default Followers;
