import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
const[key,setKey]=useState([]);
const[hasharray,setArray]=useState([]);
const[swearwords,setSwear]=useState([])
useEffect(()=>{
 fetch("./profanity.json").then(
    function(res){
    return res.json()
  }).then(function(data){
  // store Data in State Data Variable
    setSwear(data)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )
  
},[]) 
console.log(swearwords)

let size=swearwords.length;
console.log(size)
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
   // return index

  }

const mapData=(swearwords)=>{

 swearwords.map(data=>{set(data)})
}
mapData(swearwords)

const get=(value)=>{
 let index=hashkey(value)
 if(!hasharray[index]) return false;
 for(let bucket of hasharray[index]){
  if(bucket[0]===value)
  {
    return true
  
  }

  }
 
}
let check=get("फक")
console.log(check)

  return (
    <div className="App">
     

    </div>
  );

}

export default App;
