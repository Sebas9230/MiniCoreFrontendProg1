import React,{ useState} from 'react'
import {getContratoClientes} from "../Services/connectionAPI"
import {getClienteslist} from "../Services/connectionAPI"
import {getContratoslist} from "../Services/connectionAPI"
import "./Inicio.css"

const FilaResumen = ({
  data,
  I
}) => {
  return (
    <tr key={I}> 
      <td>
        {data.nombreCliente}
      </td>
      <td>
        {data.montoTotal}
      </td>
    </tr>
  )
}

const FilaClientes = ({
  cliente,
  I
}) => {
  return (
    <tr key={I}> 
      <td >
        {cliente.idCliente}
      </td>
      <td>
        {cliente.nombreCliente}
      </td>
    </tr>
  )
}

const FilaContratos = ({
  contrato,
  I
}) => {
  return (
    <tr key={I}> 
      <td>
        {contrato.contratos}
      </td>
      <td>
        {contrato.monto}
      </td>
      <td>
        {contrato.fechaContrato}
      </td>
    </tr>
  )
}

export const Inicio = () => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [data,setData] = useState([]);
  const [clientes,setClientes] = useState([]);
  const [contratos,setContratos] = useState([]);

  async function getCliente(){
      const clientes = await getClienteslist();
      setClientes(clientes);

  }
  async function getContratos(){
    const contratos = await getContratoslist();
    console.log(contratos);
    setContratos(contratos);

}
   async function getData()
  {
    const results = await getContratoClientes(fechaInicio,fechaFin);
    setData(results);
  }
  


  return (
    <>
    <div className='titulo'>Inicio</div>
    <button onClick={getCliente}>Ver clientes</button>
    <button onClick={getContratos}>Ver Contratos</button>
    <table className='table'>
      <thead>
      <tr>
      <th>ID Cliente</th>
      <th>Nombre de Cliente</th>
      </tr>
      </thead>
      <tbody>
        {clientes.map((c,I) => <FilaClientes cliente={c} I={I} />)}
      </tbody>
    </table>
    <table className='table'>
      <thead>
      <tr>
      <th>Contratos</th>
      <th>Monto</th>
      <th>Fecha</th>
      </tr>
      </thead>
      <tbody>
        {contratos.map((co,I) => <FilaContratos contrato={co} I={I} />)}
      </tbody>
    </table>
    <label htmlFor="start">Fecha Inicio:</label>
    <input type="date" id="start" value={fechaInicio} onChange={fi => setFechaInicio(fi.target.value)}/>
    <label htmlFor="end" >Fecha fin:</label>
    <input type="date" id="end" value={fechaFin} onChange={fe => setFechaFin(fe.target.value)}/>
    <button onClick={getData}>Buscar</button>
    <table className='table'>
      <thead>
      <tr>
      <th>Clientes</th>
      <th>Monto</th>
      </tr>
      </thead>
      <tbody>
        {data.map((d,I) => <FilaResumen data={d} I={I} />)}
      </tbody>
    </table>
    
    </>
  )
}
 export default Inicio