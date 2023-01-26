
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import rocketm from './models/rocket.glb';
import Prototypes from 'prop-types';


function Rocket(x,y,z) {
  const loader= new GLTFLoader();
  loader.load(rocketm, (d)=>{
    const entity=document.getElementById("rocket");
    entity.object3D.add(d.scene)
  })
  return (
      <a-entity id="rocket" position={`${x} ${y} ${z}`} scale="15 15 15"></a-entity>


  );

}

Rocket.Prototypes={
    x:Prototypes.number,
    y:Prototypes.number,
    z:Prototypes.number
}
export default Rocket;

