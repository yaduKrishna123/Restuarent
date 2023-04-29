import axios from 'axios'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ResHours({hours}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(hours);
// console.log((hours.hours['Monday']));
  return (
   <> {hours?(<div>
  


    



    
      <Button variant="primary" onClick={handleShow} className='ms-5'>
        Opening Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>operating Houres</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        
        <ul>
            <li>Monday : <span className='ms-3'></span> {hours.Monday}</li>
            <li>Tuesday  :<span className='ms-3'></span>{hours.Tuesday}</li>
            <li>Wednesday :<span className='ms-3'></span>{hours.Wednesday}</li>

            <li>Thursday :<span className='ms-3'></span>{hours.Thursday}</li>
            <li>Friday :<span className='ms-3'></span>{hours.Friday}</li>
            <li>Saturday :<span className='ms-3'></span>{hours.Saturday}</li>
            <li>Sunday :<span className='ms-3'></span>{hours.Sunday
}</li>

          </ul> 
           
         
        </Modal.Body>
  
      </Modal>
      

    </div>):''}
    </>
  )
}

export default ResHours