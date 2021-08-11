export const getAllowance = (contract, owner, spender)=>{
    let a;
    contract.methods.allowance(owner,spender).call().then(res=>{
        a = res;
    })
    return a;
}

export const getBalenceOf = (contract,adAccount)=>{
    let a;
    contract.methods.balanceOf(adAccount).call().then(res=>{
        a = res;
    })
    return a;
}