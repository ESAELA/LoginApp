import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

function Register () {
    return (
        <div className="h-screen w-screen register-bg flex justify-center items-center font-display">
            
            <div className='register-group flex justify-between bg-green-200'>
                
                <div className='flex flex-col justify-end'>
                    <div className='titleregister bg-amber-200'>
                        <h2 className='titleregister-h2 font-bold'>
                            Criar uma conta
                        </h2>
                    </div>
                </div>
               
               <form action="" className="flex flex-col gap-5 register-form rounded-sm shadow-2xl bg-pink-400">
                <h2 className="text-black uppercase text-4xl ml-4">Registro</h2>
                <div className="flex flex-col justify-center items-center gap-5 w-92">
                    <input className="register-input text-gray-500" ltype="email" name="" id="" placeholder="E-mail" />
                    <input className="register-input text-gray-500" type="password" name="" id="" placeholder="Senha" />
                    <input className="register-input text-gray-500" type="password" name="" id="" placeholder="Confirmar senha" />
                    <div className='btn-signin transition duration-300 ease-in-out hover:-translate-y-1'>
                        <Icon 
                            path={mdiArrowRight} 
                            size={1.3}w
                            color="gray"
                        />  
                    </div>
                    <div className='border border-t-1 w-40 register-border'>
                    </div>

                    <div className="register-input text-center focus:border-blue-300 uppercase ">
                        <a className='text-black font-bold forgotusername-a' href="login">Já tenho uma conta</a>
                    </div>
                </div>
                </form>
            </div>

        </div>
    ) 
}

export default Register;