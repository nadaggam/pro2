// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import { NavLink,useParams } from 'react-router-dom';
// import { Button, Card } from 'react-bootstrap'
// import '../Css/products.css'
// import { Form } from 'react-bootstrap/Form';
// import { useContext } from 'react';
// import { CartContext } from '../App';
// export function Products() {
//   const { addToCart } = useContext(CartContext);

//   //get id for admin
//   let isAdmin;
//   let userId = localStorage.getItem('user_id')
//   if(userId==1){
//    isAdmin=true;
//   }
//   else{
//     isAdmin=false;

//   }



//     //get products
//     let [products, setProducts] = useState([]);
//     let getAllProduct = async () => {
//         try {
//             let response = await axios.get("http://localhost:3005/products");
//             setProducts(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     useEffect(() => {
//         getAllProduct();
//     }, []);
//       // let decreaseQuantity = async (productId) => {
//       //   let updatedProducts = products.map((product) => {
//       //     if (product.id === productId && product.quantity > 0) {
//       //       return { ...product, quantity: product.quantity - 1 };
//       //     } else {
//       //       return product;
//       //     }
//       //   });
//       let decreaseQuantity = async (productId) => {
//         addToCart();
//         let updatedProducts = products.map((product) => {
//             if (product.id === productId && product.quantity > 0) {
//                 return { ...product, quantity: product.quantity - 1 };
//             } else if (product.id === productId && product.quantity === 0) {
//                 return { ...product, quantity: product.quantity = "Not Avaliable" };
//             } else if (product.id === productId && product.quantity === 1) {
//                 return { ...product, quantity: product.quantity = " Avaliable the last one" };
//             } else {
//                 return product;
//             }
//         });
//         setProducts(updatedProducts);
//         try {
//             await axios.put(`http://localhost:3005/products/${productId}`, { quantity: updatedProducts.find(product => product.id === productId).quantity });
//         } catch (error) {
//             console.log(error)
//         }
//     };
//       let deleteProduct = async (id) => {
//         try {
//             await axios.delete(`http://localhost:3005/products/${id}`);
//             setProducts(products.filter(product => product.id !== id));
//             // navigate('/products');
//         } catch (error) {
//             console.log(error);
//         }
//     };
    //      return (
    //     <div className='row' style={{marginTop:"30px"}}>
    //         {products.map((product) => (
              
    //             <div className='col-lg-2 col-sm-6 col-md-3' key={product.id}>
                  
    //                 <Card style={{ width: '15rem',height:"440px",textAlign:"left",marginLeft:"120px"}}>
    //                     <Card.Img className='pimg' style={{height:"50%"}} variant="top" src={product.productimg} />
    //                     <Card.Body>
    //                         <Card.Title >{product.productName}</Card.Title>
    //                         <Card.Text style={{marginBottom:"15px"}} > $
    //                             {product.productPrice}
    //                         </Card.Text>
    //                         <Card.Text style={{marginBottom:"15px"}}>
    //                            quantity : <p>
    //                             {product.quantity === 0 ? "Not Available" : product.quantity === 1 ? "Available the last one" : `Quantity: ${product.quantity}`}
    //                         </p>
    //                         </Card.Text >
    //                         <Button variant="primary" onClick={() => decreaseQuantity(product.id)} disabled={product.quantity === 0}>
    //                         {product.quantity === 0 ? "Sold out" : "Add Product"}
    //                         </Button>                           
                         
    //                        {isAdmin&&  <NavLink to = {`/Products/${product.id}/edit`}> <i className='fs-4 text-info mx-1 bi bi-pencil-square'></i></NavLink>}
    //                  <i className='fs-4 text-danger mx-1 bi bi-trash3-fill' onClick={() => deleteProduct(product.id)}></i>    

    //                  {isAdmin&&  <NavLink to = {`/Products/${product.id}`}><i className='fs-4 text-warning mx-1 bi bi-eye-fill'></i></NavLink>}
    //                          </Card.Body>
    //                 </Card>
                    
    //             </div>
                
    //         ))}
    //         <div>
    //              <NavLink  to={`/Products/0/edit`}><button>add</button></NavLink>
    //              </div>
    //     </div>
        
    // );
                          
//      } //f1 return
 //main fun

 import React from 'react'
 import { CardsSlider } from './CardsSlider'
 import '../Css/products2.css'
 import { Container } from 'react-bootstrap'
 import {NavLink} from 'react-router-dom'
//  import { products } from './productlist';
export function Products() {
  return (
    <div>
      <Container className="section_container d-flex justify-content-center align-content-center">
      <section claasName="section ">
        
          <div className="  " style={{ height: "75px", textalign: "center" }}>
            <h2 style={{textTransform:'uppercase'}}>Shine with your idea</h2>
          </div>
       <div
        className="para d-flex  justify-content-between "
        style={{ backgroundColor: "#F5F5F5" }} >
        
        <div className=" w-50 p-4">
          <h4 className="d-flex">Social impact</h4>
          <p style={{ color: "gray", fontSize: "12px", textAlign: "left" }}>
          We want to help build a society that’s fairer and more equal.
          <br /> To do this we will put people first and grow our business in an inclusive way.<br /> 
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/5849392/pexels-photo-5849392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            style={{ width: " 330px", height: "180px" }}
          />
        </div>
      </div>
      <header className=' second  'style={{ display: 'flex', justifyContent: 'space-between' }} >
    <div className='  w-75'>
    <div  style={{ display: 'flex' }}>
  <a className="btn  mx-2 d-flex"  style={{backgroundColor: "#f7f7f7",  borderRadius: "26px", border:"1.5px solid #f7f7f7"}} href="#" role="button">
   Kitchen
  </a>
  <a className="btn  mx-2 d-flex" style={{backgroundColor: "#f7f7f7", borderRadius: "26px", border:"1.5px solid #f7f7f7"}} href="#" role="button">
   Bath Room
  </a>
  <a className="btn  mx-2" style={{backgroundColor: "#f7f7f7", borderRadius: "26px", border:"1.5px solid #f7f7f7"}}href="#" role="button">
    Resiption
      </a>
  <a className="btn  mx-2" style={{backgroundColor: "#f7f7f7", borderRadius: "26px", border:"1.5px solid #f7f7f7"}} href="#" role="button">
    Living rooms
  </a>
  <a className="btn  mx-2"  style={{backgroundColor: "#f7f7f7", borderRadius: "26px", border:"1.5px solid #f7f7f7"}} href="#" role="button">
   Bed Rooms
  </a>
</div>
  <br></br>
    </div>
    <div className="btn w-25"style={{width:'150px',height:'40px',backgroundColor: "#f7f7f7" }}>
    <NavLink  to={`/Products/0/edit`}><button>add</button></NavLink>
    </div>
    </header>
    {/*  */}
    <div className="contianer  sider1  d-flex flex-wrap ">
        <div
          className="border-bottom border-2 border-secondary w-100 col-12"
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1 d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>sales</b>
              
            </p>
            
            
            </div>
           
          <img
            src=" https://i.pinimg.com/564x/28/fc/86/28fc867e84030e66493a1ab375bf582c.jpg"
            alt=""
            style={{ width: " 200px", height: "1500px" }} className='my-3'
          />
          
        </div>

       

        <div
          className="border-bottom border-2 border-secondary w-100 col-12 "
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1  d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>more about us </b>
            </p>
          </div>
          <div className="d-flex ">
            <p className="text-secondary">
            Delicious, healthy and sustainable food for the many
US, we believe that making healthier and more sustainable food the easy, affordable, 
and delicious choice is a vital part of creating a better everyday life for the many people.
Good for you and the planet
Our ambition is to become people and planet positive, and to inspire and enable the many people to live a better everyday life within the boundaries of the planet. With our food range we offer our customers
 healthier and more sustainable food options that can help reduce their climate footprint.
            </p>
          </div>
        </div>
      </div>
   
          <div className="cards">
           
            <CardsSlider></CardsSlider>
          </div>

           {/*  */}
        </section> 
        </Container>
    </div>
  )
}
