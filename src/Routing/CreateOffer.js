import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { setAddOffer } from '../reducers/OfferSlice'
import { toast } from 'react-toastify';
import DashboardNavs from './DashboardNavs';

const CreateOffer = () => {

    const [values, setValues] = useState({
        amount: '',
        destination: ''
    })

    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]:event.target.value,
        })
      }

      const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const token = JSON.parse(localStorage.getItem('driver'))
            
            const res = await axios({
                baseURL: 'http://localhost:3000/v1/offer',
                method: 'post',
                data: values, 
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
                
            // dispatch(setAddOffer(res.data.driver))
            history.push('/my-offers')
            const notify = () => toast(res.data.message);
            notify()
        } catch (error) {
            
        }
    }

    return (
        <div className='dashboard-background dashboard'>
            <DashboardNavs />
            <br /><br />
            
            <h3>Create Ride offer</h3>
            <br />
            <form onSubmit={handleSubmit} className='dashboard-form' >
                <div>
                <label>Amount: </label>
                <input type='number' name='amount' value={values.amount} onChange={handleChange} className='db-input'/>
                </div>

                <br /><br />

                <div>
                <label>Destination: </label>
                <input type='text' value={values.destination} name='destination' onChange={handleChange} className='db-input'/>
                </div>
                
                <br />
                <button className='db-btn'>Create Offer</button>
            </form>
        </div>
    )
}

export default CreateOffer
