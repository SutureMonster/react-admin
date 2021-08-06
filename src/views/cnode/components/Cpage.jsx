import React, { useState } from 'react'

export default prpos => {
  const { value, onChange } = prpos

  const Pagenum = () => {
    const arr = [1, 2, 3, 4, 5]
    const brr = [value - 2, value - 1, value, value + 1, value + 2]
    return (
      <>
        {
          value > 3
            ?
            brr.map(ele => (<li key={ele} className={value === ele ? 'curr' : ''} onClick={() => onChange(ele)}>{ele}</li>))
            :
            arr.map(ele => (<li key={ele} className={value === ele ? 'curr' : ''} onClick={() => onChange(ele)}>{ele}</li>))
        }
      </>

    )
  }

  const prve = () => {
    if (value === 1) {
      return
    }
    onChange(value - 1)
  }
  return (
    <div>
      <ul className='page'>
        <li onClick={prve} style={{ cursor: value === 1 ? 'default' : 'pointer' }}>&lt;&lt;</li>
        {
          value > 3
          && <li>...</li>
        }
        <Pagenum />
        <li>...</li>
        <li onClick={() => onChange(value + 1)}>&gt;&gt;</li>
      </ul>
    </div>
  )
}