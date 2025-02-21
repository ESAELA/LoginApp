function Recovery () {
    return (
        <div className="recovery-bgcolor h-screen w-screen flex justify-center items-center">
            
            <div className="bg-green-400 w-">
                <h2 className="text-8xl text-white text-center uppercase">
                    Não consegue entrar?
                </h2>
                <p id='paragrado-secondary' className="text-center"> 
                    Há alguns motivos pelos quais você pode não conseguir fazer login. Verifique as opções abaixo para possíveis soluções.
                </p>

                <div className="flex justify-center gap-10">
                    <div className="recovery-grid">
                        <h2>
                            Esqueçeu o seu nome do úsuario?
                        </h2>
                        <p>
                            Solicite um lembrete que será enviado para o teu e-mail.
                        </p>
                    </div>
                    <div className="recovery-grid">
                        <h2>
                            Esqueçeu a sua senha?
                        </h2>
                        <p>
                            Caso tenha esquecido a sua senha, pode redifini-la aqui.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Recovery;