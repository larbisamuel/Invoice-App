
import React, { useState } from 'react';
import { BsSearch, BsPlus } from 'react-icons/bs'; // Importing the search icon from react-icons
import "./Table.css"

const Table: React.FC = () => {
    return (
        <div className='mt-2 p-3 container shadow-lg'>
            {/* <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <button className='btn ' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Logout</button>
            </div> */}
             <div className=' d-md-flex justify-content-md-end'>
                <button className='btn ' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Logout</button>
            </div>
            <div className='mt-3'>
                <div className="input-group">
                    <span className="input-group-text"><BsSearch /></span> {/* Adding the search icon */}
                    <input type="text" className="form-control" style={{ maxWidth: '160px' }} placeholder="Search item" />
                    <button className='btn  ms-6 rounded-2 ' style={{ backgroundColor: '#110f0f', color: 'white' }}>Search</button>
                </div>
                <div className='mt-3'>
                    <div className='input-group'>
                    <button className='btn btn-outline-primary mt-5 ms-6 rounded-2 shadow-lg' >
                        Add Item
                        <BsPlus className="ms-2" />
                    </button>
                    
                    </div>
                </div>
                

            </div>
            <div className="table-responsive container_1 shadow-lg rounded mt-4 mb-4">
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">ITEM NAME</th>
                            <th scope="col">ACTUAL QTY(pcs)</th>
                            <th scope="col">RECEIVED QTY(pcs)</th>
                            <th scope="col">REMAINING STOCK</th>
                            <th scope="col" colSpan={2} className="text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">Black bond</td>
                            <td>1000</td>
                            <td>4000</td>
                            <td>3000</td>
                            <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit</button></td>
                            <td className="text-center"><button className='btn btn-danger px-3'>Delete</button></td>
                        </tr>
                        <tr>
                            <td scope="row">Deep brown bond</td>
                            <td>2000</td>
                            <td>1000</td>
                            <td>1000</td>
                            <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit</button></td>
                            <td className="text-center"><button className='btn btn-danger px-3'>Delete</button></td>
                        </tr>
                        <tr>
                            <td scope="row">Green Bond</td>
                            <td>1400</td>
                            <td>1400</td>
                            <td>1400</td>
                            <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit</button></td>
                            <td className="text-center"><button className='btn btn-danger px-3'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className=' d-md-flex justify-content-md-end'>
                <button className='btn ' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Download</button>
            </div>
        </div>
    )
}

export default Table;
