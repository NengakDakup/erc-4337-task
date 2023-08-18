import { Request, Response, NextFunction } from 'express';
import { ethers } from "ethers";

import generateEthereumAddressFromMnemonic from "../utils/generateAddress.util";
import { UserWallet } from "../types";
import callSmartContractFunction from "../utils/callSmartContractFunction.util";
let contractAbi = require("../abis/SimpleAccountFactory.abi.json");

class UserController {
  async createAccount(req: Request, res: Response, next: NextFunction) {
    try {
        // Logic to generate an ERC-4337 smart wallet/account
        // generate a new etherem address a randomly generated mnemonic
        let newAccount : UserWallet = await generateEthereumAddressFromMnemonic();

        // call the getAddress function on the SimpleAccountFactory contract
        const contractAddress: string = process.env.FACTORY_ADDRESS as string;

        // method to be called on the contract
        const method = 'getAddress';
        // param to be sent to the method
        const params: any[] = [newAccount.publicKey, 0];

        // encode the data field
        const contract = new ethers.Contract(contractAddress, contractAbi);
        const encodedData = contract.interface.encodeFunctionData(method, params);

        let counterfactualAddress: any = await callSmartContractFunction(
            'eth_call',
            [
                {
                    to: contractAddress,
                    data: encodedData,
                }, 
                'latest'
            ]
        )
        
        res.status(201).json({status: 'success', data: {...newAccount, counterfactualAddress}})
    } catch (error: any) {
        next(error);
    }
    
  }

}

export default UserController;
