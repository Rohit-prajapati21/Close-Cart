import sty from './productForm.module.css'
function ProductForm() {
  return (
    <div className={sty.Productform_container}>
     <form action="">
      <div>
        <label htmlFor="">productName</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">productPrice</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">imageUrl</label>
        <input type="file" id={sty.imgInput}/>
      </div>
      <button className='btn btn-primary'>Add</button>
     </form>
    </div>
  )
}

export default ProductForm