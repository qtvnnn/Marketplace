import Mark from "./Contract/Contract.json";

export default (web3) => {
  return new web3.eth.Contract(
    Mark.abi,
    "0xdFeD5CF72c3bB2bD905a099e689CdB24Fb9FEF3c"
  );
};
