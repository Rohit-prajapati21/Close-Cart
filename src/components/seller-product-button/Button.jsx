import sty from './multipleComponent.module.css'
function Button() {
  return (
   <div className={sty.button_box}>
     <button className="btn btn-primary">Edit</button>
    <button className="btn btn-danger">Delete</button>

   

   </div>
  );
}
export function Unavailable() {
  return (
  <div>
    <span>Currently Unavailable</span>
  </div>
  );
}


export function Changes() {
  return (
<div className={sty.Changes_box}>
  <input type="text" placeholder="Enter Name"/>
  <input type="text" placeholder="Enter Price"/>
  <button className="btn btn-warning">Unavailable</button>

</div>
  );
}




export default Button;
