export const setApproveQuan = (contract, account, spender, amount) => {
  return contract.methods.approve(spender, amount).estimateGas({ from: account });
};