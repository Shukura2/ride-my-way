import React, { useState } from 'react'
import {  useDispatch } from 'react-redux'
const EditModal = ({closeModal, destination,amount, editOffer, id }) => {
  const [editDetail, setEditDetail] = useState({destination, amount})
const dispatch = useDispatch()

  const handleChange = (e)=> {
    setEditDetail({
      ...editDetail,
      [e.target.name]: e.target.value
    })
  }
 const  handleSave =(e) => {
    e.preventDefault()
    editOffer(id, dispatch,editDetail)
    closeModal()
    
  }
  return (
    <div className='modal-container' style={{width: 200, backgroundColor:"purple", color:"white", height:200}}>
      <form onSubmit={handleSave} >
      <div>
        <label>Amount</label>
        <input  name="amount" value={editDetail.amount} required  onChange={handleChange}  type="number"/>
      </div>
      <div>
        <label>Destination</label>
        <input  name="destination" value={editDetail.destination} required onChange={handleChange} type="text"  />
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}> 
        <button type="submit"> Save</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
      </form>
    </div>
  )
}

export default EditModal
