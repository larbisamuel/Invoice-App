
import React, { useState } from 'react';
import { BsSearch, BsPlus, BsDownload, BsTrash, BsPencilSquare } from 'react-icons/bs'; // Importing icons
import { Modal } from 'react-bootstrap';

interface Item {
  itemName: string;
  actualQuantity: number;
  receivedQuantity: number;
}

const Table: React.FC = () => {
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [newItem, setNewItem] = useState<Item>({
    itemName: '',
    actualQuantity: 0,
    receivedQuantity: 0,
  });

  const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add logic to save the new item data (e.g., using an API call)
    console.log('New item:', newItem); // For now, just log the data
    setShowAddItemModal(false);
    setNewItem({ itemName: '', actualQuantity: 0, receivedQuantity: 0 });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  return (
    <div className='mt-5 p-3 container shadow-lg'>
      <div className=' d-md-flex justify-content-md-end'>
        <button className='btn ' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Logout</button>
      </div>
      <div className='mt-3'>
        <div className="input-group">
          <span className="input-group-text"><BsSearch /></span> {/* Search icon */}
          <input type="text" className="form-control" style={{ maxWidth: '160px' }} placeholder="Search item" />
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
                            <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit<BsPencilSquare className='ms-2' /></button></td>
                            <td className="text-center"><button className='btn btn-danger px-3'>Delete<BsTrash className='ms-2'/></button></td>
                        </tr>
                        <tr>
                            <td scope="row">Deep brown bond</td>
                            <td>2000</td>
                            <td>1000</td>
                            <td>1000</td>
                            <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit<BsPencilSquare className='ms-2' /></button></td>
                            <td className="text-center"><button className='btn btn-danger px-3'>Delete<BsTrash className='ms-2'/></button></td>
                        </tr>
                        <tr>
                            <td scope="row">Green Bond</td>
                            <td>1400</td>
                            <td>1400</td>
                            <td>1400</td>
                            <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit<BsPencilSquare className='ms-2' /></button></td>
                            <td className="text-center"><button className='btn btn-danger px-3'>Delete<BsTrash className='ms-2'/></button></td>
                        </tr>
                        <tr>
                            <td scope="row">Deep brown bond</td>
                            <td>2000</td>
                            <td>1000</td>
                            <td>1000</td>
                            <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit<BsPencilSquare className='ms-2' /></button></td>
                            <td className="text-center"><button className='btn btn-danger px-3'>Delete<BsTrash className='ms-2'/></button></td>
                        </tr><tr>
                            <td scope="row">Deep brown bond</td>
                            <td>2000</td>
                            <td>1000</td>
                            <td>1000</td>
                            <td className="text-center"><button className='btn px-3' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Edit<BsPencilSquare className='ms-2' /></button></td>
                            <td className="text-center"><button className='btn btn-danger px-3'>Delete<BsTrash className='ms-2'/></button></td>
                        </tr>
                   
          </tbody>
        </table>
      </div>
      <div className=' d-md-flex justify-content-md-end'>
        <button className='btn ' style={{ backgroundColor: '#5CA7B7', color: 'white' }}>Download <BsDownload/></button>
      </div>


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
            </div>
            <div className="mb-3">
              <label htmlFor="receivedQuantity" className="form-label">Actual Quantity (pcs)</label>
              <input type="number" className="form-control" id="receivedQuantity" name="receivedQuantity" value={newItem.receivedQuantity} onChange={handleInputChange} required />
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
            <button className='btn btn-outline-primary rounded-2 shadow-sm'>Submit</button>
        </Modal.Footer>
        </Modal>
        </div>
  )
}
export default Table;