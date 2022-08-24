import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgPic from "../assets/index.jpg";
import { Responsive } from "./style";

function SearchRoute({ quotes, error }) {
  return (
    <Responsive>
      {console.log(quotes)}
      {quotes.length <= 0 ? (
        <h2>{error}</h2>
      ) : typeof quotes === "undefined" ? (
        <h2>{error}</h2>
      ) : (
        quotes.map((anime, i) => {
          return (
            <div key={i}>
              <div className="Container">
                <Link to={`/quotes/${anime.anime}/${anime.character}/${i}`}>
                  <Cards className="Cards">
                    <Img>
                      <img src={ImgPic} alt="naruto" />
                    </Img>
                    <Content className="Content">
                      <AnimeTitle>
                        <h4 className="animeName">{`${anime.anime} quote:`}</h4>
                      </AnimeTitle>
                      <p>{`${anime.quote}`}</p>
                      <Author className="Author">
                        <p>{"-" + anime.character}</p>
                      </Author>
                    </Content>
                  </Cards>
                </Link>
              </div>
            </div>
          );
        })
      )}
    </Responsive>
  );
}

const Cards = styled.div`
  width: 100%;
  height: 10%;
  background-color: #8338ec;
  margin: 2rem 0;
  padding: 1.4rem;
  border-radius: 2rem;
  display: flex;

  h4 {
    font-family: Lato;
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    margin-bottom: 20px;
    text-align: center;
  }
  p {
    font-family: Bangers;
    color: white;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const Img = styled.div`
  color: grey;
  margin: 0 2% 0 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 2rem;
    width: 90%;
  }
`;
const Author = styled.div`
  text-align: right;
  font-size: 1.5rem;
  margin: 2% 10% 0 0;
`;

const Content = styled.div`
  width: 90%;
`;
const AnimeTitle = styled.div`
  h4 {
    text-align: left;
    border: none;
    font-style: italic;
  }
`;
export default SearchRoute;
