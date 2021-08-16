export const getbalanceOf = (contract,address)=>{
    let balance;
    contract.methods.balanceOf(address).call().then(res=>{
        balance = res;
    })
    return balance;
}

export const getApprovedToTokenId = (contract,tokenId)=>{
    let address;
    contract.methods.getApproved(tokenId).call().then(res=>{
        address = res;
    })
    return address;
}

export const getOwnerOf = (contract,tokenId)=>{
    let owner;
    contract.methods.ownerOf(tokenId).call().then(res=>{
        owner = res;
    })
    return owner;
}

export const getTokenByIndex = (contract, index)=>{
    let token;
    contract.methods.tokenByIndex(index).call().then(res=>{
        token = res;
    })
    return token;
}

export const getTokenOfOwnerByIndex=(contract, adOwner, index)=>{
    let token;
    contract.methods.tokenOfOwnerByIndex(adOwner,index).call().then(res => {
        token = res;
    })
    return token;
}

export const getTokenURIByTokenID = async (contract, tokenId)=>{
    const tokenURI = await contract.methods.tokenURI(tokenId).call();
    const tokenURL = tokenURI.substring(tokenURI.lastIndexOf("/")+1,tokenURI.length);
    return tokenURL;
}

export const getTokenURI = (contract, adOwner)=>{
    let token;
    contract.methods.tokensOfOwner(adOwner).call().then(res=>{
        token = res;
    })
    return token;
}