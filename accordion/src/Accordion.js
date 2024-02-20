import React, { useState } from 'react'
import data from './data'

const Accordion = () => {
    const [selected,setSelected] = useState(null)
    const [enableMultiSelection,setMultiSelection] = useState(false)
    const [multiple,setMultiple] = useState([])

    const handleSingleSelection = (getCurrentId) =>{
        console.log(getCurrentId)
        setSelected(getCurrentId === selected? null : getCurrentId)
    }

    const handleMultiSelection = (getCurrentId) =>{
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId)
        findIndexOfCurrentId === -1 ? cpyMultiple.push(getCurrentId):cpyMultiple.splice(findIndexOfCurrentId,1)

        setMultiple(cpyMultiple)
        console.log(cpyMultiple)
    }

  return (
    <div className='acc-wrapper'>
        <button onClick={() =>setMultiSelection(!enableMultiSelection)}>
            Enable MultiSelection
        </button>
        <div className='accordion'>
            {
                data.map(dataItem => (
                    <div key={dataItem.id} onClick={enableMultiSelection?() => handleMultiSelection(dataItem.id):()=> handleSingleSelection(dataItem.id)}>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                        <div>
                         
                            {selected === dataItem.id? <div>
                            {dataItem.answer}
                            </div>: null
                            }</div>
                    </div>
                    

                ))
            }
        </div>
        
    </div>
  )
}

export default Accordion