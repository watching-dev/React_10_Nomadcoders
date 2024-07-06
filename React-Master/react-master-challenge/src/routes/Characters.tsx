import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCharacter } from "../api";
import { getLineAndCharacterOfPosition } from "typescript";

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

const CharacterList = styled.ul``;

const Character = styled.li`
  background-color: clear;
  color: white;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
    align-items: center;
  }
  &:hover {
    a {
      background-color: white;
      color: #2f3640;
      border-radius: 15px;
    }
  }
`;

const Title = styled.h1`
  font-size: 30px;
  color: white;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 50px;
  margin-left: 100px;
  justify-content: center;
  align-items: center;
`;

interface ICharacter {
  id: string;
  name: string;
  imageUrl: string;
}

function Characters() {
  const { isLoading, data } = useQuery<ICharacter[]>(
    "allCharacter",
    fetchCharacter
  );
  console.log(data);
  return (
    <Container>
      <Header>
        <Title>Disney Characters</Title>
      </Header>
      {isLoading ? (
        <Loader>"loading.."</Loader>
      ) : (
        <CharacterList>
          {data?.slice(0, 100).map((char) => (
            <Character key={char.id}>
              <Link
                to={{
                  pathname: `/character/${char.id}`,
                  state: { characterId: char.id, name: char.name },
                }}
              >
                <Img src={`${char.imageUrl}`} />
                &rarr; {char.name}
              </Link>
            </Character>
          ))}
        </CharacterList>
      )}
    </Container>
  );
}
export default Characters;
