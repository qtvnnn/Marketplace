import { createNewNFT, getListNFTByArrTokenURL } from "./../Config_API/Api_Caller";
import { setSafeMint } from './../functionWriteNginNFT';
import { setApprove } from './../Writer_Contract/functionWriteNginNFT';
import { TaoHopDongMuaBan } from './../functionWriteContract';
import { TaoPhienDauGia1 } from "../Writer_Contract/functionWriteMarketplace";

export const LayDanhSachNFTSoHuu = async (contractNginNFT,adOwner,page) => {
    const DanhSachTokenId = await contractNginNFT.methods.tokensOfOwner(adOwner).call();
    const ViTri = DanhSachTokenId.length - page >= 8 ? 8 : DanhSachTokenId.length;

    const DanhSachTokenURLVaTokenId = [];
    for(let i = page; i<ViTri;i++){
        const tokenURL = await contractNginNFT.methods.tokenURI(DanhSachTokenId[i]).call();
        const tokenURL1 = tokenURL.substring(tokenURL.lastIndexOf("/")+1,tokenURL.length);
        const data = {
            tokenURI: tokenURL1,
            TokenId: DanhSachTokenId[i],
        }
        DanhSachTokenURLVaTokenId.push(data);
    }

    const DanhSachTokenURL = [];
    for(let i = 0;i<DanhSachTokenURLVaTokenId.length;i++){
        DanhSachTokenURL.push(DanhSachTokenURLVaTokenId[i].tokenURI);
    }
    if (DanhSachTokenURL.length > 0) {
        let data1 = {
            data:{
                arrList:DanhSachTokenURL,
            }
        };
        const listMetatdata = await getListNFTByArrTokenURL(data1);
        const Data = [];
        for(let i = 0;i<listMetatdata.data.data.length;i++){
            const tokenURIByMetadate = listMetatdata.data.data[i].tokenURI;
            DanhSachTokenURLVaTokenId.filter(danhSach=>{
                if(tokenURIByMetadate === danhSach.tokenURI){
                    const dataMap = {
                        Metadata: listMetatdata.data.data[i],
                        TokenId: danhSach.TokenId,
                    }
                    Data.push(dataMap);
                }
            })
        }
        return Data;
    }
};

export const LayTatCaDanhSachNFTMuaBan = async (contract,contractNginNFT,page) => {
    let DanhSachTatCaCacHopDong = [];
    const TongSoHopDong = await contract.methods.TongSoHopDong().call();
      for (let i = 1; i <= TongSoHopDong; i++) {
        const a = await contract.methods.DanhSachHopDongMuaBan(i).call();
        DanhSachTatCaCacHopDong.push(a);
      }
    const DanhSachTokenId = [];
    for (let i = 0;i<DanhSachTatCaCacHopDong.length;i++){
        DanhSachTokenId.push(DanhSachTatCaCacHopDong[i].tokenId);
    }
    const ViTri = DanhSachTatCaCacHopDong.length - page >= 8 ? 8 : DanhSachTatCaCacHopDong.length;

    const DanhSachTokenURLVaHopDong = [];
    for(let i = page; i<ViTri;i++){
        const tokenURL = await contractNginNFT.methods.tokenURI(DanhSachTatCaCacHopDong[i].tokenId).call();
        const tokenURL1 = tokenURL.substring(tokenURL.lastIndexOf("/")+1,tokenURL.length);
        const data = {
            tokenURI: tokenURL1,
            HopDong: DanhSachTatCaCacHopDong[i],
        }
        DanhSachTokenURLVaHopDong.push(data);
    }

    const DanhSachTokenURL = [];
    for(let i = 0;i<DanhSachTokenURLVaHopDong.length;i++){
        DanhSachTokenURL.push(DanhSachTokenURLVaHopDong[i].tokenURI);
    }
    if (DanhSachTokenURL.length > 0) {
        let data1 = {
            data:{
                arrList:DanhSachTokenURL,
            }
        };
        const listMetatdata = await getListNFTByArrTokenURL(data1);
        const Data = [];
        for(let i = 0;i<listMetatdata.data.data.length;i++){
            const tokenURIByMetadate = listMetatdata.data.data[i].tokenURI;
            DanhSachTokenURLVaHopDong.filter(danhSach=>{
                if(tokenURIByMetadate === danhSach.tokenURI){
                    const dataMap = {
                        Metadata: listMetatdata.data.data[i],
                        HopDong: danhSach.HopDong,
                    }
                    Data.push(dataMap);
                }
            })
        }
        return Data;
    }
    
};

export const LayTatCaDanhSachNFTMuaBanSoHuu = async (contract,contractNginNFT,adOwner,page) => {
    let DanhSachTatCaCacHopDong = [];
    let DanhSachMaHopDongMuaBanSoHuu =await contract.methods.LayDanhSachMaHopDongSoHuu(adOwner).call();
      for (let i = 0; i <= DanhSachMaHopDongMuaBanSoHuu.length; i++) {
        const a = await contract.methods.DanhSachHopDongMuaBan(DanhSachMaHopDongMuaBanSoHuu[i]).call();
        DanhSachTatCaCacHopDong.push(a);
      }
    const DanhSachTokenId = [];
    for (let i = 0;i<DanhSachTatCaCacHopDong.length;i++){
        DanhSachTokenId.push(DanhSachTatCaCacHopDong[i].tokenId);
    }
    const ViTri = DanhSachTatCaCacHopDong.length - page >= 8 ? 8 : DanhSachTatCaCacHopDong.length;

    const DanhSachTokenURLVaHopDong = [];
    for(let i = page; i<ViTri;i++){
        const tokenURL = await contractNginNFT.methods.tokenURI(DanhSachTatCaCacHopDong[i].tokenId).call();
        const tokenURL1 = tokenURL.substring(tokenURL.lastIndexOf("/")+1,tokenURL.length);
        const data = {
            tokenURI: tokenURL1,
            HopDong: DanhSachTatCaCacHopDong[i],
        }
        DanhSachTokenURLVaHopDong.push(data);
    }

    const DanhSachTokenURL = [];
    for(let i = 0;i<DanhSachTokenURLVaHopDong.length;i++){
        DanhSachTokenURL.push(DanhSachTokenURLVaHopDong[i].tokenURI);
    }
    if (DanhSachTokenURL.length > 0) {
        let data1 = {
            data:{
                arrList:DanhSachTokenURL,
            }
        };
        const listMetatdata = await getListNFTByArrTokenURL(data1);
        const Data = [];
        for(let i = 0;i<listMetatdata.data.data.length;i++){
            const tokenURIByMetadate = listMetatdata.data.data[i].tokenURI;
            DanhSachTokenURLVaHopDong.filter(danhSach=>{
                if(tokenURIByMetadate === danhSach.tokenURI){
                    const dataMap = {
                        Metadata: listMetatdata.data.data[i],
                        HopDong: danhSach.HopDong,
                    }
                    Data.push(dataMap);
                }
            })
        }
        return Data;
    }
    
};

export const LayTatCaDanhSachNFTDauGia = async (contract,contractNginNFT,page) => {
    let DanhSachTatCaCacPhien = [];
    const TongSoPhien = await contract.methods.TongSoPhien().call();
    for (let i = 1; i <= TongSoPhien; i++) {
        const a = await contract.methods.DanhSachTatCaCacPhienDauGia(i).call();
        DanhSachTatCaCacPhien.push(a);
    }
    const ViTri = DanhSachTatCaCacPhien.length - page >= 8 ? 8 : DanhSachTatCaCacPhien.length;

    const DanhSachTokenURLVaPhien = [];
    for(let i = page; i<ViTri;i++){
        const tokenURL = await contractNginNFT.methods.tokenURI(DanhSachTatCaCacPhien[i].tokenId).call();
        const tokenURL1 = tokenURL.substring(tokenURL.lastIndexOf("/")+1,tokenURL.length);
        const data = {
            tokenURI: tokenURL1,
            Phien: DanhSachTatCaCacPhien[i],
        }
        DanhSachTokenURLVaPhien.push(data);
    }

    const DanhSachTokenURL = [];
    for(let i = 0;i<DanhSachTokenURLVaPhien.length;i++){
        DanhSachTokenURL.push(DanhSachTokenURLVaPhien[i].tokenURI);
    }
    if (DanhSachTokenURL.length > 0) {
        let data1 = {
            data:{
                arrList:DanhSachTokenURL,
            }
        };
        const listMetatdata = await getListNFTByArrTokenURL(data1);
        const Data = [];
        for(let i = 0;i<listMetatdata.data.data.length;i++){
            const tokenURIByMetadate = listMetatdata.data.data[i].tokenURI;
            DanhSachTokenURLVaPhien.filter(danhSach=>{
                if(tokenURIByMetadate === danhSach.tokenURI){
                    const dataMap = {
                        Metadata: listMetatdata.data.data[i],
                        Phien: danhSach.Phien,
                    }
                    Data.push(dataMap);
                }
            })
        }
        return Data;
    }
};

export const LayTatCaDanhSachNFTDauGiaSoHuu = async (contract,contractNginNFT,adOwner,page) => {
    let DanhSachTatCaCacPhien = [];
    const DanhSachMaPhienDauGiaSoHuu = await contract.methods.LayDanhSachMaPhienDauGiaSoHuu(adOwner).call();
    for (let i = 0; i <= DanhSachMaPhienDauGiaSoHuu.length; i++) {
        const a = await contract.methods.DanhSachTatCaCacPhienDauGia(DanhSachMaPhienDauGiaSoHuu[i]).call();
        DanhSachTatCaCacPhien.push(a);
    }
    const ViTri = DanhSachTatCaCacPhien.length - page >= 8 ? 8 : DanhSachTatCaCacPhien.length;

    const DanhSachTokenURLVaPhien = [];
    for(let i = page; i<ViTri;i++){
        const tokenURL = await contractNginNFT.methods.tokenURI(DanhSachTatCaCacPhien[i].tokenId).call();
        const tokenURL1 = tokenURL.substring(tokenURL.lastIndexOf("/")+1,tokenURL.length);
        const data = {
            tokenURI: tokenURL1,
            Phien: DanhSachTatCaCacPhien[i],
        }
        DanhSachTokenURLVaPhien.push(data);
    }

    const DanhSachTokenURL = [];
    for(let i = 0;i<DanhSachTokenURLVaPhien.length;i++){
        DanhSachTokenURL.push(DanhSachTokenURLVaPhien[i].tokenURI);
    }
    if (DanhSachTokenURL.length > 0) {
        let data1 = {
            data:{
                arrList:DanhSachTokenURL,
            }
        };
        const listMetatdata = await getListNFTByArrTokenURL(data1);
        const Data = [];
        for(let i = 0;i<listMetatdata.data.data.length;i++){
            const tokenURIByMetadate = listMetatdata.data.data[i].tokenURI;
            DanhSachTokenURLVaPhien.filter(danhSach=>{
                if(tokenURIByMetadate === danhSach.tokenURI){
                    const dataMap = {
                        Metadata: listMetatdata.data.data[i],
                        Phien: danhSach.Phien,
                    }
                    Data.push(dataMap);
                }
            })
        }
        return Data;
    }
};

export const LayTatCaDanhSachNFTDauGiaThamGia = async (contract,contractNginNFT,adOwner,page) => {
    let DanhSachTatCaCacPhien = [];
    const DanhSachMaPhienDauGiaThamGia = await contract.methods.LayDanhSachMaPhienDauGiaThamGia(adOwner).call();
    for (let i = 0; i <= DanhSachMaPhienDauGiaThamGia.length; i++) {
        const a = await contract.methods.DanhSachTatCaCacPhienDauGia(DanhSachMaPhienDauGiaThamGia[i]).call();
        DanhSachTatCaCacPhien.push(a);
    }
    const ViTri = DanhSachTatCaCacPhien.length - page >= 8 ? 8 : DanhSachTatCaCacPhien.length;

    const DanhSachTokenURLVaPhien = [];
    for(let i = page; i<ViTri;i++){
        const tokenURL = await contractNginNFT.methods.tokenURI(DanhSachTatCaCacPhien[i].tokenId).call();
        const tokenURL1 = tokenURL.substring(tokenURL.lastIndexOf("/")+1,tokenURL.length);
        const data = {
            tokenURI: tokenURL1,
            Phien: DanhSachTatCaCacPhien[i],
        }
        DanhSachTokenURLVaPhien.push(data);
    }

    const DanhSachTokenURL = [];
    for(let i = 0;i<DanhSachTokenURLVaPhien.length;i++){
        DanhSachTokenURL.push(DanhSachTokenURLVaPhien[i].tokenURI);
    }
    if (DanhSachTokenURL.length > 0) {
        let data1 = {
            data:{
                arrList:DanhSachTokenURL,
            }
        };
        const listMetatdata = await getListNFTByArrTokenURL(data1);
        const Data = [];
        for(let i = 0;i<listMetatdata.data.data.length;i++){
            const tokenURIByMetadate = listMetatdata.data.data[i].tokenURI;
            DanhSachTokenURLVaPhien.filter(danhSach=>{
                if(tokenURIByMetadate === danhSach.tokenURI){
                    const dataMap = {
                        Metadata: listMetatdata.data.data[i],
                        Phien: danhSach.Phien,
                    }
                    Data.push(dataMap);
                }
            })
        }
        return Data;
    }
};

export const TaoNFT = (contractNginNFT, nft, account) => {
    createNewNFT(nft).then().then((res) => {
        const { data } = res;
        setSafeMint(contractNginNFT, account, account, data.tokenId).then((res) => {
          if(res.events.Transfer.returnValues.tokenId){
            console.log(res.events.Transfer.returnValues.tokenId);
            window.alert("Create NFT success !!!");
          }
        });
      })
      .catch((err) => {
        window.alert("Create nft false !!!");
        console.log(err);
      });
      
};

export const TaoNFTMuaBan = (contract,contractNginNFT,tokenId,tienHang,account) => {
    setApprove( contractNginNFT,account,"0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",tokenId).then(() => {
      TaoHopDongMuaBan(contract, account, tokenId, tienHang);
    });
};

export const TaoPhienThucHienDauGia = (contract,contractNginNFT,tokenId,giaKhoiDiem,giaBanLuon,buocGia,thoiGianBatDau,thoiGianKetThuc,account) => {
    setApprove(contractNginNFT,account,"0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",tokenId).then(() => {
      TaoPhienDauGia1(contract,account,tokenId,giaKhoiDiem,giaBanLuon,buocGia,thoiGianBatDau,thoiGianKetThuc);
    });
};