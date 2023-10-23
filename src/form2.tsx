import React from 'react'

function Form2(props:any) {
    const{
        pdfRef
    }=props

  return (
    <div ref = {pdfRef} style={{visibility:"hidden"}} >
        <h1>Abhay Pratap Singh</h1>
    </div>
  )
}

export default Form2