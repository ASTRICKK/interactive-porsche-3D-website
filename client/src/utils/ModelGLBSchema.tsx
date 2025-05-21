import { useGLTF } from '@react-three/drei'
import type ModelConfig from '../types/modelConfig'


interface ModelGLBSchemaProps {
  config: ModelConfig
}

function ModelGLBSchema({config}: ModelGLBSchemaProps) {
  const model = useGLTF(config.modelPath)
  return <primitive object={model.scene}/>
}

export default ModelGLBSchema
