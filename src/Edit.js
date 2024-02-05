import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom"; 
import {API} from './props/constant'

function Edit() {
    const {id} = useParams();  
    const navigate = useNavigate();

    const [data, setData] = useState( [] )
    
    useEffect( () => {
        axios.get(API+id)  // axios.get('http://localhost:3030/users/'+id)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.error(err);
        });
    }, [])

    function handleSubmit(event){
        event.preventDefault();
        axios.put(API+id, data)  // axios.put('http://localhost:3030/users/'+id, data)
        .then((res) => {
            alert('Data Updated successfully! ');
            navigate('/');
        })
        .catch((err) => {
            console.error(err);
        });
    }
  return (
    <div className='d-flex w-100 h-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='id'>ID: </label>
                    <input type='text' disabled name='id' value={data.id} className='form-control' 
                    />
                </div>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' value={data.name} className='form-control' 
                    onChange={ e => setData({...data, name:e.target.value})} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' value={data.email} className='form-control' 
                     onChange={ e => setData( {...data, email:e.target.value})} />
                </div>
                <br/>
                <button className='btn btn-info btn-sm'>Update</button>
                <Link type="button" className="btn btn-secondary btn-sm ms-1 " to={'/'}>Cancelar</Link>
            </form>
        </div>
    </div>
  )
}

export default Edit