import Web3 from "web3";

export default async () => {
  let web3;
  
  try{
    const network = window.ethereum.networkVersion;
    switch (network) {
      case "1": {
        alert("Please, connect network rinkeby !");
        window.ethereum.disable();
        return null;
      }
      case "2": {
        alert("Please, connect network rinkeby !");
        window.ethereum.disable();
        return null;
      }
      case "3": {
        alert("Please, connect network rinkeby !");
        window.ethereum.disable();
        return null;
      }
      case "4": {
        if (
          window.ethereum !== "undefined" &&
          typeof window.ethereum != "undefined"
        ) {
          try {
            web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
          } catch (error) {
            alert("Please, allow Metamask access to your account !");
          }
        } else if (
          typeof window !== "undefined" &&
          typeof window.web3 != "undefined"
        ) {
          web3 = new Web3(window.web3.currentProvider);
        } else {
          alert("Please, install Metamask !");
        }
        alert("Connect success !");
        return web3;
      }
      case "42": {
        alert("Please, connect network rinkeby !");
        window.ethereum.disable();
        return null;
      }
      default: {
        alert("Please, connect network rinkeby !");
        window.ethereum.disable();
        return null;
      }
    }
  }catch (err){
    alert("Please, install metamask !");
  }
  
};
