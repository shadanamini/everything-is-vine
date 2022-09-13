import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateQuantityFromShoppingCart } from './store/cartReducer';
import { useState, useEffect } from 'react';




function ShoppingCartTest(){
  const { cartItems } = useSelector((state) => state.cart);
    const [cust_quantity, setCustQuantity] = useState(-1)
    const [index_state, setIndex] = useState(-1)
    const [firstRender, hasRendered] = useState(true)
    const dispatch = useDispatch();
  

    async function deleteItem(e, index) {
      dispatch(deleteCartItem({"index": index}))
      }
  
  
    async function checkAndSetQuantity(e, index){
        // bug to fix: unable to change quantity input in front end without highlighting number
        if(parseInt(e.target.value) < 1 || isNaN(parseInt(e.target.value))){
          e.target.value = 1;
        }
        if(parseInt(e.target.value) > parseInt(e.target.max)){
          e.target.value = e.target.max;
        }
        setCustQuantity(parseInt(e.target.value))
        setIndex(index)
      }
  
    // async function orderPlaced(e) {
    //   dispatch(clearCart())
    // }
  
  
    useEffect(() => {
      if (firstRender === true) {
        hasRendered(false)
      } 
      else {
      let data = {"cust_quantity": cust_quantity, "index": index_state}
      dispatch(updateQuantityFromShoppingCart(data)) 
      }
   
    }, [cust_quantity, index_state, dispatch, firstRender]);



  return (
    <div className="App">
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-4">
                <a href="https://www.duckduckgo.com/">Company Name</a>
              </div>
              {/* <div className="col-lg-6 col-sm-12">
                <form action="#" className="search">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div> */}
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header  mr-3">
                    <a href="https://www.duckduckgo.com/" className="icon icon-sm rounded-circle border">
                      <i className="fa fa-shopping-cart" />
                    </a>
                    <span className="badge badge-pill badge-danger notify">
                      {cartItems.length}
                    </span>
                  </div>
                  <div className="widget-header icontext">
                    <a href="https://www.duckduckgo.com/" className="icon icon-sm rounded-circle border">
                      <i className="fa fa-user" />
                    </a>
                    <div className="text">
                      <span className="text-muted">Welcome!</span>
                      <div>
                        <a href="https://www.duckduckgo.com/">Sign in</a> |<a href="https://www.duckduckgo.com/">Register</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Shopping cart</h2>
        </div>
      </section>
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <main className="col-md-9">
              <div className="card">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width={120}>
                        Quantity
                      </th>
                      <th scope="col" width={120}>
                        Price
                      </th>
                      <th scope="col" className="text-right" width={200}>
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((cartItem, index) => {
                    return (
                      <tr key={ cartItem.id }>
                        <td>
                          <figure className="itemside">
                            <div className="aside">
                              <img
                                alt=""
                                src={ cartItem.picture_url }
                                className="img-sm"
                              />
                            </div>
                            <figcaption className="info">
                              <a href="https://www.duckduckgo.com/" className="title text-dark">
                                {cartItem.year} {cartItem.brand} {cartItem.varietal}
                              </a>
                              <p className="text-muted small">
                                Region: {cartItem.region} <br /> ABV: {cartItem.abv}%
                              </p>
                            </figcaption>
                          </figure>
                        </td>
                        <td> <input onChange = {e => checkAndSetQuantity(e,index)} type="text" id={index} name="quantity" className="form-control" value={cartItem.cust_quantity} min="1" max={cartItem.quantity} /> </td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">${cartItem.cust_quantity * cartItem.price}</var>
                            <small className="text-muted"> ${cartItem.price} each </small>
                          </div>
                        </td>
                        <td className="text-right">
                          <button onClick = {e => deleteItem(e,index)} type="button" className="btn btn-light"><span className="bi bi-trash"></span> Remove</button>
                        </td>
                      </tr>
                      );
                    })}
                  </tbody>



                </table>
                <div className="card-body border-top">
                  <a href="https://www.duckduckgo.com/" className="btn btn-primary float-md-right">
                    {" "}
                    Make Purchase <i className="fa fa-chevron-right" />{" "}
                  </a>
                  <a href="https://www.duckduckgo.com/" className="btn btn-light">
                    {" "}
                    <i className="fa fa-chevron-left" /> Continue shopping{" "}
                  </a>
                </div>
              </div>
              <div className="alert alert-success mt-3">
                <p className="icontext">
                  <i className="icon text-success fa fa-truck" /> Free Delivery
                  within 1-2 weeks
                </p>
              </div>
            </main>
            <aside className="col-md-3">
              <div className="card mb-3">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          placeholder="Coupon code"
                        />
                        <span className="input-group-append">
                          <button className="btn btn-primary">Apply</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right">USD 568</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right">USD 658</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right  h5">
                      <strong>$1,650</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center mb-3">
                    <img src="/assets/images/misc/payments.png" alt="" height={26} />
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="section-name bg padding-y">
        <div className="container">
          <h6>Payment and refund policy</h6>
        </div>
      </section>
      <footer className="section-footer border-top padding-y">
      </footer>
    </div>
    );

    
  
  
    
  // return(
  //     <>
      
  //         <table className="table table-hover">
  //             <thead>
  //                 <tr>
  //                 <th>Shopping Cart</th>
  //                 <th>Wine</th>
  //                 <th>Quantity</th>
  //                 <th>Price</th>
  //                 <th>Total Price</th>
  //                 <th>Delete</th>
  //                 </tr>
  //             </thead>
  //             <tbody className="table-group-divider">
  //                     {cartItems.map((cartItem, index) => {
  //                     return (
  //                         <tr key={ cartItem.id }>
  //                           <td><img
  //                         className="mx-auto img-thumbnail"
  //                         src={ cartItem.picture_url }/></td>
  //                           <td>Index {index}</td>
  //                           <td>{cartItem.year} {cartItem.brand} {cartItem.varietal}</td>
  //                           <td>${cartItem.price} </td>
  //                           <td> ${cartItem.cust_quantity * cartItem.price}</td>
  //                           <td> <input onChange = {e => checkAndSetQuantity(e,index)} type="text" id={index} name="quantity" className="form-control input-number" value={cartItem.cust_quantity} min="1" max={cartItem.quantity} /> </td>
  //                           <td> <button onClick = {e => deleteItem(e,index)} type="button" className="btn btn-primary"><span className="bi bi-trash"></span> Delete</button> </td>
  //                           <td> <button onClick = {orderPlaced} type="button" className="btn btn-primary"><span className="bi bi-trash"></span> Clear Cart</button> </td>
  //                             {/* <td> { currentDataObj.item.year/brand/varietal } </td>
  //                             <td> { currentDataObj.item.cust_quantity } </td>
  //                             // input element?: put cust_quantity as the placeholder?
  //                             // buttons to increment up and down? left and right?
  //                             <td> { dataObj.item.price } </td> */}
  //                           </tr>
  //                     );
  //                 })}
  //             </tbody>
  //         </table>            
  //     </>
  // )
  // };
}

export default ShoppingCartTest;

