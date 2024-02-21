import React, { useState } from 'react'
import data from './data'
import './style.css'

const Accordion = () => {
    const [selected,setselected] = useState(null)
    const [enableMultiSelection,setEnableMultiSelection] = useState(false)
    const [multiple,setMultiple] = useState([])

    const handleSingleSelection = (getCurrentId) =>{
        setMultiple([])
        setselected(getCurrentId === selected? null:getCurrentId)
    }

    const handleMultiSelection = (getCurrentId) =>{
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId)

        findIndexOfCurrentId === -1 ? cpyMultiple.push(getCurrentId):cpyMultiple.splice(findIndexOfCurrentId,1)

        setMultiple(cpyMultiple)
    }

   
    console.log(selected,multiple)
  return (
    <div className='acc-wrapper'>
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className='accordion'>
            {
                data && data.length > 0 ? 
                data.map(dataItem =>(
                    <div key={dataItem.id} className='item'>
                        <div className='title' onClick={enableMultiSelection? () => handleMultiSelection(dataItem.id):() => handleSingleSelection(dataItem.id)}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection?
                            multiple.indexOf(dataItem.id) !== -1 && (<div className='acc-content'>{dataItem.answer}</div>)
                            : selected === dataItem.id && (<div className='acc-content'>{dataItem.answer}</div>)
                            
                        }
                        {/* {
                            selected === dataItem.id ?
                            <div className='acc-content'>{dataItem.answer}</div>:null
                        } */}
                    </div>
                ))
                :<div> No data found </div>
            }
        </div>
        
    </div>
  )
}

export default Accordion