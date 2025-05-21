export default interface ModelConfig {
  modelPath: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  color?: string;
  opacity?: number;
  wireframe?: boolean;
  animation?: boolean;
}
