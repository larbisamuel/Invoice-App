 import React, { useEffect, useState } from 'react';
import { BsSearch, BsPlus, BsDownload, BsTrash, BsPencilSquare } from 'react-icons/bs'; // Importing icons
import { Modal } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { Item } from './Item';
import productApi from './productApi';


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

  const [newItem, setNewItem] = useState<Item>(new Item);
  const [editableRows, setEditableRows] = useState<string[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // Current page number
  // const [loading, setLoading] = useState(false);

  const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('New item:', newItem);

    productApi.createProduct(newItem).then((data)=>{
      console.log(data);
      setItems([...items, data]);
      setShowAddItemModal(false);
    })
  setNewItem(new Item);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase()); // Search should be case-insensitive
  };


  const filteredItems = items.filter((item) =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );



  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };
  
  const toggleEditRow = (index: string) => {

    if (editableRows.includes(index)) {
      setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
      setItems((prevItems) => prevItems.map((item) => {
        if(item.product_id === index){
          productApi.updateProduct(item)
          return { ...item, editing: false }
        }
        else{
          return item
        }
      }));
    } else {
      setEditableRows([...editableRows, index]);
      setItems((prevItems) => prevItems.map((item) => (item.product_id === index ? { ...item, editing: true } : item)));
    }
  };


  // const renderTableCell = (value: string | number, index: number, columnKey: keyof Item) => {
  //   const item = items[index];
  //   if (item.editing) {
  //     return <input type="text" className="form-control" value={value} onChange={(e) => handleEditValueChange(index, columnKey, e.target.value)} />;
  //   }
  //   return value;
  // };


  const handleEditValueChange = (index: string, columnKey: keyof Item, newValue: string | number) => {
    setItems((prevItems) => prevItems.map((item) => (item.product_id === index ? { ...item, [columnKey]: newValue } : item)));
  };

  const handleDownload = ()=> {
    
  }

  const handleDelete = (product_id: string) => {
    productApi.deleteProduct(product_id).then(() => {
      const updateditems = items.filter(item => item.product_id !== product_id);
      setItems(updateditems);
    });
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

  useEffect ( () => {
    // setLoading(true);

    productApi.getAllProduct().then((data)=>{
      console.log(data);
      setItems(data)
    })
    console.log("kojo")
  },[])


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
            {/* Table header */}
            <tr>
              <th scope="col">ITEM NAME</th>
              <th scope="col">ACTUAL QTY(pcs)</th>
              <th scope="col">RECEIVED QTY(pcs)</th>
              <th scope="col">REMAINING STOCK</th>
              <th scope="col" colSpan={2} className="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>

            {items.slice(startIndex, endIndex).map((item) => (
              // Render table rows
              <tr key={item.product_id}>
                {/* <td>{renderTableCell(item.productName, index, 'productName')}</td>
                <td>{renderTableCell(item.actualQuantity, index, 'actualQuantity')}</td>
                <td>{renderTableCell(item.receivedQuantity, index, 'receivedQuantity')}</td>
                <td>{renderTableCell(item.remainingStock, index, 'remainingStock')}</td> */}

                <td>
                {editableRows.includes(item.product_id) ? (
                  <input
                    type="text"
                    className="form-control"
                    value={item.productName}
                    onChange={(e) => handleEditValueChange(item.product_id, 'productName', e.target.value)}
                  />
                ) : (
                  item.productName
                )}
              </td>
              <td>
                {editableRows.includes(item.product_id) ? (
                  <input
                    type="number"
                    className="form-control"
                    value={item.actualQuantity}
                    onChange={(e) => handleEditValueChange(item.product_id, 'actualQuantity', e.target.value)}
                  />
                ) : (
                  item.actualQuantity
                )}
              </td>
              <td>
                {editableRows.includes(item.product_id) ? (
                  <input
                    type="number"
                    className="form-control"
                    value={item.receivedQuantity}
                    onChange={(e) => handleEditValueChange(item.product_id, 'receivedQuantity', e.target.value)}
                  />
                ) : (
                  item.receivedQuantity
                )}
              </td>
              <td>
                {editableRows.includes(item.product_id) ? (
                  <input
                    type="number"
                    className="form-control"
                    value={item.remainingStock}
                    onChange={(e) => handleEditValueChange(item.product_id, 'remainingStock', e.target.value)}
                  />
                ) : (
                  item.remainingStock
                )}
              </td>
                
                <td className="text-center">
                    <button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }} onClick={() => toggleEditRow(item.product_id)}>
                    {editableRows.includes(item.product_id) ? 'Save' : 'Edit'}
                        <BsPencilSquare className='ms-2' />
                        </button>
                </td>



                <td className="text-center"><button className='btn btn-danger px-3'onClick={() => handleDelete(item.product_id)}>Delete<BsTrash className='ms-2' /></button></td>

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

              <label htmlFor="productName" className="form-label">Item Name</label>
              <input type="text" className="form-control" id="productName" name="productName" value={newItem.productName} onChange={handleInputChange} required />

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

