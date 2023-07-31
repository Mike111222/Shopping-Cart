import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/Cart/cartSlice';
import CartContainer from "./Components/CartContainer";
import Navbar from "./Components/Navbar";
import { useEffect } from 'react';
import Modal from './Components/Modal'; 

function App() {
  const {cartItems, isLoading} = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(calculateTotals());
  }, [dispatch,cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  },[dispatch]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    {isOpen &&  <Modal /> }
   
    <CartContainer />
    </>
    
  )
}
export default App;
