import React, { useState } from 'react'
import { api } from '../services/api';

export const Forms = () => {
    const [leads, setLeads] = useState({ name: '', email: '', phone: '' });
    const [message, setMessage] = useState('');

    //entender
    const handleChange = (e) => {
        setLeads({ ...leads, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!leads.name || !leads.email || !leads.phone) {
            setMessage('Preencha todos os campos');
        } else {
            try {
                const response = await api.post('/leads', {
                    name: leads.name, 
                    email: leads.email, 
                    phone: leads.phone
                });
                setMessage(error.response.data.error);
            } catch (error) {
                console.log('O registro falhou', error.response.data.error);
                setMessage(error.response.data.error);
            }
        }
    }



    return (
        <div className='h-screen flex items-center justify-center bg-gray-500'>
            <div class="bg-gray-200 w-100 h-100 rounded-lg flex flex-col justify-center items-center p-5 ">
                <h1
                    className='text-2xl font-semibold font-serif'>
                    Registro
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Nome'
                        name='name'
                        value={leads.name}
                        onChange={handleChange}
                        className='w-80 h-8 border-2 rounded-lg border-gray-600 block mb-5 mt-5 p-2 placeholder:font-serif'>
                    </input>
                    <input
                        placeholder='Email'
                        name='email'
                        type='email'
                        value={leads.email}
                        onChange={handleChange}
                        className='w-80 h-8 border-2 rounded-lg border-gray-600 block mb-5 p-2 placeholder:font-serif'>
                    </input>
                    <input
                        placeholder='Telefone'
                        name='phone'
                        type='tel'
                        value={leads.phone}
                        onChange={handleChange}
                        className='w-80 h-8 border-2 rounded-lg border-gray-600 mb-5 p-2 placeholder:font-serif'>
                    </input>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className='border-2 rounded-lg border-gray-400 p-2 bg-gray-400 font-semibold font-serif mb-2'>
                            Cadastrar
                        </button>
                    </div>
                    {message && <div className="error flex justify-center text-red-500 font-medium font-serif">{message}</div>}
                </form>
            </div>


        </div>
    )
}



