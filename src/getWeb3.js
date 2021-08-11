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
            alert("Connect success !");
            return web3;
          } catch (error) {
            alert("Please, allow Metamask access to your account !");
            return null;
          }
        } else if (
          typeof window !== "undefined" &&
          typeof window.web3 != "undefined"
        ) {
          web3 = new Web3(window.web3.currentProvider);
          alert("Connect success !");
          return web3;
        } else {
          alert("Please, install Metamask !");
          return null;
        }
       
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
