import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function Rescard({ items }) {
  return (


    <>
    
    
    
    
    
 {
    
    <Link style={{textDecoration:'none'}} to={`/view-resturent/${items.id}`}>
           <Card style={{ width: "18rem",margin:"16px" }}>
       <Card.Img style={{height:"20rem"}}
           variant="top"
           src={items.photograph} />
       <Card.Body>
           <Card.Title>{items.name}</Card.Title>
           <Card.Text>
               <p>cusine :{items.cuisine_type}</p>
               <p>Neighborhood: {items.neighborhood}</p>
           </Card.Text>
       </Card.Body>
   </Card>
    
    
    </Link>



 }

</>






   
  
  
  
  
  
  );
}

export default Rescard;
