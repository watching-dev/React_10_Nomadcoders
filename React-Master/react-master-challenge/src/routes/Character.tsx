import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCharacterInfo } from "../api";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouteParams {
  characterId: string;
}

interface RouteState {
  characterId: string;
  name: string;
}

interface InfoData {
  id: string;
  name: string;
  imageUrl: string;
  sourceUrl: string;
  films: string[];
}

const Img = styled.img`
  width: 240px;
  height: 240px;
  display: flex;
  border-radius: 120px;
  margin-left: 100px;
  justify-content: center;
  align-items: center;
`;

function Character() {
  const { characterId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", state],
    () => fetchCharacterInfo(state.characterId)
  );
  console.log(infoData);
  const loading = infoLoading;
  return (
    <Container>
      <Header>
        <Title>
          <Link to={"/"}>&larr;</Link>
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Img src={`${infoData?.imageUrl}`} />
          <Title>
            {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
          </Title>
          {infoData?.films.map((list) => (
            <Overview key={list}>
              <span>{list}</span>
            </Overview>
          ))}
        </>
      )}
    </Container>
  );
}
export default Character;
