import React from 'react'



function ShoppingCartTest(){



    async function someEventName(e){
        // bug to fix: unable to change quantity input in front end without highlighting number
        if(parseInt(e.target.value) < 1 || isNaN(parseInt(e.target.value))){
          e.target.value = 1;
        }
        if(parseInt(e.target.value) > parseInt(e.target.max)){
          e.target.value = e.target.max;
        }
      someEventName(parseInt(e.target.value))
    }





    return(
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th>Shopping Cart</th>
                    <th>Wine</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">


                    {/* FOR-LOOP OVER SHOPPINGCART ARRAY AND DISPLAY EACH SHOPPING ITEM OBJ : [ {}, {}, {}, {}, {}, etc... ]
                        {this.state.ShoppingCartArray.map(currentDataObj => {
                        return (
                            <tr key={ currentDataObj.uniquekeyLIKE(import_href) }>
                                <td> { currentDataObj.item.picure_url } </td>
                                <td> { currentDataObj.item.year/brand/varietal } </td>
                                <td> { currentDataObj.item.cust_quantity } </td>
                                // input element?: put cust_quantity as the placeholder?
                                // buttons to increment up and down? left and right?
                                <td> { dataObj.item.price } </td>
                            </tr>
                        );
                    })} */}


                    <tr>
                        <td>
                            <img
                            className="mx-auto img-thumbnail"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3liyH9npeP69X4F7DphTeHf3iDpLV82b6U7nspVFASgL5_CNFXhTy-YOVjCawCIJUZs4&usqp=CAU"
                            />
                        </td>

                        <td> Year/Brand/Varietal </td>

                        <td> 
                            <input onChange = {someEventName} 
                            // value={quantity} max={data.quantity}
                            type="text" id="quantity" name="quantity" className="form-control input-number" />
                        </td>

                        <td>
                            $ Price
                        </td>                                                
                    </tr>




                    <tr>
                        <td>
                        <img
                            className="mx-auto img-thumbnail"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3liyH9npeP69X4F7DphTeHf3iDpLV82b6U7nspVFASgL5_CNFXhTy-YOVjCawCIJUZs4&usqp=CAU"
                            />
                        </td>

                        <td> Year/Brand/Varietal </td>

                        <td> 
                            Button 
                        </td>

                        <td>
                            $ Price
                        </td>                                                
                    </tr>






                    <tr>
                        <td>
                            <img
                            className="rounded mx-auto img-thumbnail"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3liyH9npeP69X4F7DphTeHf3iDpLV82b6U7nspVFASgL5_CNFXhTy-YOVjCawCIJUZs4&usqp=CAU"
                            />
                        </td>

                        <td> Year/Brand/Varietal </td>

                        <td> 
                            Button 
                        </td>

                        <td>
                            $ Price
                        </td>                                                
                    </tr>






                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {/* Calculate the total for shopping cart */}
                            <p>TOTAL: $ PRICE</p>
                            <button placeholder="onChange = {someOtherEventName}" href="#" className="btn btn-info btn-lg">
                            <span className="glyphicon glyphicon-shopping-cart"></span> Checkout
                            </button>
                        </td>                                                
                    </tr>



                </tbody>
            </table>            
        </>
    )
};
export default ShoppingCartTest;
