import NginNFT from "../Contract/NGINNFT.json";

export default (web3) => {
  return new web3.eth.Contract(
    NginNFT.abi,
    "0xc507895F4888b1e77712b47E1C26d4eaCc75f224"
  );
};
