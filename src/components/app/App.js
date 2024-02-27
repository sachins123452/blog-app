// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [data, setData] = useState("")

//   const handleData=()=>{
//     setData('Hello')
//   }
//   return (
//     <div className="App">
//       {/* <h1>Functional component method testing</h1> */}
//       {/* <input type='text' placeholder='Enter User Name' name='username' id='userId'/> */}
//       {/* <button data-testid="btn1" onClick={handleData}>Update</button> */}
//       {/* <h1>{data}</h1> */}
//       <h1>getByRole</h1>
//       <input type='text'/>
//     </div>
//   );
// }

// export default App;
const mathOperations={
  sum :function(x,y){
    return x+y
  },
  divide :function(x,y){
    return x/y
  },
  multiply :function(x,y){
    return x*y
  },
}
module.exports=mathOperations
