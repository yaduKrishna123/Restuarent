import React from 'react'
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function OpenHours({review}) {
    const [open,setOpen]=useState(false)
  return (
    <>
    <div className="">
      
 <Button className='ms-5 mt-3'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Ratings
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        {
          review?.map(item=>(
            <div className="">
              <h6 className='ms-4' style={{color:'red',fontSize:'40px'}}>{item.name }  <span className='ms-5'>{item.date}</span></h6>
              <p style={{color:'yellow'}}>Rating: {item.rating}</p>
              <p style={{textAlign:'justify',color:'pink'}}><span style={{fontSize:'40px'}}>comments:</span> {item.comments}</p>
            </div>

          ))
        }
        </div>
      </Collapse>
     
    </div>
    
    </>
  )
}

export default OpenHours