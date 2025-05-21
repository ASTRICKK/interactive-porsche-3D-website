import HeroScene from "../../scenes/HeroScene";
import Navigate from "./Navigate";

function Header() {
  return (
    <div className="canvas-container">
      <Navigate />
      <HeroScene/>
    </div>
  );
}

export default Header;
