import { useParams } from "react-router-dom";
import ImgPic from "../assets/index.jpg";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

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

function InfoQuote({ quotes }) {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <Responsive>
      <Contaier className="ContainerRandom">
        {quotes.map((anime, id) => {
          return (
            <div key={id}>
              <div>
                {id === Number(params.id) ? (
                  <Cards Cards key={anime.quote} className="CardsRandom">
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
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
        <Btn className="RefreshButton">
          <button type="button" onClick={() => navigate(-1)}>
            <BiArrowBack className="arrowBack" /> <h4>Go back</h4>
          </button>
        </Btn>
      </Contaier>
    </Responsive>
  );
}

export default InfoQuote;

// const Btn = styled.div`
//   button {
//     width: 11%;
//     border: none;
//     color: white;
//     font-family: Bangers;
//     font-size: 1.1rem;
//     background-color: #ff006e;
//     padding: 1rem;
//     border-radius: 2rem;
//     position: absolute;
//     left: 50%;
//     transform: translate(-50%, -30%);
//   }
// `;

// const Cards = styled.div`
//   background-color: #8338ec;
//   height: 60%;
//   margin: 2rem 0;
//   padding: 3rem;
//   border-radius: 2rem;
//   display: flex;
//   h4 {
//     font-family: Lato;
//     color: #fff;
//     font-weight: 300;
//     font-size: 1.2rem;
//     margin-bottom: 20px;
//     text-align: center;
//   }
//   p {
//     font-family: Bangers;
//     color: white;
//     width: 70%;
//     font-size: 1.9rem;
//     line-height: 2rem;
//     width: 100%;
//   }
// `;

// const Img = styled.div`
//   color: grey;
//   margin: 0 6% 0 0;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   img {
//     border-radius: 2rem;
//     margin-left: 5%;
//   }
// `;
// const Author = styled.div`
//   text-align: right;
//   margin: 20% 15% 0 0;
// `;

// const Content = styled.div`
//   width: 90%;
// `;
// const Container = styled.div`
//   margin: 0 5%;
//   position: relative;
//   transform: translate(0%, -5%);
// `;

// const AnimeTitle = styled.div`
//   h4 {
//     text-align: left;
//     border: none;
//   }
// `;
