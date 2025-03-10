'use client'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


     export default function Contato(){
        const [ nome, alteraNome ] = useState("")
        const [ mensagem, alteraMensagem ] = useState("")
        // Testando um teste com uma testada 

    

        function enviaMensagem(e){
            e.preventDefault()       

        if( nome == "" || mensagem == ""){

        }else{
            console.log("Mensagem enviada com sucesso!")
        }

        
    }

    return(
        <div>

            <h1>Página de contato</h1>
            <p>Entre em contato conosco.</p>

        <hr/>

        <form onSubmit={(e)=> enviaMensagem(e)} >

            <label>
                Digite seu nome
                <input onClick={(e)=> alteraNome(e.target.value) }  />
            </label>

            <br/>

            <label>
                <br/>
                
            </label>

            <label>
                Digite sua mensagem: 
                <input/>
            </label>

            <br/>

            <button>Enviar</button>

            </form>

        </div>)}




















