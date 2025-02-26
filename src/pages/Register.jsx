import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

function Register () {
    return (
        <div className="h-screen w-screen register-bg flex justify-center items-center">
            
            <div className='register-group flex justify-between'>

                <div className='flex flex-col justify-end'>
                    <div className='titleregister'>
                        <h2 className='titleregister-h2'>
                            Criar uma conta
                        </h2>
                    </div>
                </div>
               
               <form action="" className="flex flex-col gap-5 register-form">
                <h2 className="text-white uppercase text-4xl ml-4 font-bold">Registro</h2>
                <div className="flex flex-col justify-center items-center gap-5 w-70">
                    <input className="register-input text-gray-500 focus:border-blue-300" ltype="email" name="" id="" placeholder="E-mail" />
                    <input className="register-input text-gray-500 focus:border-blue-300"  type="text" name="" id="" placeholder="Primeiro nome" />
                    <input className="register-input text-gray-500 focus:border-blue-300" type="text" name="" id="" placeholder="Sobrenome" />
                    <input className="register-input text-gray-500 focus:border-blue-300" type="password" name="" id="" placeholder="Senha" />
                    <input className="register-input text-gray-500 focus:border-blue-300" type="password" name="" id="" placeholder="Confirmar senha" />
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
                        <a className='text-gray-500' href="login">Já tenho uma conta</a>
                    </div>
                </div>
            </form>
            </div>

        </div>
    ) 
}

export default Register;