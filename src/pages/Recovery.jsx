import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import { mdiLockCheck } from '@mdi/js';

function Recovery () {
    return (
        <div className="recovery-bgcolor h-screen w-screen flex justify-center items-center bg-[url(src/img/bg-recovery.jpg)] bg-center bg-cover bg-no-repeat">
            
            <form className="form-components p-10 flex flex-col gap-10">

                <div className="flex flex-col gap-10 justify-center items-center">
                    <div className="form-primarydiv">
                        <h3 className="">
                            Não consegue entrar?
                        </h3>
                    </div>
                    <div className="form-secondarydiv">
                        <p className="text-center"> 
                            Há alguns motivos pelos quais você pode não conseguir fazer login. Verifique as opções abaixo para possíveis soluções.
                        </p>
                    </div>
                </div>
                
                    <div className="recovery-div">
                        <a className="recovery-divs gap-5 rounded-md shadow-xl transition duration-200 ease-in-out hover:-translate-y-1 cursor-pointer">
                            <Icon path={mdiAccount} size={5} /> 
                            <span className='w-70 h-40 gap-2 flex flex-col'>
                                <h2 className='text-2xl font-bold'>
                                    Esqueçeu o nome do úsuario?
                                </h2>
                                <p className='text-[23px] text-center text-gray-600'>
                                    Solicite um link para redifinir nova senha aqui.
                                </p>
                            </span>
                        </a>
                        <a className="recovery-divs gap-5 rounded-md shadow-xl transition duration-200 ease-in-out hover:-translate-y-1 cursor-pointer">
                            <Icon path={mdiLockCheck} size={5} />
                            <span className='w-70 h-40 gap-2 flex flex-col'>
                                <h2 className='text-2xl font-bold'>
                                    Esqueçeu a sua senha?
                                </h2>
                                <p className='text-[23px] text-center text-gray-600'>
                                    Caso tenha esquecido a sua senha, pode redifini-la aqui.
                                </p>
                            </span>
                        </a>
                    </div>
                
                

            </form>
        </div>
    ) 
}

export default Recovery;