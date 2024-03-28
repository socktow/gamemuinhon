import styled from "styled-components";

export const Ban = styled.div`
    flex: 1;
    max-height: 120px;
    transition: 2s;
    overflow: hidden;
    box-sizing: border-box;
    height: inherit;
    border: 1.5px solid white;
    margin-left : 10px;

    ${({team}) => team === "blue" ? (`
        &:nth-child(n+2)::after {
            content: "";
            position: absolute;
            height: 70%;
            background: rgb(153, 153, 153);
            top: 16%;
            width: 1px;
            z-index: 1;
        }
    `) : (`
        &:nth-child(-n+4)::after {
            content: "";
            position: absolute;
            height: 70%;
            top:16%;
            width: 1px;
            z-index: 1;
            margin-left: 5px;
        }
    `)}
`;

export const ChampionBanSplash = styled.div`
    display: flex;
    background-repeat: no-repeat;
    flex-shrink: 0;
    transition: filter 0.5s ease-in-out;

    ${({ blank }) => blank ?
    `
        background-size: 25%;
        background-position: 50% 50% !important;
        height: 100% !important;
        width: 100%;

        &:after {
            content:"";
            width: 100%;
            height: 100%;
            margin-top: 7px;
            background-image: url('https://cdn.discordapp.com/attachments/1189441843054788689/1222548957972922368/ban-placeholder.png?ex=66169e71&is=66042971&hm=29bda45e572cd1ebfac0ae28254750cb311ee2fdd3568d602a927155073a3957&');
            background-size: 100%;
            background-repeat: no-repeat;
        }
    `
    :
    `
        background-size: 70px;
        background-position: 50% 10% !important;
        height: 100%;
        width: 100%;
    `}

    ${({ active }) => active === true &&
    `
        animation: ban-shadow 3s infinite;
        
        @keyframes ban-shadow {
            50% {box-shadow: inset 0px 0px 30px 0px rgb(255, 255, 255);}
        }
    `}

    ${({active, blank}) => (!active && !blank) &&
    `
        filter: grayscale(75%);
    `}
`;

const BanComponent = ({ champion, currentSlot, team, idx, slot }) => {
  var urlBG = champion !== "" && require(`../../../images/cache/11.21.1/champion/${champion.replace(/[^A-Z0-9]/ig, "")}_square.png`).default;
  return (
    <Ban team={team} id={`ban_${team}_${idx}`} key={slot}>
      <ChampionBanSplash
        blank={champion === "" ? true : false}
        active={slot === currentSlot ? true : false}
        style={{ backgroundImage: `url(${urlBG})` }}
        id={`bans_${team}_splash_${idx}`}
      >
        {/*champion !== "" && slot !== currentSlot && (<BanSymbol src={require(`../../images/ban-placeholder.png`).default}/>)*/}
      </ChampionBanSplash>
    </Ban>
  );
};

export default BanComponent;
