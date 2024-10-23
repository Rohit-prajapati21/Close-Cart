import sty from './item.module.css'
import Img from '../../assets/beetroot.jpg'
import { useState } from 'react'
function Item() {
  const[tab,setTab] = useState(true);

  return (
    <div className={sty.Item_container}>
    <img src={Img} alt=""  />
    <div className={sty.item_detail}>
      <span>Name:Beetroor</span>
      <span>Price:244</span>
    </div>
    <div className={sty.buttons_container}>
    {tab?(  <button className='btn btn-success'>go To Bag <i className="bi bi-bag-plus"></i></button>
):(  <button className='btn btn-warning'>add To Bag <i className="bi bi-bag-plus"></i></button>
)}
      
    </div>
    </div>
  )
}

export default Item