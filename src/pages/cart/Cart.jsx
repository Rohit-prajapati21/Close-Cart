import sty from './cart.module.css'
import CartItem from '../../components/CartItem/CartItem'
function Cart() {
  return (
    <div className={sty.cart_container}>
      <div className={sty.left_section}>
      <div className={sty.heading}>
          <p>Items</p>
        </div>
      <div className={sty.items}>
         <CartItem/>
         <CartItem/>
         <CartItem/>
      </div>
      <div className={sty.order_btn}><button>PLACE ORDER</button></div>
      </div>

      <div className={sty.right_section}>
        <span className={sty.title}>Price Details</span>
        <hr />
        <div className={sty.price_box}>
          <span id={sty.pricebox_name}>Price</span>
          <span id={sty.pricebox_value}>42455</span>
        </div>
        <div className={sty.discount_box}>
        <span id={sty.discountbox_name}>Discount</span>
        <span id={sty.discountbox_value}>122</span>
        </div>
       <div className={sty.delevery_box}>
         <span id={sty.deleverybox_name} >Dilvery Charges</span>
         <span id={sty.deleverybox_value}>455</span>
       </div>
        <hr />
        <div className={sty.total_ammount}>
        <p>Total Ammount</p>
        <span>4544</span>
        </div>
      </div>
    </div>
  )
}

export default Cart