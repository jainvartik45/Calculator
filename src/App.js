import { useState } from 'react'



function App  () {

  const [val, setval] = useState('');
  const [res,setres] = useState('');

const update = value =>{
   setval(val + value);
}

const calcvalue=()=>{

  setres(eval(val))
  setval('')
 
}
const clr=()=>{
 
  setres('')
  setval('')
}

  return (
    <div className="container">
    <h1>Calculator</h1>

    <div className="calculator">
        
        <table  id='tbl'>
        
          <tr>
            <td colspan='4' id='tr1'>{res ? <span>{res}</span> : val}</td>
            
          </tr>
            <tr>
                <td className='td1' onClick={()=>update('(')}>(</td>
                <td className='td1' onClick={()=>update(')')}>)</td>
                <td className='td1' onClick={clr}>C</td>
                <td className='td1' onClick={()=>update('%')}>%</td>
            </tr>
            <tr >
                <td className='td1' onClick={()=>update('7')}>7</td>
                <td className='td1' onClick={()=>update('8')}>8</td>
                <td className='td1' onClick={()=>update('9')}>9</td>
                <td className='td1' onClick={()=>update('*')}>X</td>
            </tr>
            <tr>
                <td className='td1' onClick={()=>update('4')}>4</td>
                <td className='td1' onClick={()=>update('5')}>5</td>
                <td className='td1' onClick={()=>update('6')}>6</td>
                <td className='td1'  onClick={()=>update('-')}>-</td>
            </tr>
            <tr>
                <td className='td1'  onClick={()=>update('1')}>1</td>
                <td className='td1' onClick={()=>update('2')}>2</td>
                <td className='td1' onClick={()=>update('3')}>3</td>
                <td className='td1' onClick={()=>update('+')}>+</td>
            </tr>
            <tr>
                <td className='td1' onClick={()=>update('0')}>0</td>
                <td className='td1' onClick={()=>update('.')}>.</td>
                <td className='td1' onClick={()=>update('/')}>/</td>
                <td className='td1' onClick={calcvalue}>=</td>
            </tr>
        </table>
    </div>
</div>
  )
  
}
{/*  */}

export default App