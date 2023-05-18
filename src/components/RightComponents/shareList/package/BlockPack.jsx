import React, {  useState } from 'react'
import style from './BlockPack.module.css'

export default function BlockPack({count,price,villa}) {
    const [selected,setSelected] = useState(false);

  return (
    <div  onClick={()=>setSelected(!selected)} className={selected ? "packSel" : `${style.pack}`}>
        <div className={style.person}>
            <span>{count} person</span>
            <h3>{price}</h3>
        </div>
        <div className={style.private_txt}>
            <span>Private double room</span>
            <span>Total price</span>
        </div>
        <p>{villa}</p>
        <div className={style.btns}>
            <div className={selected ? 'selected' : `${style.btn}`}>Show Photos</div>
            <div className={selected ? 'selected' : `${style.btn}`}>Request to book</div>
        </div>
        <input  type="radio"  onClick={()=> setSelected(!selected)} checked={selected} className={'radio' }/>
    </div>
  )
}
