import Quan from "../Contract/Quan.json";

export default (web3) => {
  return new web3.eth.Contract(
    Quan.abi,
    "0xBfc412De2A8B6F7cDB98218de8B6ce8042459426"
  );
};
