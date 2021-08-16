import axios from 'axios'
const API_CALLER = (endpoint, method,body)=>{
    return axios({
        url: `https://nft-node-server.herokuapp.com/api/nft/${endpoint}`,
        method:method,
        data:body
    })
}

export const getNFTByTokenURL = (tokenURL)=>{
    return API_CALLER(tokenURL,'GET');
}

export const createNewNFT = (data)=>{
    return API_CALLER('createNewNFT','POST',data);
}

export const getListNFTByArrTokenURL = (arrTokenURL)=>{
    return API_CALLER('getmultinft','POST',arrTokenURL);
}