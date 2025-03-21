'use client'
import { useState } from "react";
import "./painel.css";

function Painel(){

     const [usuario, alterarUsuario] = useState("")
     const [ senha, alterarSenha ] = useState("")
     const [ erro, SetError] = useState(false)
     const [ logado, SetLogado] = useState(false)

     function entrar(){
        if( usuario == "conrado" && senha == "123"){    
         SetLogado(true)

        }else{
            SetError(true)
     }

}

       


    return (
        <div>
            <h1>Painel Administrativo</h1>



            <label>
                Digite o usuário:
                <input onChange={ (e)=> alterarUsuario(e.target.value)} />
            </label>

            <br/>

            <label>
                Digite a senha:
                <input onChange={ (e)=> alterarSenha(e.target.value)} />
            </label>

            <br/>

            {
                 erro == true ?
                <div className="erro" > 
                <p>Usuário ou senha incorretos</p>
                </div>
                :

            <div></div>
            }

            { 
            logado == true ?
            <div className="logado" > 
            <p>Logado com sucesso</p>
            </div>
            :
            
            <div></div>
        
        }




            
            <button onClick={ ()=> entrar() }>  Entrar</button>
             </div>
        );
    }

   export default Painel;