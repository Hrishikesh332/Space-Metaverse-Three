
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import spaceshipmodel from './models/spaceship.glb';
import Prototypes from 'prop-types';


function Ship({x,y,z}) {
  const loader= new GLTFLoader();
  loader.load(spaceshipmodel, (d)=>{
    const entity=document.getElementById("ship");
    entity.object3D.add(d.scene)
  })

  return(
    <a-entity id="ship" position={`${x} ${y} ${z}`}></a-entity>
  );
}

Ship.Prototypes={
    x:Prototypes.number,
    y:Prototypes.number,
    z:Prototypes.number,
}

export default Ship;