export const setApprove = (contract, account, adApprove, tokenId) => {
  return contract.methods.approve(adApprove, tokenId).estimateGas({ from: account });
};

export const setSafeMint = (contract, account, address, tokenHash) => {
  return contract.methods.safeMint(address, tokenHash).estimateGas({ from: account });
};