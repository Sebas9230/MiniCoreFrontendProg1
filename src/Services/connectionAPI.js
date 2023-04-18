import axios from "axios";

 export async function  getContratoClientes(fechaInicio, fechaFin)
{
    let params=`FechaInicio=${fechaInicio}&FechaFin=${fechaFin}`;
    //let response= await axios.get("http://alexanderbustos-001-site1.ctempurl.com/api/ContratosClientes?"+params);
    let response= await axios.get("http://localhost:5145/api/ContratosClientes?"+params);
    return response.data.listaContratos;   
}
export async function  getClienteslist()
{
    //let response = await axios.get("http://alexanderbustos-001-site1.ctempurl.com/api/Clientes");
    let response = await axios.get("http://localhost:5145/api/Clientes");
    let cliente= response.data;
    return cliente;   
}

export async function  getContratoslist()
{
    //let response = await axios.get("http://alexanderbustos-001-site1.ctempurl.com/api/Contratos");
    let response = await axios.get("http://localhost:5145/api/Contratos");
    let contratos= response.data;
    return contratos;   
}