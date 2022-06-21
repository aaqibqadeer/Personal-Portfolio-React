export const MouseIcon = ({ dark }) => {
  return (
    <div className="dizme_tm_down">
      <a className="anchor" href="#about">
        <svg
          width="26px"
          height="100%"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            id="wheel"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: dark ? "#fff" : "#000",
              strokeWidth: 20,
            }}
          />
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: dark ? "#fff" : "#000",
              strokeWidth: 20,
            }}
          />
        </svg>
      </a>
    </div>
  );
};