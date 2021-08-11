import Mark from "./Contract/Contract.json";

export default (web3) => {
  return new web3.eth.Contract(
    Mark.abi,
    "0x4F212E42a5B66cC587489b3050409C477963C389"
  );
};
