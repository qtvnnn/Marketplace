export const setApprove = (contract, account, adApprove, tokenId) => {
  return contract.methods
    .approve(adApprove, tokenId)
    .estimateGas({ from: account });
};

export const setBurn = (contract, account, tokenId) => {
  return contract.methods.burn(tokenId).estimateGas({ from: account });
};

export const setSafeMint = (contract, account, address, tokenHash) => {
  return contract.methods
    .safeMint(address, tokenHash)
    .estimateGas({ from: account });
};

export const setSafeTransferFrom = (
  contract,
  account,
  adFrom,
  adTo,
  tokenId
) => {
  return contract.methods
    .safeTransferFrom(adFrom, adTo, tokenId)
    .estimateGas({ from: account });
};

export const setTransferFrom = (contract, account, adFrom, adTo, tokenId) => {
  return contract.methods
    .transferFrom(adFrom, adTo, tokenId)
    .estimateGas({ from: account });
};
