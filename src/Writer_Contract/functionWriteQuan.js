export const setApproveQuan = (contract, account, spender, amount) => {
  return contract.methods
    .approve(spender, amount)
    .estimateGas({ from: account });
};

export const setTransferQuan = (contract, account, recipient, amount) => {
  return contract.methods
    .transfer(recipient, amount)
    .estimateGas({ from: account });
};

export const setTransferFromQuan = (
  contract,
  account,
  spender,
  recipient,
  amount
) => {
  return contract.methods
    .transferFrom(spender, recipient, amount)
    .estimateGas({ from: account });
};
