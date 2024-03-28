import styled from "styled-components";

export const ChampionPickSplash = styled.div`
    height: 100%;
    width: 100%;
    transition: background-color 0.5s ease, opacity 0.75s;
    -webkit-transition: background-image 0.5s ease, opacity 0.75s;
    transition: background-image 0.5s ease, opacity 0.75s;
    border-width: 0px;

    ${({ blank }) => blank ? 
    `
        background-size: 45%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    `
    : 
    `
        background-size: 160%;
        background-position: 60% 10%;
    `}

    ${({ active }) => active === true &&
    `
        animation: pick-shadow 3s infinite;
    `}

    /* Thêm nền màu đen ở dưới cùng */
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 90%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }
    & > img {
        transform: scale(2.5); /* Phóng to ảnh */
    }

    @keyframes pick-shadow {
        50% {
            box-shadow: inset 0 -150px 100px -100px rgb(255, 255, 255);
        }
    }

    @keyframes zoomIn {
        0% {
            transform: scale(1);
            filter: blur(0);
        }
        50% {
            transform: scale(1.5);
            filter: blur(3px);
        }
        100% {
            transform: scale(1);
            filter: blur(0);
        }
    }
`;

export const ChampionName = styled.div`
    display: none;
`;

export const PlayerName = styled.div`
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%; /* Đảm bảo chiều rộng của phần tử đầy đủ */
    display: flex;
    justify-content: center; /* Căn giữa theo chiều ngang */
    color: white;
    font-family: Vegan Abattoir;
    font-weight: 200;
    font-size: 15px;
    letter-spacing: 5px;
    text-transform: uppercase;
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
        width: 1px;
        background: rgba(255, 255, 255, .25);
        top: 0;
        bottom: 0;
    }

    & > ${PlayerName},${ChampionName} {
        ${({team}) => team === "blue" ?
        `
            right: auto;
        ` :
        `
            left: 5px;
        `}
    }

     ${({phase}) => phase === 'three-big-two-small' ? (`
        &:nth-child(n+1) {
            flex: 3 1 0;
        }

        &:nth-child(n+4) {
            flex: 1 1 0;
        }
    `) : phase === 'three-small-two-big' && (`
        &:nth-child(n+1) {
            flex: 1 1 0;
        }

        &:nth-child(n+4) {
            flex: 3 1 0;
        }
    `)}
`;

var roles = ["top", "jungle", "middle", "bottom", "utility"];

const PickComponent = ({ phase, champion, playerIGN, currentSlot, team, idx, slot }) => {
  var urlBG = champion === "" ? require(`../../../images/role-${roles[idx]}.png`).default : require(`../../../images/cache/11.21.1/champion/${champion.replace(/[^A-Z0-9]/ig, "")}_centered_splash.jpg`).default;
  return (
    <Pick team={team} id={`"pick_${team}_${idx}"`} key={slot} phase={phase}>
      <ChampionPickSplash
        blank={champion === "" ? true : false}
        active={slot === currentSlot ? true : false}
        style={{ backgroundImage: `url(${urlBG})` }}
        id={`"pick_${team}_splash_${idx}"`}
      />
      <ChampionName id={`"pick_${team}_champ_${idx}"`}>{champion}</ChampionName>
      <PlayerName className={"text-ign"} id={`"pick_${team}_ign_${idx}"`}>{playerIGN}</PlayerName>
    </Pick>
  );
};

export default PickComponent;