import sty from './nav.module.css'
function Nav_bar() {
  return (
    <div className={sty.nav_bar}>
      <div><a href="">Fruit</a></div>
      <div><a href="">Grocery</a></div>
      <div><a href="">Vegetable</a></div>
      <div><a href="">Non_Veg</a></div>
      <div><a href="">Food</a></div>
      <div><a href="">Juice</a></div>

    </div>
  )
}

export default Nav_bar