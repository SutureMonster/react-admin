import React, { useState } from 'react'
import '../style.scss'
export default prpos => {
  console.log(prpos)
  let { data, value, onChange } = prpos
  console.log(data, value)
  return (
    <div className='filter'>
      {
        data.map(ele => (
          <span
            className={value === ele.tab ? 'curr' : ''}
            key={ele.id}
            onClick={() => onChange(ele.tab)}
          >
            {ele.label}
          </span>
        )
        )
      }
    </div>
  )
}