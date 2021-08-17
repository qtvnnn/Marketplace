export const setApprove = (contract, account, spender, amount)=>{
    return contract.methods.approve(spender,amount).send({from:account});
}

export const setTransfer = (contract, account, recipient, amount)=>{
    return contract.methods.transfer(recipient,amount).send({from:account});
}

export const setTransferFrom = (contract, account, spender, recipient, amount)=>{
    return  contract.methods.transferFrom(spender,recipient,amount).send({from:account});
}