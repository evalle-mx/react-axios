import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"; 
import { API } from './props/constant'

function App() {
  const [columns, setColums] = useState([])
  const [records, setRecords] = useState([])
  const navigate = useNavigate();

  useEffect( () => {
    axios.get(API)  // axios.get('http://localhost:3030/users')
    .then((res) => {
      console.log(res);
      setColums(Object.keys(res.data[0]))
      setRecords(res.data)
    }).catch((err) => {
      console.error(err);
    });
  })
  return (
    <div className="container mt-5">
      <div className="text-end"><Link to="/create" className="btn btn-primary">Add +</Link></div>
      <table className="table">
        <thead>
          <tr>
          { columns.map( (c, i)=>(
            <th key={i}> {c}</th>
          ))}
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map( (d,i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <Link to={`/update/${d.id}`} className="btn btn-sm btn-success">Update</Link>
                  <button onClick={e=>handleSubmit(d.id)} className="btn btn-sm ms-1 btn-danger">Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );

  function handleSubmit(id){
    const confDel = window.confirm("Do you want to delete??");
    if(confDel){
      axios.delete(API+id)  // axios.delete('http://localhost:3030/users/'+id)
      .then((res) => {
        alert('record Deleted');
        navigate('/');
      }).catch((err) => {
        console.error(err);
      });
    }
  }
}

export default App;
