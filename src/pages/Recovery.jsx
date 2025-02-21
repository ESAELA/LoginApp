function Recovery () {
    return (
        <div className="recovery-bgcolor h-screen w-screen flex justify-center items-center">
            
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
                
    
                <div className="flex flex-row justify-center gap-10">
                    <div className="recovery-divs">
                        <h2>
                            Esqueçeu o seu nome do úsuario?
                        </h2>
                        <p>
                            Solicite um lembrete que será enviado para o teu e-mail.
                        </p>
                    </div>
                    <div className="recovery-divs">
                        <h2>
                            Esqueçeu a sua senha?
                        </h2>
                        <p>
                            Caso tenha esquecido a sua senha, pode redifini-la aqui.
                        </p>
                    </div>
                </div>

            </form>
        </div>
    ) 
}

export default Recovery;