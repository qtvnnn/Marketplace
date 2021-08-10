import Ngin from "./Contract/NGINNFT.json";

export default (web3) => {
  return new web3.eth.Contract(
    Ngin.abi,
    "0x5684E1Bf3b00bbD3c230807d19ed8C5F09Ff13Ee"
  );
};
