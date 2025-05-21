import ModelGLBSchema from "../../utils/ModelGLBSchema";
import type ModelConfig from "../../types/modelConfig";

// Model Information:
// * title:	(FREE) Porsche 911 Carrera 4S
// * source:	https://sketchfab.com/3d-models/free-porsche-911-carrera-4s-d01b254483794de3819786d93e0e1ebf
// * author:	Karol Miklas (https://sketchfab.com/karolmiklas)

// Model License:
// * license type:	CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
// * requirements:	Author must be credited. Modified versions must have the same license. Commercial use is allowed.

function Porsche911() {
  const porsche911Configs: ModelConfig = {
    modelPath: "./models/911_2.glb",
  };
  return (
    <ModelGLBSchema config={porsche911Configs}/>
  )
}

export default Porsche911
