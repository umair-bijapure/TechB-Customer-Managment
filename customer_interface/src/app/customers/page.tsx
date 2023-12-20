'use client';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { CommonGridRows } from '../components/grids';

// import { CircularButton, CommonAddButton } from '@/app/components/common/buttons';

import { AddCustomer } from './addUser/page';
import { CommonSectionTitle } from '../components/common/bannersAndheadings';
import { CommonAddButton, CommonButtonSolidBlue } from '../components/common/buttons';
import axios from 'axios';

export default function DashboardPage({

}: {
}) {
  
  const [showForm,setShowForm]=useState(false);

  const [customers, setCustomers] = useState([]);
 
  // const [employees, setEmployees] = useState<any>([]);

  const getData = async () => {
    try {
     
      const response = await axios.get('http://127.0.0.1:8000/get/' ); // Use the correct URL for your Django get operation
      const respData = response.data;
      
      setCustomers(respData);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors as needed
    }
  };
  
  useEffect(() => {
    getData();
  }, []);
  const onCustomerAdd= async (id:string) => {
  
    const response = await axios.get(`http://127.0.0.1:8000/get/${id}`);
    const respData = response.data;
    setCustomers((prevData:any)=>[...prevData,...respData])
    getData(); 
  };

  const handleDeleteAllCustomers = async () => {
    try {
      
      const response = await axios.delete(`http://127.0.0.1:8000/deleteall`);
  
    
      console.log(response.data.message);
  
    
    } catch (error) {
     
      console.error('Error deleting all customers:', error);
    }
  };
 

  return (
    <div className='flex-col w-screen sm:w-full bg-white rounded-t-2xl h-screen no-scrollbar p-10 '> 
    <CommonButtonSolidBlue text={"Delete All Customers"} onClick={handleDeleteAllCustomers}/>
     {showForm && (<AddCustomer onCustomerAdd={(id:string)=>onCustomerAdd(id)}  onClick={()=>setShowForm(false)}/>)}   
     {!showForm &&
     <div>  
      <div>
        <div className=' flex justify-between items-center bg-[color:var(--lightBackgroundGreyColor)] rounded-t-2xl'  >         
            <CommonSectionTitle title="ALL CUSTOMERS" titleColor={""} fontSize={""}/>
            <div className='' onClick={()=>setShowForm(true)}>
              <CommonAddButton
                      icon="/default-user-profile.png"
                      
                      color="color:var(--mainTitleColor)" // Add your desired color here
                      title=""
                      width={20}
                      height={20}
                      className=''
                     
              />
              </div>
        </div>

        </div>  
       
        {customers.length!=0 ?
        <div className='text-[color:var(--mainTitleColor)] mb-16 p-2 no-scrollbar '>  
          <CommonGridRows rows={1} columns={4} items={customers} />
        </div>:
        <div className='flex item-center justify-center p-4 text-xl m-10 '><p className=''>No Customer to display</p></div>}
         </div>}
    </div>
  );
};


