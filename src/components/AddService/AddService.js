import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/addService', data)
            .then(res => {
                console.log(res)
            })
    }
    return (
        <div className='add-service mt-5'>
            <h3>Add New Service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} />
                <textarea {...register("description")} />
                <input {...register("name")} />
                <input {...register("price")} type="number" />
                <input {...register("image-url")} />


                <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;