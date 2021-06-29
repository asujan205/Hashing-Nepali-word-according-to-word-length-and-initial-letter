import React,{useState,useEffect} from 'react';
import './App.css';
const swear = [
'पपप',
'मु',
'फक',
'मक',
'ल',
'तुरी',
'थ',
'न',

]

function App() {
const[key,setKey]=useState([]);
const[hasharray,setArray]=useState([]);
const[swearwords,setSwear]=useState(swear)
/*useEffect(()=>{
  swear.map(data=>
  // setKey(data.toString().length)

key=data.length

    )
  
},[]) */
const[size,setSize]=useState(swearwords.length);

const hashkey=(key)=>{
  
return key.length %size;

}
const  set=(value)=>{

    let index = hashkey(value);
   console.log(index)

    if(!hasharray[index]){
      hasharray[index] = [ ];
    }

    hasharray[index].push([value])
console.log(hasharray)
    return index

  }


  return (
    <div className="App">
      {set(swearwords[0])}
      {set(swearwords[2])}
     {set("ववव")}


    </div>
  );

}

export default App;
