// import React, { useState } from 'react';
// import { BsPencilSquare } from 'react-icons/bs'; // Importing icons


// interface Item {
//     itemName: string;
//     actualQuantity: number;
//     receivedQuantity: number;
//     remainingStock: number;
//     editing?: boolean;
//   }
// const TestTable: React.FC = () => {

//     const [newItem, setNewItem] = useState<Item>({
//         itemName: '',
//         actualQuantity: 0,
//         receivedQuantity: 0,
//         remainingStock: 0,
//       });

//   const [editableRows, setEditableRows] = useState<number[]>([]);
//   const [items, setItems] = useState<Item[]>([
//     { itemName: 'Item 1', actualQuantity: 10, receivedQuantity: 5, remainingStock: 5 },
//     { itemName: 'Item 2', actualQuantity: 20, receivedQuantity: 15, remainingStock: 5 },
//     // Add more items as needed
//   ]);
  

//   const toggleEditRow = (index: number) => {
//     if (editableRows.includes(index)) {
//       setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
//     } else {
//       setEditableRows([...editableRows, index]);
//     }
//   };

//   const handleEditValueChange = (index: number, columnKey: keyof Item, newValue: string | number) => {
//     setItems((prevItems) => prevItems.map((item, i) => (i === index ? { ...item, [columnKey]: newValue } : item)));
//   };

//   return (
//     <div>
//         <h1>Helo</h1>
//       <table>
//         <tbody>
//           {items.map((item, index) => (
//             <tr key={index}>
//               <td>
//                 {editableRows.includes(index) ? (
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={item.itemName}
//                     onChange={(e) => handleEditValueChange(index, 'itemName', e.target.value)}
//                   />
//                 ) : (
//                   item.itemName
//                 )}
//               </td>
//               {/* Render other columns similarly */}
//               <td className="text-center">
//                 <button
//                   className='btn px-3'
//                   style={{ backgroundColor: '#5CA7B7', color: 'white' }}
//                   onClick={() => toggleEditRow(index)}
//                 >
//                   {editableRows.includes(index) ? 'Save' : 'Edit'}
//                   <BsPencilSquare className='ms-2' />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TestTable;

