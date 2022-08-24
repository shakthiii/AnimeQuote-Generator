import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchRoute from "./components/SearchRoute";
import Title from "./components/Title";
import GetRandomRoute from "./routes/GetRandomRoute";
import InfoQuote from "./routes/InfoQuote";
import { NotFound } from "./routes/NotFound";
import RandomQutotes from "./routes/RandomQutotes";
import { Searchbar, GetButton, Responsive } from "./components/style";
import { FaSearch } from "react-icons/fa";

function App(props) {
  const [quotes, setQuote] = useState([]);
  const [search, setSearch] = useState("saitama");
  const [button, setButton] = useState(false);
  const [error, setError] = useState();
  const [serachBtn, setSearchBtn] = useState(false);

  const RANDOM_QUOTE =
    "https://animechan.vercel.app/api/quotes/anime?title=naruto&page=2";
  const CHARACTER_QUOTE = `https://animechan.vercel.app/api/quotes/character?name=${search}`;

  let data = button ? RANDOM_QUOTE : CHARACTER_QUOTE;

  useEffect(() => {
    doApiCall();
    console.log(`serachBtn => ${serachBtn}`);
    console.log(`button => ${button}`);
  }, [serachBtn, button]);

  async function doApiCall() {
    try {
      setSearchBtn(false);

      if (data === RANDOM_QUOTE) {
        setButton(false);
      }
      const res = await axios.get(data);

      setQuote(res.data);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  return (
    <Responsive>
      {console.log(button)}
      <Title />
      <Searchbar>
        <input
          placeholder="Enter Character Name....."
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={`/search`}>
          <button
            onClick={() => {
              setSearchBtn(true);
            }}
          >
            <FaSearch />
          </button>
        </Link>
      </Searchbar>
      <div className="GetButton">
        <GetButton>
          <Link to={`/random`}>
            <button className="button1">Get Random</button>
          </Link>

          <Link to={`/Get_Random_10_quotes`}>
            <button onClick={() => setButton(true)} className="button2">
              Get Random 10 Quotes
            </button>
          </Link>
        </GetButton>
      </div>
      <Routes>
        <Route
          path="/"
          element={<SearchRoute quotes={quotes} error={error} />}
        />
        <Route
          path="/search"
          element={<SearchRoute quotes={quotes} error={error} />}
        />
        <Route path="/random" element={<RandomQutotes />} />
        <Route
          path="/quotes/:anime/:character/:id"
          element={<InfoQuote quotes={quotes} error={error} />}
        />
        <Route
          path="/Get_Random_10_quotes"
          element={<GetRandomRoute quotes={quotes} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Responsive>
  );
}

export default App;
