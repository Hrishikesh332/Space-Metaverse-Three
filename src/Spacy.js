
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import spacymodel from './models/spacym.glb';
import Prototypes from 'prop-types';


function Spacy({x,y,z}) {
  const loader= new GLTFLoader();
  loader.load(spacymodel, (d)=>{
    const entity=document.getElementById("spacy");
    entity.object3D.add(d.scene)
  })

  return(
    <a-entity id="spacy" position={`${x} ${y} ${z}`}></a-entity>
  );
}

Spacy.Prototypes={
    x:Prototypes.number,
    y:Prototypes.number,
    z:Prototypes.number,
}

export default Spacy;