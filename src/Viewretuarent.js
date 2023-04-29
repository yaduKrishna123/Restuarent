import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Row ,Col,Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import ResHours from './ResHours';
import OpenHours from './OpenHours';




function Viewretuarent() {
  const {id}= useParams()
  const [resdata,setdata]=useState({})
  console.log(id);

  const getres=async ()=>{
    const alldata = await axios.get(`https://resturnt.onrender.com/restaurants/${id}`)
    setdata(alldata.data)
    console.log(resdata);
    console.log(alldata);
  }
 

  useEffect(()=>{
    getres()

  },[])
  
  
  
  
  
  return (
    <>
 { resdata?  ( <div>
   <Row>
      <Col lg={4}>
        <img src={resdata.photograph} style={{width:"100%;",height:"400px"}} alt="" />
      
      </Col>
      <Col>
      <ListGroup className='m-4'>

        <ListGroup.Item>
        
            <h1 className='text-center text-primary' style={{fontSize:"60px",letterSpacing:"2px"}}>{resdata.name}</h1>
            <p className="text-center text-warning">{resdata.neighborhood}</p>
            <h3 className="text-center">Cusine: {resdata.cuisine_type}</h3>
            <p className="text-center">Adress:  {resdata.address}</p>

         

        </ListGroup.Item>
        <ResHours hours={resdata.operating_hours}/>
     <OpenHours review={resdata.reviews}/>
      </ListGroup>
      
      </Col>
      <Col>
 
      </Col>

     </Row>
 

    

    </div>):''}
    </>
  )
}

export default Viewretuarent