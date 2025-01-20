'use client' //Necessário para o funcionamento do useState, tem como objetivo rodar componentes no lado do cliente
import { useState } from "react";

export function Card() {
    //Valores que vão aparecer na página ao carregada
    const [percent, setPercent] = useState<number>(2.6)
    const [totalUsers, setTotal] = useState<number>(18765)

    //Valores que serão inseridos pelos inputs
    const [percentInput, setPercentInput] = useState('');
    const [totalInput, setTotalInput] = useState('');

    //Atualiza o percent e o total (se os valores estiverem vazios) e depois limpa os inputs
    const handleUpdate = () =>{
        if(percentInput !== "")setPercent(Number(percentInput));
        if(totalInput !== "")setTotal(Number(totalInput));
        setPercentInput("");
        setTotalInput("");
    }

    return (
        <div>
            <h2 className="text-xl font-bold pb-2">Total de Usuários Ativos</h2>
            <p>{percent.toFixed(1)}%</p>
            <p>{totalUsers.toFixed()} usuários</p>
            <div className="flex gap-2 p-2 py-3">
                <input type="number"
                className="text-black"
                placeholder="Porcentagem"
                value={percentInput}
                onChange={(data) => setPercentInput(data.target.value)}/> {/*Evento para mudar o dado do valor*/}
                <button className="botao" onClick={handleUpdate}>Enviar</button> {/*Aplicação da função handleUpdate após o evento de clique*/}
            </div>

            <div className="flex gap-2 p-2">
                <input type="number"
                className="text-black"
                placeholder="Total de Usuários"
                value={totalInput}
                onChange={(data) => setTotalInput(data.target.value)}/> {/*Evento para mudar o dado do valor*/}
                <button className="botao" onClick={handleUpdate}>Enviar</button> {/*Aplicação da função handleUpdate após o evento de clique*/}
            </div>
        </div>
    );
}