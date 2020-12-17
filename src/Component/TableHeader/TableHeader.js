import React from 'react';
import {header} from '../../Data/table'
import './TableHeader.css'

const TableHeader=()=>{
  return(
    <div className='table-header'>
      {header.map(i=><div className='card-elements'>{i.column}</div>)}
    </div>

  )
}
export default TableHeader