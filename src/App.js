import { useState } from 'react';
import './App.css';

function App() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [result, setResult] = useState(0)

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [res, setRes] = useState(0)

  // const [data1, setData1] = useState('')
  // const [data2, setData2] = useState('')
  // const [diff, setDiff] = useState()

  // function transformDiff(str) {
  //   let arr = str.split('-')
  //   return(arr.map(el => +el))
  // }

  // function calcDiff(arr1, arr2) {
  //   return (arr1[0] - arr2[0], arr1[1] - arr2[1], arr1[2] - arr2[2])
  // }
 


  return (
    <div className="App">
      <input value={value1} onChange={(e) => setValue1(e.target.value)} />
      <input value={value2} onChange={(e) => setValue2(e.target.value)} />
      <button onClick={() => setResult(Number(value1) + Number(value2))}>button</button>
      <p>{result}</p>
      <br />
      <hr />
      <input value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input value={num2} onChange={(e) => setNum2(e.target.value)} /> <br />
      <button onClick={() => setRes(Number(num1) + Number(num2))}>Sum</button>
      <button onClick={() => setRes(Number(num1) * Number(num2))}>Multi</button>
      <p>{res}</p>
      <br />
      <hr />
      {/* <input type='date' value={data1} onChange={(e) => setData1(e.target.value)} />
      <input type='date' value={data2} onChange={(e) => setData2(e.target.value)} /> <br />
      
      <button  >show diff</button> <br />
      <p>{console.log(transformDiff(data1))} {console.log(transformDiff(data2))}</p>
      <p>{console.log(calcDiff(transformDiff(data1), transformDiff(data2)))}</p>
      
      

    */}

    </div>
  );
}

export default App;
