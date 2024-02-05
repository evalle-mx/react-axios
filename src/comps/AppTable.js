import React, { useState, useEffect} from 'react'
import DataTable from "react-data-table-component";
import axios from 'axios';

function AppTable() {
    const columns = [
        { 
            name: 'Id', selector: row => row.id, sortable: true
        },
        { 
            name: 'Name', selector: row => row.name, sortable: true
        },
        { 
            name: 'Price', selector: row => row.price, sortable: true
        },
    ];
    const data = [
        {
            "id": "1",
            "name": "headphones",
            "price": 3.99
          },
          {
            "id": "2",
            "name": "Mouse",
            "price": 2.99
          },
          {
            "id": "19",
            "name": "Keyboard",
            "price": 7.99
          },
          {
            "id": "28",
            "name": "Monitor",
            "price": 4.99
          }
    ];
    const [products, setProducts] = useState( data );

    function handleFilter(event){
        const filterProducts = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setProducts(filterProducts)
    }
  return (
    <div className='container mt-5'>
        <div className='text-end'><input type="text" onChange={handleFilter}
        className="form-control" name="filter" id="filter" aria-describedby="helpId" placeholder=""/></div>
        <DataTable columns={columns} data={products} 
            selectableRows fixedHeader pagination></DataTable>
    </div>
  )
}

export default AppTable