import Item from "./Item"
import sty from './products.module.css'
function Products() {
  return (
   <div className={sty.products_container}>
     <Item />
     <Item />
     <Item />
     <Item />
     <Item />
     <Item />
     <Item />

   </div>
  )
}

export default Products