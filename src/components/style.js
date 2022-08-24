import styled from "styled-components";

export const Searchbar = styled.div`
  width: 100%;
  margin: 10% 0 3% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 60%;
    height: 60px;
    border: none;
    border-radius: 2rem;
    text-align: left;
    padding-left: 30px;
    background: #ff006e;
    font-size: 1.4rem;
    color: white;
  }
  button {
    color: white;
    border: none;
    background-color: #ff006e;
    position: relative;
    right: 280%;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const GetButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    color: white;
    font-family: Bangers;
    font-size: 1.1rem;
    background-color: #8338ec;
    padding: 1rem;
    border-radius: 2rem;

    cursor: pointer;
  }
`;
export const Heading = styled.div`
  width: 100%;
  margin: 10% 0 6% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    border: inset solid 10px #ff006e;
    font-family: Bangers;
    color: white;
    font-size: 1.7rem;
    font-size: 4.5rem;
    text-shadow: 0 0 25px #ff006e;
    text-align: center;
  }
`;

//InfoQuotes route

export const Contaier = styled.div`
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
`;

export const Btn = styled.div`
  button {
    width: 11%;
    border: none;
    color: white;
    font-family: Bangers;
    font-size: 1.1rem;
    background-color: #ff006e;
    padding: 1rem;
    border-radius: 2rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const Cards = styled.div`
  width: 100%;
  background-color: #8338ec;
  margin: 2rem 0;
  padding: 3rem;
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

export const Img = styled.div`
  /* background-color: red; */
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
export const Author = styled.div`
  text-align: right;
  font-size: 1.5rem;
  margin: 2% 10% 0 0;
`;

export const Content = styled.div`
  width: 90%;
`;

export const AnimeTitle = styled.div`
  h4 {
    text-align: left;
    border: none;
  }
`;

//
//
//
//
//
//

export const Responsive = styled.div`
  /* background-color: black; */
  //XS
  input {
    width: 100%;
  }
  h1 {
    font-size: 4rem;
  }
  .GetButton {
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 2.5%;
    margin-top: 3%;
    button {
      width: 100%;
      margin-bottom: 5%;
      margin-top: 10%;
      font-size: 0.9rem;
    }
    .button1 {
      position: relative;
      right: 2%;
    }
    .button2 {
      position: relative;
      left: 5%;
      top: -1.85px;
    }
  }
  .Container {
    //for homePage

    //
    /* background-color: black; */
    .Cards {
      /* height: 30%; */
      /* background-color: red; */
      position: relative;
      right: 8px;
      display: block;
      padding: 10% 0 3% 6%;
      img {
        width: 60%;
        margin-bottom: 29px;
        margin-right: 8%;
      }
      p {
        text-align: justify;
        padding: 0;
      }
      .Author {
        p {
          text-align: right;
          position: relative;
          left: 10%;
          color: #fff;
          margin: 10% 0;
        }
      }
      .animeName {
        font-family: Lato;
        font-style: normal;
      }
    }
  }
  .ContainerRandom {
    //for Get Random Quote and Info Quote Page
    /* background-color: black; */
    /* padding: 50%; */
    /* margin: 10px 0; */
    margin-top: 0;
    position: absolute;
    bottom: 50%;
    .CardsRandom {
      padding: 10% 0 5% 8%;
      position: relative;
      right: 7px;
      display: block;
      cursor: pointer;
      img {
        width: 70%;
        margin-bottom: 29px;
        margin-right: 9%;
      }
      p {
        text-align: justify;
      }
      .Author {
        p {
          text-align: right;
          position: relative;
          left: 10%;
          color: #fff;
          margin: 10% 0;
        }
      }
    }
    .RefreshButton {
      /* background-color: black; */
      //for random and info page button
      button {
        background-color: red;
        width: 40%;
        margin: 5px 0;
        padding-left: 0;
        transform: translate(-55%, -20%);
        position: relative;
        .arrowBack {
          position: relative;
          top: 2px;
          margin: 0 5px;
          font-size: 20px;
        }
        h4 {
          display: inline;
          text-align: center;
          font-size: 1.2rem;
          font-weight: normal;
        }
        /* bottom: 1%; */
        cursor: pointer;
      }
    }
  }

  @media (min-width: 576px) {
    //SM
    /* background-color: black; */
    /* background-color: blue; */
    .GetButton {
      button {
        font-size: 1.3rem;
      }
      .button1 {
        margin-right: 65px;
      }
      .button2 {
        position: relative;

        left: 20px;
        top: -1.2px;
        /* color: black; */
      }
    }
    .Container {
      /* padding: 0; */
      .Cards {
        padding: 10% 5% 2% 5%;
        display: flex;
        img {
          position: relative;
          bottom: 5%;
          padding: 0;
          width: 100%;
        }
        .Content {
          /* background-color: black; */
          margin-left: 10px;
        }
      }
    }
    .ContainerRandom {
      background-color: black;
      margin-top: 3%;
      .CardsRandom {
        padding: 10% 6% 2% 5%;

        /* background-color: red; */
        display: flex;
        img {
          position: relative;
          bottom: 5%;
          padding: 0;
          width: 90%;
          /* background-color: black; */
          /* margin: -10px; */
        }
      }
    }
  }

  @media (min-width: 768px) {
    //MD
  }

  @media (min-width: 992px) {
    //LG

    input {
      width: 90%;
    }

    .Container {
      /* padding: 0; */

      .Cards {
        padding: 3% 3% 0% 3%;
      }
      .Author {
        p {
          margin: 0;
        }
      }
    }

    .ContainerRandom {
      /* padding: 0; */
      margin: 6% 0;

      .CardsRandom {
        margin-bottom: 5%;
      }
    }
    /* background-color: black; */
  }

  @media (min-width: 1200px) {
    //XL
    /* background-color: black; */
    input {
      width: 80%;
    }

    .Container {
      /* padding: 0; */

      .Cards {
        padding: 3% 3% 0% 3%;

        /* background-color: red; */
      }
      .Author {
        p {
          margin: 0;
          /* background-color: black; */
          padding: 0;
        }
      }
    }

    .ContainerRandom {
      /* padding: 0; */
      margin-top: 8%;
      background-color: red;
      .CardsRandom {
        padding: 3% 3% 0% 3%;
      }
    }
    .RefreshButton {
      margin: 5% 3% 3% 3%;
    }
    .GetButton {
      /* display: flex; */
      /* align-items: center;
      justify-content: center; */
      margin: 2%;
      .button1 {
        position: relative;
        right: 20px;
      }
      .button2 {
        position: relative;
        left: 50px;
        top: 0px;
      }
    }
  }

  @media (min-width: 1400px) {
    //XXL
    /* background-color: green; */
    input {
      width: 77%;
    }
    .GetButton {
      /* margin: 1%; */
      position: relative;
      top: -3%;
      /* background-color: red; */
      .button1 {
        position: relative;
        right: 10px;
      }
      .button2 {
        position: relative;
        left: 30px;
        top: -1px;
      }
    }
  }
`;
