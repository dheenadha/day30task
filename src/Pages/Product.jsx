import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({setId}) => {
    const [data,setData]=useState([])
    const navig=useNavigate()
    const [del,setDel]=useState([])
    useEffect(()=>{
        fetchData()
    },[del])
    const fetchData=async()=>{

        await axios.get("https://665b12fe003609eda45fbe77.mockapi.io/api/users")
        .then(res=>setData(res.data))
        .catch(error=>console.log(error))
    }
    const handleEdit=(id)=>{
setId(id)
navig(`/edit/${id}`)
    }
    const handleDelete=async(id)=>{

await axios.delete(`https://665b12fe003609eda45fbe77.mockapi.io/api/users/${id}`)
.then(res=>setDel(res.data))
.catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="table-responsive">
  <table className="table  align-top">
    <thead>
      <tr>
      <th>S.No</th>

        <th>User Id</th>
        
        <th>Name</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Flat No</th>
        <th>Street</th>
        <th>City</th>
        <th>Website</th>
        <th>Company Name</th>
        <th>Company CatchPhrase</th>
        <th>Business</th>
        <th colSpan={2} className='text-center'>Actions</th>

      </tr>
    </thead>
    <tbody>
    {data.map((e,index)=>{
            return(
                <tr key={index}>
                <th scope='row'>{e.id}</th>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td className='word-wrap'>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.address?.suite}</td>
                <td>{e.address?.street}</td>
                <td>{e.address?.city}</td>

                <td>{e.website}</td>
                <td>{e.company?.companyname}</td>
                <td>{e.company?.catchPhrase}</td>
                <td>{e.company?.bs}</td>


                <td><button className='btn btn-info 'onClick={()=>{handleEdit(e.id)}}>edit</button></td>

                <td><button className='btn btn-primary ' onClick={()=>{handleDelete(e.id)}}>delete</button></td>

                </tr>
            )
           })}
    </tbody>
  </table>
<button className='btn btn-success m-4'onClick={()=>{navig('/create')}}>create</button>
</div>

      
        </div>
    );
};

export default Product;