import Mark from "../Contract/Marketplace.json";

export default (web3) => {
  return new web3.eth.Contract(
    Mark.abi,
    "0x5Eda6E2a4a023c9D69Da477A6425550B2794B057"
  );
};
