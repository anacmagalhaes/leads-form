import React, { useEffect, useState } from 'react'
import { api } from '../services/api'

export const Leads = () => {
    const [leads, setLeads] = useState([]);

    const getData = async () => {
        try {
            const response = await api.get('/leads');
            return response.data;
        } catch (err) {
            console.err('Erro ao obter os dados da API', err);
            return null;
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await getData();
                setLeads(fetchedData);
            } catch (err) {
                console.error('Erro ao carregar dados' + err);
            }
        }
        fetchData(); 
    }, []);

    const deleteData = async (_id) => {
        try {
            const response = await api.delete(`/leads/${_id}`);
            console.log(response)
            if(response.status === 200){
                alert('Usuário deletado') 
            } 
        } catch (err) {
            console.log('error', err)
        }
    }

    return (
        <div className='h-screen flex items-center justify-center bg-gray-500 flex-col p-3'>
            <div class="w-120 h-200 flex-col flex justify-center items-center ">
                <h1
                    className='text-2xl font-semibold font-serif text-white mb-5'>
                    Leads
                </h1>
                {leads.map((item) => (
                    <div class="bg-gray-200 w-80 rounded-lg flex justify-center items-start p-2 flex-col mb-6">
                        <h1
                            className='font-serif'>
                            Nome: {item.name}
                        </h1>
                        <h1
                            className='font-serif'>
                            E-mail: {item.email}
                        </h1>
                        <h1
                            className='font-serif'>
                            Phone: {item.phone}
                        </h1>
                        <div className='flex gap-2 mt-1'>
                        
                            <button
                                type="button"
                                className='border-2 rounded-lg border-blue-400 p-2 bg-blue-400 font-semibold font-serif'>
                                Editar
                            </button>
                            <button
                                type="button"
                                onClick={()=>deleteData(item._id)}
                                className='border-2 rounded-lg border-red-400 p-2 bg-red-400 font-semibold font-serif'>
                                    
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}