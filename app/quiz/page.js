'use client'
import { useState } from "react";
function Quiz() {

    const [ p1, alteraP1 ] = useState(0)
    const [ p2, alteraP2 ] = useState(0) 
    const [ total, alteraTotal ] = useState(0)
    const [ p3, alteraP3 ] = useState(0)
    const [ p4, alteraP4 ] = useState("")
    const [ p5, alteraP5 ] = useState(0)
 

    function calculaPontos(){
        if( p4 == "Yugioh"){

            alteraP5( 1 )}
        
        alteraTotal(p1+p2+p3+p5)

         
}
    
    
    return (

        <div>
            <h1>Quiz Conradito</h1>
            <p>Assina-le a opção correta!</p>

            <hr/>
            
            <h2>Qual a cor do cavalo branco de Napoleão?</h2>
            <label> <input name="p1" type="radio"  onChange={()=> alteraP1(0) } /> Verde </label>
            <br/>

            <label> <input name="p1" type="radio"  onChange={()=> alteraP1(0) } /> Azul </label>
            <br/>

            <label> <input name="p1" type="radio"  onChange={()=> alteraP1(0) }/> Branco </label>
            <br/>

            <label> <input name="p1" type="radio" onChange={()=> alteraP1(1) } /> Transparente </label>

            <hr/>

            <h2>Qual a melhor letra?</h2>
            <label> <input type name= "p2" type="radio"  onChange={()=> alteraP2(1) } /> A </label>
            <br/>
            <label> <input type name= "p2" type="radio"  onChange={()=> alteraP2(0) }/> B </label>
            <br/>
            <label> <input type name= "p2" type="radio"  onChange={()=> alteraP2(0) } /> C </label>
            <br/>
            <label> <input type name= "p2" type="radio"  onChange={()=> alteraP2(0) }/> X </label>

            <hr/>

            <button onClick={ ()=> calculaPontos()} >Enviar respostas</button>
            
            <p>Total de pontos: {total}</p>
            
            <h2>Qual é o melhor anime do mundo? </h2>
            <label> <input onChange={(e)=> alteraP4 (e.target.value)  } /> </label>

            <hr/>
            <br/>


            <h2>Quanto é 2 vezes 2?</h2>
            <p onClick={ ()=>alteraP3(1) }>4</p>
            <p onClick={ ()=>alteraP3(0) }>aaaa</p>
            <p onClick={ ()=>alteraP3(0) }>0</p>
            <p onClick={ ()=>alteraP3(0) }>6</p>

            



        </div>
        
    );
}



export default Quiz;

