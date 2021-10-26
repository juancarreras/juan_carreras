import { UseCart } from "../../context/CartContext";

function ShoppingCart() {
    const { cart } = UseCart();
    let itemCount = 0;

    {
        cart?.map((item) => {
            itemCount += item.qty;
        })
    };

    return (
        <div>
            {itemCount === 0 && (<div className="cart-badge"><span id="cart-count"><i className="fas fa-shopping-cart"></i></span></div>)}
            {itemCount > 0 && (
                <div className="cart-badge"> 
                    <span className="d-flex flex-row">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="itemCount">
                            <h6 className="number">{itemCount}</h6>
                        </span>
                    </span>
                </div>

            )}

        </div>
    )
};

export default ShoppingCart;
