import React from 'react'

import Alert from 'react-bootstrap/Alert';
let alert=[
       'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',];
const AlertExample = () => {
  return (
  <>
	<div>Alert</div>
	
      {
        alert.map((color) => {
          return (
          <div style={{margin:'2rem'}}>
            <Alert variant={color} key={color}>
              <Alert.Heading style={{color:'yellowGreen'}}>Hi I Am Arun</Alert.Heading>
              this an example of {color} alert
              <Alert.Link
                href="https://github.com/arunkumar201"
                target="_blank"
              >
                Go to My Website
              </Alert.Link>
            </Alert>
          </div>
          );
	   
        })
      }
	
  
  
  </>
	
  )
}

export default AlertExample
