import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Container from '../../components/common/Container';
import CartList from '../../components/cart/CartList';
import { IState } from '../../redux/ducks/index';
import { ThunkDispatch } from 'redux-thunk';
import { IProduct } from '../../Interfaces/ProductsInterfaces';
import { getRemoveProductThunk } from '../../redux/ducks/CartDuck';

function Cart(props: ReduxType & RouteComponentProps) {
    const { products, total, removeProductThunk } = props;

    const removeProduct = (product: IProduct) => {
        console.log("dale");
        removeProductThunk(product);
    }

    console.log(products);
    return(
        <Container>
            <CartList products={products} total={total} removeProduct={removeProduct} />
        </Container>
    );
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: IState) => {
    const { cart: { products, total } } = state;
    return {
        products,
        total
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    removeProductThunk: (payload: IProduct) => dispatch(getRemoveProductThunk(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);