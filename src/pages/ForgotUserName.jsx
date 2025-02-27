import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

function ForgotUserName () {
    return (
        <div className="register-bg h-screen w-screen flex justify-center items-center ">
            <div className="forgotusername-firstdiv flex flex-col justify-center">
                <div className="flex justify-between">
                    <div className='flex flex-col justify-end mb-10'>
                        <div className='forgotusername-title'>
                            <h2 className='text-white font-bold forgotusername-titleh2'>
                                Esqueceu o nome de usuário
                            </h2>
                    </div>
                    </div>
                    <form action="" className="forgotusername-form shadow-2xl flex flex-col justify-center ">
                        <div className="forgotusername-formfirstdiv flex flex-col items-center gap-5 ">
                            <h1 className="forgotusername-h1">
                                Insira seu endereço de e-mail
                            </h1>
                            <h2 className="forgotusername-h2">
                                A recuperação do seu nome de usuário começa com o e-mail vinculado à sua conta.
                            </h2>
                            <input className="w-full forgotusername-input rounded-sm mt-10  uppercase font-semibold" type="email" name="" id="" placeholder="E-mail" />
                            <div className='btn-signin transition duration-300 ease-in-out hover:-translate-y-1 mb-5'>
                                <Icon 
                                        path={mdiArrowRight} 
                                            size={1.5}w
                                            color="gray"
                                            />  
                            </div>
                            <div className='forgotusername-a'>
                                <a className='font-bold uppercase' href="forgotpassword">Esqueçeu a sua senha?</a>
                            </div>
                        </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default ForgotUserName;