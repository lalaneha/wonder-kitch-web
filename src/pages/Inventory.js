//installed and used axios for submit function
//need to check with alex about naming and linking in with front end 
import axios from "axios";
import React, { useState, useEffect } from "react";
import FridgeItem from "../components/FridgeItem";
let id = 2
const data = [{name:'Milk', id:'1', quanity:1}, {name:'MilkDuds', id:'2', quanity:1}]
function Inventory() {
const [file, setFile] = useState(undefined);
const [inventory, setInventory] = useState({});
const [newItemText, setnewItemText] = useState('');
const createMap = data => data.reduce((map, item)=>{
  map[item.name]   = item;
  return map
}, {});

const onSubmit = () => {
  if(file){
    console.log(file);
    // const formData = {
    //   ipAddress: '0.0.0.0',
    //   file: {
    //     value: fs.createReadStream(dest),
    //     options: {
    //       filename: message.file.name,
    //       contentType: message.file.mimetype
    //     }
    //   }
    // };
    const data = new FormData() 
    data.append('file', file)
  axios.post("/takePicture", data)
  .then(res => {
    if (res.status === "error") {
      throw new Error(res.data.message);
    }
    console.log(res)
    // this.setState({results:res.data.results})
    // this.setState({ results: res.data.message, error: "" });
  })
  .catch(err => this.setState({ error: err.message }));
  }
    // axios.post ("/fileProcess", data)
    // //sucessful data we got back 
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => {
    //   console.log(err);
    // }) 
}

const onChangeHandler = evt => {
  setFile(evt.target.files[0]);

}

//each time we add something need to figure out if we already have it and be able to increment 
//each item needs to be saved in db, 
const addItem = () => {
  if(newItemText.length > 0){
    const newInventory = {...inventory};
    const item = newInventory[newItemText];
    if(item) {
      const newItem = {...item, quanity: item.quanity + 1};
      newInventory[newItemText] = newItem;
      setInventory(newInventory);
    }
    else {
      id++;
      //WE woudl make a DB req normally
      setInventory(Object.assign(newInventory, {[newItemText]: {name: newItemText,
      id, gty:1}}));
    }
  }
}

useEffect(()=> {
  console.log('USE EFFECT ALLED')
  setInventory(createMap(data));
}, [data]);

const itemChangeHandler = evt => {
  setnewItemText(evt.target.value);
}
  console.log(inventory);
  const currentInventory = Object.keys(inventory); 
  return currentInventory.length > 0 ?
   (
    <div>
    <div className="item-container">
      {currentInventory.map(key => {
        const item = inventory[key];
        return <FridgeItem key={item.id} item={item} />;
      })}
    </div>
    <p>Lets take a look at what you have in your fridge</p>
    <input type="file" name="file" onChange={onChangeHandler}/>
    <button onClick={onSubmit}>Submit</button>
    <input type="text" value={newItemText} name="newItemText" onChange={itemChangeHandler}/>
    <button onClick={addItem}>Add Item</button>
    </div>
  ) : 
  (
    <div>Loading ......</div>
  )
}

export default Inventory;
//create input to accept file, 

