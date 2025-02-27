import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

function Login () {
    return (
       <div className=" register-bg h-screen w-screen flex justify-center items-center ">
            <form className="w-espacamento-600 h-92 bg-white flex flex-col items-center justify-center gap-2 shadow-xl" action="">
                <div className="w-espacamento-550 h-80 flex flex-col items-center justify-center gap-5">
                    <div className="mb-5 font-bold">
                        <h2 className='uppercase'>Entrar</h2>
                    </div>
                    
                    <input type="email" name="" id="" placeholder="Username" className="input-components"/>
                    <input type="password" name="" id="" placeholder="Password" className="input-components"/>

                    <div className="flex-components">
                        <div className='btn-signin transition duration-300 ease-in-out hover:-translate-y-1'>
                            <Icon 
                                path={mdiArrowRight} 
                                size={1.3}w
                                color="gray"
                                />  
                        </div>
                        <div className="flex-components mt-3 text-gray-500 ">
                            <a href="recovery" className='hover:text-black'>
                                Não consegue entrar?
                            </a>
                            <a href="register" className='hover:text-black'>
                                Criar uma conta
                            </a>
                    </div>
                </div>
                </div>
            </form>
       </div>
    )
}
export default Login;