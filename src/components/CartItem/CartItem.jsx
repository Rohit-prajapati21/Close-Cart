import sty from "./cartItem.module.css";
import Img from "../../assets/beetroot.jpg";
function CartItem() {
  return (
    <>
    <div className={sty.cartItem_container}>
      <img src={Img} alt="" />
      <div className={sty.detail_container}>
        <div className={sty.item_name}>
          <span id={sty.name}>Name:</span>
          <span id={sty.name_value}>Beetrrot</span>
        </div>
        <div className={sty.item_price}>
          <span id={sty.price}>Price:</span>
          <span id={sty.price_value}>277</span>
        </div>
        <div className={sty.item_btns}>
          <button className="btn btn-danger">Remove</button>
          <button className="btn btn-warning" id={sty.buy_bt}>
            Buy
          </button>
        </div>
      </div>
    </div>
  
    </>
  );
}

export default CartItem;
