import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row ,Col,Card} from 'react-bootstrap'
import Rescard from './Rescard'



function Allresturnts() {
// state to hold all resyturants

const [allres,setallres]=useState([])



  useEffect(()=>{
getalldata()
  },[])

  const getalldata=async ()=>{
    const alldata=await axios.get('https://resturnt.onrender.com/restaurants')
    // console.log(alldata.data);
    setallres(alldata.data)
    console.log(allres);
  }

  return (
    <Row>

      {
        allres.map(data=>(

          <Col sm={12} md={4} lg={3} xl={3}>


          <Rescard items={data}/>
          
          
               </Col>
          
        ))
  
      }

    </Row>
   
    
    
  )
}

export default Allresturnts