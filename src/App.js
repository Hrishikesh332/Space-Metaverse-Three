import logo from './logo.svg';
import './App.css';
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import sky from './space.jpg';
import mountain from './models/mountain.glb';
import Rocket from './Rocket';
import Spacy from './Spacy';
import Ship from './Ship';

function App() {
  const loader= new GLTFLoader();
  loader.load(mountain, (d)=>{
    const entity=document.getElementById("mountain");
    entity.object3D.add(d.scene)
  })
  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={sky}/>
      </a-assets>

      <a-sky
      color="#FFFFFF"
      material="src:#sky"
      rotation="0 0 0"
      ></a-sky>
      <a-entity id="mountain" position="0 0 0" scale="15 15 15"></a-entity>
      <Spacy x={-20} y={40} z={20}/>
      <Ship x={10} y={11} z={30}/>
      <Rocket x={0} y={30} z={80}/>
    </a-scene>

  );
}

export default App;
