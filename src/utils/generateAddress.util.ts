import { ethers } from 'ethers';

import { UserWallet } from '../types';

import generateMnemonic from './generateMnemonic';

async function generateEthereumAddressFromMnemonic(): Promise<UserWallet> {
  // generate the mnemonic
  let mnemonic: string = generateMnemonic();
  // Convert the mnemonic to a seed phrase using ethers.js
  const privateKey = await ethers.Wallet.fromMnemonic(mnemonic);
  
  // Create an ethers.js wallet instance
  const signer = new ethers.Wallet(privateKey);

  // Get the Ethereum address from the signer
  const publicKey = await signer.getAddress();

  return {mnemonic, privateKey: signer.privateKey, publicKey};
}

export default generateEthereumAddressFromMnemonic


