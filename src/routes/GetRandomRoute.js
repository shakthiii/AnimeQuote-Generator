import React from "react";
import ImgPic from "../assets/index.jpg";
import { Link } from "react-router-dom";

import {
  Cards,
  Img,
  Content,
  AnimeTitle,
  Author,
  Responsive,
} from "../components/style";

function GetRandomRoute({ quotes, error }) {
  return (
    <Responsive>
      {console.log(quotes)}
      {quotes.length <= 0 ? (
        <h2>Loading..</h2>
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
                    <Content>
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

export default GetRandomRoute;
