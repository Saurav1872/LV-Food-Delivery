// import React from "react";
// import logo from '../image/logo2.png'
// import cartimg from '../image/cart.jpg'
// import '../header/header.css'
// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

// function Header(){
//     const {cartTotalQUantity}=useSelector((state)=>state.cart)
//     let history=useHistory()
//     function AddCart(){
//         history.push('/cart')
//     }
//     function Profile(){
//         history.push('/profile')
//     }
//     function gotoHome(){
//         history.push('/home')
//     }
//     function Logout(){
//         history.push('login')
//     }
//     return(
//         <div className="header">
//             <img src={logo} className='logo'></img>
//             <div><input type='text' className="search-input"/><button >Search</button></div>

//             <div style={{position:'relative',width:'100px'}}><button className="cart-button" onClick={AddCart}><img  src={cartimg}></img></button>
//             <span className="msg"> {cartTotalQUantity}</span></div>
//              {' '}
//             <button className="cart-button" ><p style={{color:"white",marginTop:'12px'}} onClick={gotoHome}>Home</p></button>
//             <button className="cart-button"  ><p style={{color:"white",marginTop:'12px'}} onClick={Profile}>Profile</p></button>  
//             <button className="cart-button"  ><p style={{color:"white",marginTop:'12px'}} onClick={Logout}>Log out</p></button>  
//         </div>
//     )
// }

// export default Header


import React from "react";
import logo from '../image/logo2.png';
import cartimg from '../image/cart.jpg';
import '../header/header.css';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Header() {
    const { cartTotalQUantity } = useSelector((state) => state.cart);
    const history = useHistory();

    const AddCart = () => history.push('/cart');
    const Profile = () => history.push('/profile');
    const gotoHome = () => history.push('/home');
    const Logout = () => history.push('/login');

    return (
        <div className="header">
            <img src={logo} className="logo" alt="Logo" />
            <div>
                <input type="text" className="search-input" placeholder="Search..." />
                <button>Search</button>
            </div>
            <div style={{ position: 'relative', width: '100px' }}>
                <button className="cart-button" onClick={AddCart}>
                    <img src={cartimg} alt="Cart" />
                </button>
                <span className="msg">{cartTotalQUantity}</span>
            </div>
            <button className="cart-button" onClick={gotoHome}>
                <p>Home</p>
            </button>
            <button className="cart-button" onClick={Profile}>
                <p>Profile</p>
            </button>
            <button className="cart-button" onClick={Logout}>
                <p>Log out</p>
            </button>
        </div>
    );
}

export default Header;
