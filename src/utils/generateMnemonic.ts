import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';

function generateMnemonic(): string {
    // Generate 12 random words
    const mn = bip39.generateMnemonic(wordlist, 128);
    return mn;
}

export default generateMnemonic
