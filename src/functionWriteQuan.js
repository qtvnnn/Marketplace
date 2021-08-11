export const setApprove = (contract, account, spender, amount)=>{
    contract.methods.approve(spender,amount).send({from:account});
}

export const setTransfer = (contract, account, recipient, amount)=>{
    contract.methods.transfer(recipient,amount).send({from:account});
}

export const setTransferFrom = (contract, account, spender, recipient, amount)=>{
    contract.methods.transferFrom(spender,recipient,amount).send({from:account});
}