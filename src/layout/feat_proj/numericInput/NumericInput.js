import React,{useEffect,useRef} from 'react'
import './NumericInput.scss'

const NumericInput = ({initvalue=1,change=null,min=-4,index=0,style={}}) => {
    const element = useRef(null)

useEffect(() => {
    element.current.value=initvalue
    return () => {
    }
}, [])

    function changeEle(e) {
        if(e.target.name === 'dec'){
            change((parseFloat(element.current.value)-.1).toFixed(2),index)
        }   
        else{ 
            if(e.target.name === 'inc'){

            // console.log((parseFloat(element.current.value)).toFixed(0))
            change((parseFloat(element.current.value)+.1).toFixed(2),index)
            }
            else { 
                
            }
        }
        
    }


    function handleChange(event) {
        // setValue( event.target.value);
        change( event.target.value,index)
      }

      // if you press delete or back space in the input the input will be empty
      // that might couse error i.e when you press increace of decrease 
      // the function below fills the input with zero in case it was empty
    function putzero(e)
      {
        e.target.value==='' && change(0,index)
      }

    return (
        <div className="inputNumber" style={style}>
            <button name='dec' className='inputNumber_btn' type="button" onClick={changeEle}>&minus;</button>
            <input ref={element}  className='inputNumber_input'  type='number' onBlur={putzero} onChange={handleChange}  value={initvalue} /> 
            <button name='inc' className='inputNumber_btn' type="button" onClick={changeEle}>&#43;</button>     
        </div>
      )
}

export default NumericInput
