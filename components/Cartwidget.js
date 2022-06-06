import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const CartWidget = ()  => {
    return (
      <>
         <div className='logoCarrito'> 
            <div className='numeroCarrito'>
              6
            </div>
          <i className="bi bi-cart"></i>
        </div> 
      </>       
    );
  }

  export default CartWidget;