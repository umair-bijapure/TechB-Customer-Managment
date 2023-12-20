'use client';
import React, { ReactNode, useEffect, useState } from 'react';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

import { faIdCard, faPhone, faUser, } from '@fortawesome/free-solid-svg-icons';
import { CommonSpinner, DangerNotification, SuccessNotification } from '../../components/common/notifications';
import axios from 'axios';

import { FaArrowLeft } from 'react-icons/fa';
import { CommonIconInput } from '../../components/common/inputs';
import { CommonButtonSolidBlue } from '../../components/common/buttons';


function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

interface AddCustomerProps {
  onClick:()=>void,
  onCustomerAdd: (id: string)  => void
}

  export const AddCustomer: React.FC<AddCustomerProps> = ({onClick , onCustomerAdd}) => {

    const [fileData, setFileData] = useState<any>('');
    const [showLoader, setShowLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');

    const [name, setName] = useState('');

    const [customer_number, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [meter_serial_number, setMeterSerialNo] = useState('');

  
    const formSubmitHandler = async (e: any) => {
      e.preventDefault();
      setShowLoader(true);
      setErrorMessage('');
      setMessage('');

      if (name.length == 0) {
        setErrorMessage('Name is Required');
        return;
      }

      if (customer_number.length == 0 ) {
        setErrorMessage('Contact Number is Required');
        setShowLoader(false);
        return;
      }
      if (customer_number.length != 10 ) {
        setErrorMessage('Phone No is Invalid!');
        setShowLoader(false);
        return;
      }
      if (address.length < 6 ) {
        setErrorMessage('Please Enter the Full Address');
        setShowLoader(false);
        return;
      }
      if (meter_serial_number.length ==0 ) {
        setErrorMessage('Meter Serial Number is Required.');
        setShowLoader(false);
        return;
      }
    
      const body = {
        name,
        customer_number,
        meter_serial_number,
        address,
        // Include the CSRF token in the payload
      };
      // fetch('http://localhost:8000/create/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-CSRFToken': csrftoken,  // <-- Use the dynamically obtained CSRF token
      //   },
      //   body: JSON.stringify(body),
      //   credentials: 'omit',
      // })
      axios
      .post('http://127.0.0.1:8000/create/', body, {
        headers: {
          'Content-Type': 'application/json',
         
        },
      })
      .then((response) => {
        const data = response.data;
        const token = data['message'];
        setMessage(token)
        setShowLoader(false);
        // onCustomerAdd(name);
      
        return;
      })
      .catch((e: any) => {
        setShowLoader(false);
      
        if (e.response && e.response.data && e.response.data.message) {
          setErrorMessage(e.response.data.message);
        } else {
          // If there is no specific error message in the response, handle it accordingly
          setErrorMessage('An error occurred. Please try again.');
        }
      });
    }



    useEffect(() => {
      if (message.length > 0) {
        setErrorMessage('');
      }
      if (errorMessage.length > 0) {
        setMessage('');
      }
    }, [message, errorMessage]); 
function reload(){
  window.location.reload();
}
    
  return (
    
    <div className="sm:border-2  sm:rounded-md sm:shadow-md mt-2 shadow-2xl">
      <div className='' onClick={reload}>
            <div className=" text-[18px] shadow-md rounded-full m-4 p-4 w-16 text-[color:var(--mainTitleLightColor)] hover:from-green-500 hover:to-green-400  hover:ring-2 hover:ring-offset-2 hover:ring-gray-200 transition-all ease-out duration-300" onClick={onClick}>
              <FaArrowLeft />
            </div></div>
          
        {errorMessage.length > 0 ? 
            
          <DangerNotification message={errorMessage}  />
          : <></>}
                {message.length > 0 ? 

                
          <SuccessNotification  message={message} />
          : <></>}

          {showLoader ? <div className='mx-auto flex flex-col align-middle items-center mt-[-20px] justify-center'>
              <CommonSpinner/>
        </div> : <></>}
      <form className='my-2 mx-auto text-center shadow-md ' onSubmit={formSubmitHandler}>
  
        <div className='flex items-center justify-center'>
          
              <div className='grid grid-cols-1 sm:grid-cols-2 p-2 '>

                <div className='col-span-1 p-2'>
                <CommonIconInput
                      id="Name"
                      icon={faUser}
                      required={true} 
                    
                      placeholder='Name'
                      onChange={(e) => {
                      setName(e.target.value);
                      }} 
                      />
                  </div>


              <div className="col-span-6 sm:col-span-3 p-1 sm:p-2">
                  <CommonIconInput  
                      id="contact"
                    
                    
                      icon={faPhone}
                      required={true} 
                      placeholder='Phone Number'
                      onChange={(e) => {
                          setPhoneNo(e.target.value)
                          
                      }}
                  />
              </div>
              <div className="col-span-6 sm:col-span-3 p-1 sm:p-2">
                  <CommonIconInput  
                      id="address"
                      
                      
                      icon={faIdCard}
                      required={true} 
                    
                      placeholder='Address'
                      onChange={(e) =>
                        setAddress(e.target.value)
                      }
                  />
              </div>
              <div className="col-span-6 sm:col-span-3 p-1 sm:p-2">
                  <CommonIconInput  
                      id="meter_serial_no"
                    
                      icon={faIdCard}
                      required={true} 
              
                      placeholder='Meter Serial Number'
                      onChange={(e) =>
                        setMeterSerialNo(e.target.value)
                      }
                  />
              </div>
              </div>     
              
          </div>

          <div className='sm:mt-6'>
              <CommonButtonSolidBlue text={'Add Customer'}/>
          </div>

      </form>
      </div>

    );
  }


