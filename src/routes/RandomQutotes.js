import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ImgPic from "../assets/itachi.jpg";
import { FiRefreshCw } from "react-icons/fi";
import {
  Cards,
  Img,
  Content,
  Contaier,
  AnimeTitle,
  Author,
  Btn,
  Responsive,
} from "../components/style";
// import Title from "../components/Title";
function RandomQutotes() {
  const [quotes, setQuote] = useState([]);
  const [error, setError] = useState();
  const [button, setButton] = useState("false");
  useEffect(() => {
    doApiCall();
  }, [button]);

  async function doApiCall() {
    try {
      const res = await axios.get("https://animechan.vercel.app/api/random");
      setQuote(res.data);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  }
  // console.log(typeof quotes);
  return (
    <Responsive>
      <Contaier className="ContainerRandom">
        {/* <Title /> */}
        {quotes.length <= 0 || button === false ? (
          <h2>Loading......</h2>
        ) : typeof quotes.quote === "undefined" ? (
          <h2>{error}</h2>
        ) : (
          <Cards key={quotes.quote} className="CardsRandom">
            <Img>
              <img src={ImgPic} alt="naruto" />
            </Img>
            <Content>
              <AnimeTitle>
                <h4>{`${quotes.anime} quote:`}</h4>
              </AnimeTitle>
              <p>{`${quotes.quote}`}</p>
              <Author className="Author">
                <p>{"-" + quotes.character}</p>
              </Author>
            </Content>
          </Cards>
        )}
        <Btn className="RefreshButton">
          <button onClick={setButton}>
            <FiRefreshCw className="arrowBack" />
            <h4>Refresh</h4>
          </button>
        </Btn>
      </Contaier>
    </Responsive>
  );
}

export default RandomQutotes;
