import styled from "styled-components";

export const Container = styled.div`
  width: 1920px;
  height: 1080px;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

export const BarContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 100%;
  text-transform: uppercase;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-bottom: 13%;
  border-top: 5px solid #EBDFC9;
  border-bottom: 5px solid #EBDFC9;
`;

export const TeamInfoContainer = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: #ffffff;
`;

export const TeamInitials = styled.div`
  padding-left: 100px;
  padding-right: 100px; 
  font-family: Akira Expanded;
  font-size: 65px;
  line-height: 65px;
  text-transform: uppercase;
`;

export const TeamName = styled.div`
  padding-left: 100px; 
  padding-right: 100px; 
  font: 600 12px "Montserrat", sans-serif;
  letter-spacing: 14px;
  text-transform: uppercase;
`;

export const Game = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;
export const Round = styled.div`
  font-size: 20px;
`;

export const Timer = styled.div`
  font-size: 40px;
`;

export const TimerContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const GameInfo = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #ffffff;
`;

export const PhaseInfoText = styled.div`
    width: 100%;
    display: flex;
    color: red;
    font-size: 18px;    
`
;

export const Score = styled.div`
  color: #ffffff;
  font-size: 100px;
  font-weight: 500;
  font: 500 100px "Montserrat", sans-serif;
`;

export const Blue = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  magrin-right: 30px;

  & > ${TeamInfoContainer} {
    color : #23211A;
    background: #BDAB72;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%;
  }

  & > ${Score} {
    background : #21201F;
    position: absolute;
    color: #CAB785;
    left: 20%;
    width: 5%; 
    height: 100%;
    display: flex; /* Sử dụng flexbox để căn giữa */
    justify-content: center; /* Căn giữa theo chiều ngang */
    align-items: center; /* Căn giữa theo chiều dọc */
  }
`;

export const Red = styled.div`
  width: 45%;
  direction: rtl;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > ${TeamInfoContainer} {
    color : #CABB8E;
    background: #232323;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: auto 100%;
  }

  & > ${Score} {
    position: absolute;
    color: #20201E;
    right: 20%;
    width: 5%; 
    background : #D0BD8A;
    height: 100%;
    display: flex; /* Sử dụng flexbox để căn giữa */
    justify-content: center; /* Căn giữa theo chiều ngang */
    align-items: center; /* Căn giữa theo chiều dọc */
  }
`;

export const Pick = styled.div`
  & {
    position: relative;
    width: 100%;
    flex: 1;
    transition: 2s;
  }

  &:after {
    content: "";
    position: absolute;
    height: 1px;
    background: rgba(255, 255, 255, 0.25);
    top: 100%;
    width: 450px;
    z-index: 1;
  }

  ${({ phase }) =>
    phase === "three-big-two-small"
      ? `
        &:nth-child(n+1) {
            flex: 3 1 0;
        }

        &:nth-child(n+4) {
            flex: 1 1 0;
        }
    `
      : phase === "three-small-two-big" &&
        `
        &:nth-child(n+1) {
            flex: 1 1 0;
        }

        &:nth-child(n+4) {
            flex: 3 1 0;
        }
    `}
`;

export const ChampionPickSplash = styled.div`
  height: 100%;
  width: 100%;

  transition: background-color 0.5s ease, opacity 0.75s;

  border-width: 0px;
  ${({ blank }) =>
    blank
      ? `
        background-size: 15%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    `
      : `
        background-size: 100%;
        background-position: 20% 25%;
        
    `}

  ${({ active }) =>
    active === true &&
    `
        animation: pick-shadow 3s infinite;
        
        @keyframes pick-shadow {
            50% {box-shadow: inset 0 -150px 100px -100px rgb(219, 200, 93);}
        }
    `}
`;

export const ChampionName = styled.div`
  color: white;
  font-weight: 500;
  position: absolute;
  left: 10px;
  bottom: 35px;
`;

export const PlayerName = styled.div`
  color: white;
  font-weight: 500;
  font-type: italic;
  font-size: 30px;
  position: absolute;
  left: 10px;
  bottom: 0;
`;

export const PicksContainer = styled.div`
  position: fixed;
  bottom: 0%;
  ${({ team }) => (team === "blue" ? `left: 0;` : `right: 0;`)}
  width: 865px;
  height: 250px;

  display: flex;
  flex-direction: row;

  background-color: rgba(18, 23, 26, 0.9);

  ${({ team }) =>
    team === "red" &&
    `
        ${Pick}:after {
            right: 0px !important; left: 0px;
            
        }   
    `}
`;

export const BlueBansContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 740px;
  left: 520px;
  width: 280px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(9, 12, 13, 0);
`;

export const RedBansContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 740px;
  right: 520px;
  width: 280px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row-reverse;
  background-color: rgba(9, 12, 13, 0);
`;

export const BanSymbol = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: 25%;
  background-position: 50% 50% !important;
  height: 100% !important;
  width: 100%;
`;
