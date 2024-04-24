
// import React, { useState } from 'react';
// import { BsSearch, BsPlus, BsDownload, BsTrash, BsPencilSquare } from 'react-icons/bs'; // Importing icons
// import { Modal } from 'react-bootstrap';

// interface Item {
//   itemName: string;
//   actualQuantity: number;
//   receivedQuantity: number;
// }

// const Table: React.FC = () => {
//   const [showAddItemModal, setShowAddItemModal] = useState(false);
//   const [newItem, setNewItem] = useState<Item>({
//     itemName: '',
//     actualQuantity: 0,
//     receivedQuantity: 0,
//   });

//   const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Add logic to save the new item data (e.g., using an API call)
//     console.log('New item:', newItem); // For now, just log the data
//     setShowAddItemModal(false);
//     setNewItem({ itemName: '', actualQuantity: 0, receivedQuantity: 0 });
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
//   };

//   return (
//     <div className='mt-5 p-3 container shadow-lg'>
//       <div className=' d-md-flex justify-content-md-end'>
//         <button className='btn ' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Logout</button>
//       </div>
//       <div className='mt-3'>
//         <div className="input-group">
//           <span className="input-group-text"><BsSearch /></span> {/* Search icon */}
//           <input type="text" className="form-control" style={{ maxWidth: '160px' }} placeholder="Search item" />
//           <button className='btn ms-2 rounded-2 ' style={{ backgroundColor: '#110f0f', color: 'white' }}>Search</button>
//         </div>
//         <div className='mt-3'>
//           <div className='input-group'>
//             <button className='btn btn-outline-primary mt-5 ms-6 rounded-2 shadow-lg' onClick={() => setShowAddItemModal(true)}>
//               Add Item
//               <BsPlus className="ms-2" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="table-responsive container_table shadow-lg rounded mt-3 mb-3">
//         <table className="table table-bordered ">
//           <thead>
//             <tr>
//               <th scope="col">ITEM NAME</th>
//               <th scope="col">ACTUAL QTY(pcs)</th>
//               <th scope="col">RECEIVED QTY(pcs)</th>
//               <th scope="col">REMAINING STOCK</th>
//               <th scope="col" colSpan={2} className="text-center">ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
          
//                         <tr>
//                             <td scope="row">Black bond</td>
//                             <td>1000</td>
//                             <td>4000</td>
//                             <td>3000</td>
//                             <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit<BsPencilSquare className='ms-2' /></button></td>
//                             <td className="text-center"><button className='btn btn-danger px-3'>Delete<BsTrash className='ms-2'/></button></td>
//                         </tr>
//                         <tr>
//                             <td scope="row">Deep brown bond</td>
//                             <td>2000</td>
//                             <td>1000</td>
//                             <td>1000</td>
//                             <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit<BsPencilSquare className='ms-2' /></button></td>
//                             <td className="text-center"><button className='btn btn-danger px-3'>Delete<BsTrash className='ms-2'/></button></td>
//                         </tr>
//                         <tr>
//                             <td scope="row">Green Bond</td>
//                             <td>1400</td>
//                             <td>1400</td>
//                             <td>1400</td>
//                             <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit<BsPencilSquare className='ms-2' /></button></td>
//                             <td className="text-center"><button className='btn btn-danger px-3'>Delete<BsTrash className='ms-2'/></button></td>
//                         </tr>
//                         <tr>
//                             <td scope="row">Deep brown bond</td>
//                             <td>2000</td>
//                             <td>1000</td>
//                             <td>1000</td>
//                             <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit<BsPencilSquare className='ms-2' /></button></td>
//                             <td className="text-center"><button className='btn btn-danger px-3'>Delete<BsTrash className='ms-2'/></button></td>
//                         </tr><tr>
//                             <td scope="row">Deep brown bond</td>
//                             <td>2000</td>
//                             <td>1000</td>
//                             <td>1000</td>
//                             <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit<BsPencilSquare className='ms-2' /></button></td>
//                             <td className="text-center"><button className='btn btn-danger px-3'>Delete<BsTrash className='ms-2'/></button></td>
//                         </tr>
                   
//           </tbody>
//         </table>
//       </div>
//       <div className=' d-md-flex justify-content-md-end'>
//         <button className='btn ' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Download <BsDownload/></button>
//       </div>


//       <Modal show={showAddItemModal} onHide={() => setShowAddItemModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Item</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleAddItem}>
//             <div className="mb-3">
//               <label htmlFor="itemName" className="form-label">Item Name</label>
//               <input type="text" className="form-control" id="itemName" name="itemName" value={newItem.itemName} onChange={handleInputChange} required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="actualQuantity" className="form-label">Actual Quantity (pcs)</label>
//               <input type="number" className="form-control" id="actualQuantity" name="actualQuantity" value={newItem.actualQuantity} onChange={handleInputChange} required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="receivedQuantity" className="form-label">Actual Quantity (pcs)</label>
//               <input type="number" className="form-control" id="receivedQuantity" name="receivedQuantity" value={newItem.receivedQuantity} onChange={handleInputChange} required />
//             </div>
//         </form>
//         </Modal.Body>
//         <Modal.Footer>
//             <button className='btn btn-outline-primary rounded-2 shadow-sm'>Submit</button>
//         </Modal.Footer>
//         </Modal>
//         </div>
//   )
// }
// export default Table;

// import React, { useState } from 'react';
// import { BsSearch, BsPlus, BsDownload, BsTrash, BsPencilSquare } from 'react-icons/bs'; // Importing icons
// import { Modal } from 'react-bootstrap';
// import axios from 'axios';

// interface Item {
//   itemName: string;
//   actualQuantity: number;
//   receivedQuantity: number;
// }

// const Table: React.FC = () => {
//   const [showAddItemModal, setShowAddItemModal] = useState(false);
//   const [newItem, setNewItem] = useState<Item>({
//     itemName: '',
//     actualQuantity: 0,
//     receivedQuantity: 0,
//   });
//   const [editableRows, setEditableRows] = useState<number[]>([]);
//   const [items, setItems] = useState<Item[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);


//   const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log('New item:', newItem); // For now, just log the data
//     setItems([...items, newItem]);
//     setShowAddItemModal(false);
//     setNewItem({ itemName: '', actualQuantity: 0, receivedQuantity: 0 });
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
//   };

//   const toggleEditRow = (index: number) => {
//     if (editableRows.includes(index)) {
//       setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
//     } else {
//       setEditableRows([...editableRows, index]);
//     }
//   };

//   const renderTableCell = (value: string | number, index: number, columnKey: string) => {
//     if (editableRows.includes(index)) {
//       return <input type="text" className="form-control" value={value} onChange={(e) => handleInputChange(e)} />;
//     }
//     return value;
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/search', {
//         params: {
//           query: searchTerm,
//           fields: ['name', 'dateofbirth','residenceaddress','occupation', 'phonenumber', 'maritalstatus'],
//         },
//       })

//       if (response && response.data) {
//         const data = response.data;
//         setSearchResults(data);
//       } else {
//         console.error('API response is missing data.');
//       }
//       const data = response.data;
//       //validate the search query
//       if (!searchTerm || searchTerm.length < 3) {
//         console.error('Please enter at least 3 characters');
//         return;
//       }
  
//       setSearchResults(data);
//     } catch (error) {
//       console.error('Error searching:', error);
//     }
//   };

 

//   return (
//     <div className='mt-5 p-3 container shadow-lg'>
//       <div className=' d-md-flex justify-content-md-end'>
//         <button className='btn ' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Logout</button>
//       </div>
//       <div className='mt-3'>
//         <div className="input-group">
//           <span className="input-group-text"><BsSearch /></span> {/* Search icon */}
//           <input type="text" className="form-control" style={{ maxWidth: '160px' }} placeholder="Search item" />
//           <button className='btn ms-2 rounded-2 ' style={{ backgroundColor: '#110f0f', color: 'white' }}>Search</button>
//         </div>
//         <div className='mt-3'>
//           <div className='input-group'>
//             <button className='btn btn-outline-primary mt-5 ms-6 rounded-2 shadow-lg' onClick={() => setShowAddItemModal(true)}>
//               Add Item
//               <BsPlus className="ms-2" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="table-responsive container_table shadow-lg rounded mt-3 mb-3">
//         <table className="table table-bordered ">
//           <thead>
//             <tr>
//               <th scope="col">ITEM NAME</th>
//               <th scope="col">ACTUAL QTY(pcs)</th>
//               <th scope="col">RECEIVED QTY(pcs)</th>
//               <th scope="col">REMAINING STOCK</th>
//               <th scope="col" colSpan={2} className="text-center">ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item, index) => (
//               <tr key={index}>
//                 <td>{renderTableCell(item.itemName, index, 'itemName')}</td>
//                 <td>{renderTableCell(item.actualQuantity, index, 'actualQuantity')}</td>
//                 <td>{renderTableCell(item.receivedQuantity, index, 'receivedQuantity')}</td>
//                 <td>{ item.receivedQuantity}</td>
//                 <td className="text-center">
//                   <button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }} onClick={() => toggleEditRow(index)}>
//                     {editableRows.includes(index) ? 'Save' : 'Edit'}
//                     <BsPencilSquare className='ms-2' />
//                   </button>
//                 </td>
//                 <td className="text-center"><button className='btn btn-danger px-3'>Delete<BsTrash className='ms-2'/></button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className=' d-md-flex justify-content-md-end'>
//         <button className='btn ' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Download <BsDownload/></button>
//       </div>

//       <Modal show={showAddItemModal} onHide={() => setShowAddItemModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Item</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleAddItem}>
//             <div className="mb-3">
//               <label htmlFor="itemName" className="form-label">Item Name</label>
//               <input type="text" className="form-control" id="itemName" name="itemName" value={newItem.itemName} onChange={handleInputChange} required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="actualQuantity" className="form-label">Actual Quantity (pcs)</label>
//               <input type="number" className="form-control" id="actualQuantity" name="actualQuantity" value={newItem.actualQuantity} onChange={handleInputChange} required />
//               <div className="mb-3">
//               <label htmlFor="receivedQuantity" className="form-label">Received Quantity (pcs)</label>
//               <input type="number" className="form-control" id="receivedQuantity" name="receivedQuantity" value={newItem.receivedQuantity} onChange={handleInputChange} required />
//               </div>
//             </div>  
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={() => setShowAddItemModal(false)}>Close</button>
//               <button type="submit" className="btn btn-primary">Add Item</button>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };


// export default Table;

import React, { useState, useEffect } from 'react';
import { BsSearch, BsPlus, BsDownload, BsTrash, BsPencilSquare } from 'react-icons/bs'; // Importing icons
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

interface Item {
  itemName: string;
  actualQuantity: number;
  receivedQuantity: number;
  remainingStock: number;
  editing?: boolean;
}

const Table: React.FC = () => {
  const ITEMS_PER_PAGE = 5; // Number of items to display per page
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [newItem, setNewItem] = useState<Item>({
    itemName: '',
    actualQuantity: 0,
    receivedQuantity: 0,
    remainingStock: 0,
  });
  const [editableRows, setEditableRows] = useState<number[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('New item:', newItem); // For now, just log the data
    setItems([...items, newItem]);
    setShowAddItemModal(false);
    setNewItem({ itemName: '', actualQuantity: 0, receivedQuantity: 0, remainingStock: 0 });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase()); // Search should be case-insensitive
  };

  useEffect(() => {
    const filteredItems = items.filter(item =>
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredItems);
  }, [searchTerm]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const toggleEditRow = (index: number) => {
    if (editableRows.includes(index)) {
      setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
      setItems((prevItems) => prevItems.map((item, i) => (i === index ? { ...item, editing: false } : item)));
    } else {
      setEditableRows([...editableRows, index]);
      setItems((prevItems) => prevItems.map((item, i) => (i === index ? { ...item, editing: true } : item)));
    }
  };

  const renderTableCell = (value: string | number, index: number, columnKey: keyof Item) => {
    const item = items[index];
    if (item.editing) {
      return <input type="text" className="form-control" value={value} onChange={(e) => handleEditValueChange(index, columnKey, e.target.value)} />;
    }
    return value;
  };

  const handleEditValueChange = (index: number, columnKey: keyof Item, newValue: string | number) => {
    setItems((prevItems) => prevItems.map((item, i) => (i === index ? { ...item, [columnKey]: newValue } : item)));
  };

  const handleDownload = ()=> {
    
  }
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    alert('You are logged out!')
  }
  
  const handleAddedItems = () => {
    alert('Item added successfully!')
  }

  
  const handleDeleteItems = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    alert('Item deleted successfully!')
  };
  

  // Calculate the range of items to display for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, items.length);


  return (
    <div className='mt-5 p-3 container shadow-lg'>
      <div className=' d-md-flex justify-content-md-end'>
        <button className='btn ' style={{ backgroundColor: '#5CA7B7', color: 'white' }} onClick={handleLogout}>Logout</button>
      </div>
      <div className='mt-3'>
        <div className="input-group">
          <span className="input-group-text"><BsSearch /></span> {/* Search icon */}
          <input type="text" className="form-control" style={{ maxWidth: '160px' }} placeholder="Search item" onChange={handleSearch} />
          <button className='btn ms-2 rounded-2 ' style={{ backgroundColor: '#110f0f', color: 'white' }}>Search</button>
        </div>
        <div className='mt-3'>
          <div className='input-group'>
            <button className='btn btn-outline-primary mt-5 ms-6 rounded-2 shadow-lg' onClick={() => setShowAddItemModal(true)}>
              Add Item
              <BsPlus className="ms-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="table-responsive container_table shadow-lg rounded mt-3 mb-3">
        <table className="table table-bordered " id='my-table'>
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
          {searchResults.slice(startIndex, endIndex).map((item, index) => (
              <tr key={index}>
                
                <td>
                {editableRows.includes(index) ? (
                  <input
                    type="text"
                    className="form-control"
                    value={item.itemName}
                    onChange={(e) => handleEditValueChange(index, 'itemName', e.target.value)}
                  />
                ) : (
                  item.itemName
                )}
              </td>
              <td>
                {editableRows.includes(index) ? (
                  <input
                    type="text"
                    className="form-control"
                    value={item.actualQuantity}
                    onChange={(e) => handleEditValueChange(index, 'actualQuantity', e.target.value)}
                  />
                ) : (
                  item.actualQuantity
                )}
              </td>
              <td>
                {editableRows.includes(index) ? (
                  <input
                    type="text"
                    className="form-control"
                    value={item.receivedQuantity}
                    onChange={(e) => handleEditValueChange(index, 'receivedQuantity', e.target.value)}
                  />
                ) : (
                  item.receivedQuantity
                )}
              </td>
              <td>
                {editableRows.includes(index) ? (
                  <input
                    type="text"
                    className="form-control"
                    value={item.remainingStock}
                    onChange={(e) => handleEditValueChange(index, 'remainingStock', e.target.value)}
                  />
                ) : (
                  item.remainingStock
                )}
              </td>
                
                <td className="text-center">
                    <button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }} onClick={() => toggleEditRow(index)}>
                    {editableRows.includes(index) ? 'Save' : 'Edit'}
                        <BsPencilSquare className='ms-2' />
                        </button>
                </td>


                <td className="text-center"><button className='btn btn-danger px-3'onClick={()=>handleDeleteItems(index)}>Delete<BsTrash className='ms-2' /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=' d-md-flex justify-content-md-end'>
        <button className='btn ' id="download-pdf" style={{ backgroundColor: '#5CA7B7', color: 'white' }} onClick={ handleDownload}>Download <BsDownload /></button>
      </div>

       {/* Pagination controls */}
       <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: Math.ceil(items.length / ITEMS_PER_PAGE) }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)} disabled={currentPage === i + 1} className='btn btn-primary'>
            {i + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(items.length / ITEMS_PER_PAGE)}>
          Next
        </button>
      </div>
      {/* Modal  */}
      <Modal show={showAddItemModal} onHide={() => setShowAddItemModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddItem}>
            <div className="mb-3">
              <label htmlFor="itemName" className="form-label">Item Name</label>
              <input type="text" className="form-control" id="itemName" name="itemName" value={newItem.itemName} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="actualQuantity" className="form-label">Actual Quantity (pcs)</label>
              <input type="number" className="form-control" id="actualQuantity" name="actualQuantity" value={newItem.actualQuantity} onChange={handleInputChange} required />
              <div className="mb-3">
              <label htmlFor="receivedQuantity" className="form-label">Received Quantity (pcs)</label>
              <input type="number" className="form-control" id="receivedQuantity" name="receivedQuantity" value={newItem.receivedQuantity} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
              <label htmlFor="remainingStock" className="form-label">Remaining Stock (pcs)</label>
              <input type="number" className="form-control" id="remainingStock" name="remainingStock" value={newItem.remainingStock} onChange={handleInputChange} required />
              </div>
            </div>  
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowAddItemModal(false)}>Close</button>
              <button type="submit" className="btn btn-primary" onClick={handleAddedItems}>Add Item</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};


export default Table;