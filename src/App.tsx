import qr from "./assets/image-qr-code.png";

type Props = {};

const App = (props: Props) => {
  return (
    <section className="app">
      {/* POPOUT */}
      <div className="modal">
        {/* QR IMAGE */}
        <div className="image">
          <img alt="qr-code" src={qr} width="288px" height="288px" />
        </div>
        {/* Heading Text */}
        <div className="main-text">
          Improve your front-end skills by building projects
        </div>
        {/* Subtext */}
        <div className="subtext">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </section>
  );
};

export default App;
