import sty from './product.module.css'
import Item from '../../components/products/Item'
function ShowProduct() {
  return (
    <div className={sty.product_container}>
      <div className={sty.search_box}>
        <input type="text" placeholder='search product'/>
        <div className={`${sty.icon} bg-warning`} ><i className="bi bi-search"></i></div>
      </div>

      <div className={sty.products}>
       <Item/>
       <Item/>
       <Item/>
       <Item/>
       <Item/>
       <Item/>
       <Item/>
       <Item/>
      </div>
    </div>
  )
}

export default ShowProduct