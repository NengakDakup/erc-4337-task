import axios from 'axios';
import * as dotenv from "dotenv";

dotenv.config();

// RPC URL of Ethereum node
const rpcUrl: string = process.env.RPC_URL as string;



async function callSmartContractFunction(method: string, params: any[]): Promise<any> {
    
    const response = await axios.post(rpcUrl, {
        jsonrpc: '2.0',
        id: 1,
        method: method,
        params: params,
    });

    return response.data.result;
    
}

export default callSmartContractFunction
  