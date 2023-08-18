import axios from "axios";

import * as dotenv from "dotenv";

dotenv.config();

// RPC URL of Ethereum node
const stackupURL: string = process.env.STACKUP_URL as string;
const stackupAPIKey: string = process.env.STACKUP_API_KEY as string;

const url: string = stackupURL + stackupAPIKey;

async function submitUserOPeration() : Promise<any>{
    const response = await axios.post(url, {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_sendUserOperation",
        params: [
            {
                sender: "0x0000000000000000000000000000000000000000",
                nonce: "0x0",
                initCode: "0x",
                callData: "0x",
                callGasLimit: "0x0",
                verificationGasLimit: "0x0",
                preVerificationGas: "0x0",
                maxFeePerGas: "0x0",
                maxPriorityFeePerGas: "0x0",
                paymasterAndData: "0x",
                signature: "0x"
            },
            "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
        ]
    });
}

export default submitUserOPeration