import Quan from './Contract/ContractQuan.json';

export default (web3)=>{
    return new web3.eth.Contract(Quan.abi,"0x5c45B3516689eCd72E0580111BbEd69CA237C7Dc");
}