import { useLocation } from 'react-router-dom';

function Cart() {
    const location = useLocation();
    return (
        <div>
            {location.state?.data}
            <div>Hello</div>
        </div>
    );
}

export default Cart;
