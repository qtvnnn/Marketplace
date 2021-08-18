import {
  createNewNFT,
  getListNFTByArrTokenURL,
} from "./../Config_API/Api_Caller";
import {
  setApprove,
  setSafeMint,
} from "./../Writer_Contract/functionWriteNginNFT";
import { setApproveQuan } from "./../Writer_Contract/functionWriteQuan";
import {
  HuyBanHang,
  KetThucPhienDauGia,
  TaoHopDongMuaBan,
  ThamGiaDauGia,
  MuaHang,
  MuaLuonPhienDauGia,
} from "./../Writer_Contract/functionWriteMarketplace";
import { TaoPhienDauGia1 } from "../Writer_Contract/functionWriteMarketplace";

//collection
export const LayDanhSachNFTSoHuu = async (contractNginNFT, adOwner, page) => {
  const DanhSachTokenId = await contractNginNFT.methods
    .tokensOfOwner(adOwner)
    .call();
  const ViTri = DanhSachTokenId.length - page >= 8 ? 8 : DanhSachTokenId.length;

  const DanhSachTokenURLVaTokenId = [];
  for (let i = page; i < ViTri; i++) {
    const tokenURL = await contractNginNFT.methods
      .tokenURI(DanhSachTokenId[i])
      .call();
    const tokenURL1 = tokenURL.substring(
      tokenURL.lastIndexOf("/") + 1,
      tokenURL.length
    );
    const data = {
      tokenURI: tokenURL1,
      TokenId: DanhSachTokenId[i],
    };
    DanhSachTokenURLVaTokenId.push(data);
  }

  const DanhSachTokenURL = [];
  for (let i = 0; i < DanhSachTokenURLVaTokenId.length; i++) {
    DanhSachTokenURL.push(DanhSachTokenURLVaTokenId[i].tokenURI);
  }
  if (DanhSachTokenURL.length > 0) {
    let data1 = {
      data: {
        arrList: DanhSachTokenURL,
      },
    };
    const listMetatdata = await getListNFTByArrTokenURL(data1);
    const Data = [];
    for (let i = 0; i < listMetatdata.data.data.length; i++) {
      const tokenURIByMetadate = listMetatdata.data.data[i].tokenURI;
      DanhSachTokenURLVaTokenId.filter((danhSach) => {
        if (tokenURIByMetadate === danhSach.tokenURI) {
          const dataMap = {
            Metadata: listMetatdata.data.data[i],
            TokenId: danhSach.TokenId,
          };
          Data.push(dataMap);
        }
      });
    }
    return Data;
  }
};

// nft mua ban home page
export const LayTatCaDanhSachNFTMuaBan = async (
  contract,
  contractNginNFT,
  page
) => {
  let DanhSachTatCaCacHopDong = [];
  const TongSoHopDong = await contract.methods.TongSoHopDong().call();
  for (let i = 1; i <= TongSoHopDong; i++) {
    const a = await contract.methods.DanhSachHopDongMuaBan(i).call();
    DanhSachTatCaCacHopDong.push(a);
  }
  const DanhSachTokenId = [];
  for (let i = 0; i < DanhSachTatCaCacHopDong.length; i++) {
    DanhSachTokenId.push(DanhSachTatCaCacHopDong[i].tokenId);
  }
  const ViTri =
    DanhSachTatCaCacHopDong.length - page >= 8
      ? 8
      : DanhSachTatCaCacHopDong.length;

  const DanhSachTokenURLVaHopDong = [];
  for (let i = page; i < ViTri; i++) {
    const tokenURL = await contractNginNFT.methods
      .tokenURI(DanhSachTatCaCacHopDong[i].tokenId)
      .call();
    const tokenURL1 = tokenURL.substring(
      tokenURL.lastIndexOf("/") + 1,
      tokenURL.length
    );
    const data = {
      tokenURI: tokenURL1,
      HopDong: DanhSachTatCaCacHopDong[i],
    };
    DanhSachTokenURLVaHopDong.push(data);
  }

  const DanhSachTokenURL = [];
  for (let i = 0; i < DanhSachTokenURLVaHopDong.length; i++) {
    DanhSachTokenURL.push(DanhSachTokenURLVaHopDong[i].tokenURI);
  }
  if (DanhSachTokenURL.length > 0) {
    let data1 = {
      data: {
        arrList: DanhSachTokenURL,
      },
    };
    const listMetatdata = await getListNFTByArrTokenURL(data1);
    const Data = [];
    for (let i = 0; i < listMetatdata.data.data.length; i++) {
      const tokenURIByMetadate = listMetatdata.data.data[i].tokenURI;
      DanhSachTokenURLVaHopDong.filter((danhSach) => {
        if (tokenURIByMetadate === danhSach.tokenURI) {
          const dataMap = {
            Metadata: listMetatdata.data.data[i],
            HopDong: danhSach.HopDong,
          };
          Data.push(dataMap);
        }
      });
    }
    return Data;
  }
};

// nft mua ban profile
export const LayTatCaDanhSachNFTMuaBanSoHuu = async (
  contract,
  contractNginNFT,
  adOwner,
  page
) => {
  let DanhSachTatCaCacHopDong = [];
  let DanhSachMaHopDongMuaBanSoHuu = await contract.methods
    .LayDanhSachMaHopDongSoHuu(adOwner)
    .call();
  for (let i = 0; i <= DanhSachMaHopDongMuaBanSoHuu.length; i++) {
    const a = await contract.methods
      .DanhSachHopDongMuaBan(DanhSachMaHopDongMuaBanSoHuu[i])
      .call();
    DanhSachTatCaCacHopDong.push(a);
  }
  const DanhSachTokenId = [];
  for (let i = 0; i < DanhSachTatCaCacHopDong.length; i++) {
    DanhSachTokenId.push(DanhSachTatCaCacHopDong[i].tokenId);
  }
  const ViTri =
    DanhSachTatCaCacHopDong.length - page >= 8
      ? 8
      : DanhSachTatCaCacHopDong.length;

  const DanhSachTokenURLVaHopDong = [];
  for (let i = page; i < ViTri; i++) {
    const tokenURL = await contractNginNFT.methods
      .tokenURI(DanhSachTatCaCacHopDong[i].tokenId)
      .call();
    const tokenURL1 = tokenURL.substring(
      tokenURL.lastIndexOf("/") + 1,
      tokenURL.length
    );
    const data = {
      tokenURI: tokenURL1,
      HopDong: DanhSachTatCaCacHopDong[i],
    };
    DanhSachTokenURLVaHopDong.push(data);
  }

  const DanhSachTokenURL = [];
  for (let i = 0; i < DanhSachTokenURLVaHopDong.length; i++) {
    DanhSachTokenURL.push(DanhSachTokenURLVaHopDong[i].tokenURI);
  }
  if (DanhSachTokenURL.length > 0) {
    let data1 = {
      data: {
        arrList: DanhSachTokenURL,
      },
    };
    const listMetatdata = await getListNFTByArrTokenURL(data1);
    const Data = [];
    for (let i = 0; i < listMetatdata.data.data.length; i++) {
      const tokenURIByMetadate = listMetatdata.data.data[i].tokenURI;
      DanhSachTokenURLVaHopDong.filter((danhSach) => {
        if (tokenURIByMetadate === danhSach.tokenURI) {
          const dataMap = {
            Metadata: listMetatdata.data.data[i],
            HopDong: danhSach.HopDong,
          };
          Data.push(dataMap);
        }
      });
    }
    return Data;
  }
};

// nft dau gia home page
export const LayTatCaDanhSachNFTDauGia = async (
  contract,
  contractNginNFT,
  page
) => {
  let DanhSachTatCaCacPhien = [];
  const TongSoPhien = await contract.methods.TongSoPhien().call();
  for (let i = 1; i <= TongSoPhien; i++) {
    const a = await contract.methods.DanhSachTatCaCacPhienDauGia(i).call();
    DanhSachTatCaCacPhien.push(a);
  }
  const ViTri =
    DanhSachTatCaCacPhien.length - page >= 8 ? 8 : DanhSachTatCaCacPhien.length;

  const DanhSachTokenURLVaPhien = [];
  for (let i = page; i < ViTri; i++) {
    const tokenURL = await contractNginNFT.methods
      .tokenURI(DanhSachTatCaCacPhien[i].tokenId)
      .call();
    const tokenURL1 = tokenURL.substring(
      tokenURL.lastIndexOf("/") + 1,
      tokenURL.length
    );
    const data = {
      tokenURI: tokenURL1,
      Phien: DanhSachTatCaCacPhien[i],
    };
    DanhSachTokenURLVaPhien.push(data);
  }

  const DanhSachTokenURL = [];
  for (let i = 0; i < DanhSachTokenURLVaPhien.length; i++) {
    DanhSachTokenURL.push(DanhSachTokenURLVaPhien[i].tokenURI);
  }
  if (DanhSachTokenURL.length > 0) {
    let data1 = {
      data: {
        arrList: DanhSachTokenURL,
      },
    };
    const listMetatdata = await getListNFTByArrTokenURL(data1);
    const Data = [];
    for (let i = 0; i < listMetatdata.data.data.length; i++) {
      const tokenURIByMetadate = listMetatdata.data.data[i].tokenURI;
      DanhSachTokenURLVaPhien.filter((danhSach) => {
        if (tokenURIByMetadate === danhSach.tokenURI) {
          const dataMap = {
            Metadata: listMetatdata.data.data[i],
            Phien: danhSach.Phien,
          };
          Data.push(dataMap);
        }
      });
    }
    return Data;
  }
};

// nft dau gia profile
export const LayTatCaDanhSachNFTDauGiaSoHuu = async (
  contract,
  contractNginNFT,
  adOwner,
  page
) => {
  let DanhSachTatCaCacPhien = [];
  const DanhSachMaPhienDauGiaSoHuu = await contract.methods
    .LayDanhSachMaPhienDauGiaSoHuu(adOwner)
    .call();
  for (let i = 0; i <= DanhSachMaPhienDauGiaSoHuu.length; i++) {
    const a = await contract.methods
      .DanhSachTatCaCacPhienDauGia(DanhSachMaPhienDauGiaSoHuu[i])
      .call();
    DanhSachTatCaCacPhien.push(a);
  }
  const ViTri =
    DanhSachTatCaCacPhien.length - page >= 8 ? 8 : DanhSachTatCaCacPhien.length;

  const DanhSachTokenURLVaPhien = [];
  for (let i = page; i < ViTri; i++) {
    const tokenURL = await contractNginNFT.methods
      .tokenURI(DanhSachTatCaCacPhien[i].tokenId)
      .call();
    const tokenURL1 = tokenURL.substring(
      tokenURL.lastIndexOf("/") + 1,
      tokenURL.length
    );
    const data = {
      tokenURI: tokenURL1,
      Phien: DanhSachTatCaCacPhien[i],
    };
    DanhSachTokenURLVaPhien.push(data);
  }

  const DanhSachTokenURL = [];
  for (let i = 0; i < DanhSachTokenURLVaPhien.length; i++) {
    DanhSachTokenURL.push(DanhSachTokenURLVaPhien[i].tokenURI);
  }
  if (DanhSachTokenURL.length > 0) {
    let data1 = {
      data: {
        arrList: DanhSachTokenURL,
      },
    };
    const listMetatdata = await getListNFTByArrTokenURL(data1);
    const Data = [];
    for (let i = 0; i < listMetatdata.data.data.length; i++) {
      const tokenURIByMetadate = listMetatdata.data.data[i].tokenURI;
      DanhSachTokenURLVaPhien.filter((danhSach) => {
        if (tokenURIByMetadate === danhSach.tokenURI) {
          const dataMap = {
            Metadata: listMetatdata.data.data[i],
            Phien: danhSach.Phien,
          };
          Data.push(dataMap);
        }
      });
    }
    return Data;
  }
};

// filter tham gia
export const LayTatCaDanhSachNFTDauGiaThamGia = async (
  contract,
  contractNginNFT,
  adOwner,
  page
) => {
  let DanhSachTatCaCacPhien = [];
  const DanhSachMaPhienDauGiaThamGia = await contract.methods
    .LayDanhSachMaPhienDauGiaThamGia(adOwner)
    .call();
  for (let i = 0; i <= DanhSachMaPhienDauGiaThamGia.length; i++) {
    const a = await contract.methods
      .DanhSachTatCaCacPhienDauGia(DanhSachMaPhienDauGiaThamGia[i])
      .call();
    DanhSachTatCaCacPhien.push(a);
  }
  const ViTri =
    DanhSachTatCaCacPhien.length - page >= 8 ? 8 : DanhSachTatCaCacPhien.length;

  const DanhSachTokenURLVaPhien = [];
  for (let i = page; i < ViTri; i++) {
    const tokenURL = await contractNginNFT.methods
      .tokenURI(DanhSachTatCaCacPhien[i].tokenId)
      .call();
    const tokenURL1 = tokenURL.substring(
      tokenURL.lastIndexOf("/") + 1,
      tokenURL.length
    );
    const data = {
      tokenURI: tokenURL1,
      Phien: DanhSachTatCaCacPhien[i],
    };
    DanhSachTokenURLVaPhien.push(data);
  }

  const DanhSachTokenURL = [];
  for (let i = 0; i < DanhSachTokenURLVaPhien.length; i++) {
    DanhSachTokenURL.push(DanhSachTokenURLVaPhien[i].tokenURI);
  }
  if (DanhSachTokenURL.length > 0) {
    let data1 = {
      data: {
        arrList: DanhSachTokenURL,
      },
    };
    const listMetatdata = await getListNFTByArrTokenURL(data1);
    const Data = [];
    for (let i = 0; i < listMetatdata.data.data.length; i++) {
      const tokenURIByMetadate = listMetatdata.data.data[i].tokenURI;
      DanhSachTokenURLVaPhien.filter((danhSach) => {
        if (tokenURIByMetadate === danhSach.tokenURI) {
          const dataMap = {
            Metadata: listMetatdata.data.data[i],
            Phien: danhSach.Phien,
          };
          Data.push(dataMap);
        }
      });
    }
    return Data;
  }
};

// tao nft collection
export const TaoNFT = (contractNginNFT, nft, account) => {
  console.log(createNewNFT(nft));
  console.log(account);
  console.log(contractNginNFT);
  createNewNFT(nft)
    .then((res) => {
      const { data } = res;
      console.log(data);
      setSafeMint(contractNginNFT, account, account, data.tokenURI).then(
        (res) => {
          if(res<1000000){
            contractNginNFT.methods.safeMint(account,data.tokenURI).send({from:account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
              if (res.events.Transfer.returnValues.tokenId) {
                console.log(res.events.Transfer.returnValues.tokenId);
                window.alert("Create NFT success !!!");
              }
            })
          }else{
            contractNginNFT.methods.safeMint(account,data.tokenURI).send({from:account}).then(res=>{
              if (res.events.Transfer.returnValues.tokenId) {
                console.log(res.events.Transfer.returnValues.tokenId);
                window.alert("Create NFT success !!!");
              }
            })
          } 
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

// form detail ban nft
export const TaoNFTMuaBan = (
  contract,
  contractNginNFT,
  tokenId,
  tienHang,
  account
) => {
  setApprove(
    contractNginNFT,
    account,
    "0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",
    tokenId
  ).then((res) => {
    if(res<1000000){
      contractNginNFT.methods.approve('0x5Eda6E2a4a023c9D69Da477A6425550B2794B057',tokenId).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
        if(res){
          TaoHopDongMuaBan(contract, account, tokenId, tienHang).then(res1=>{
            if(res1<1000000){
              contract.methods.TaoHopDongMuaBan(tokenId,tienHang).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res2=>{
                if (res2) {
                  console.log(res.events.Transfer.returnValues.tokenId);
                  window.alert("Create NFT market success !!!");
                }
              });
            }else{
              contract.methods.TaoHopDongMuaBan(tokenId,tienHang).send({from: account}).then(res2=>{
                if (res2) {
                  console.log(res.events.Transfer.returnValues.tokenId);
                  window.alert("Create NFT market success !!!");
                }
              });
            }
          });
        }
      });
    }else{
      contractNginNFT.methods.approve('0x5Eda6E2a4a023c9D69Da477A6425550B2794B057',tokenId).send({from: account}).then(res=>{
        if(res){
          TaoHopDongMuaBan(contract, account, tokenId, tienHang).then(res1=>{
            if(res1<1000000){
              contract.methods.TaoHopDongMuaBan(tokenId,tienHang).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res2=>{
                if (res2) {
                  console.log(res.events.Transfer.returnValues.tokenId);
                  window.alert("Create NFT market success !!!");
                }
              });
            }else{
              contract.methods.TaoHopDongMuaBan(tokenId,tienHang).send({from: account}).then(res2=>{
                if (res2) {
                  console.log(res.events.Transfer.returnValues.tokenId);
                  window.alert("Create NFT market success !!!");
                }
              });
            }
          });
        }
      });
    }
  });
};

// form detail dau gia
export const TaoPhienThucHienDauGia = (
  contract,
  contractNginNFT,
  tokenId,
  giaKhoiDiem,
  giaBanLuon,
  buocGia,
  thoiGianBatDau,
  thoiGianKetThuc,
  account
) => {
  setApprove(
    contractNginNFT,
    account,
    "0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",
    tokenId
  ).then(() => {
    TaoPhienDauGia1(
      contract,
      account,
      tokenId,
      giaKhoiDiem,
      giaBanLuon,
      buocGia,
      thoiGianBatDau,
      thoiGianKetThuc
    ).then(res=>{
      if(res<1000000){
        contract.methods.TaoPhienDauGia(tokenId,giaKhoiDiem,giaBanLuon,buocGia,thoiGianBatDau,thoiGianKetThuc).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
          if(res){
            window.alert('Create NFT aution success !!!');
          }
        })
      }else{
        contract.methods.TaoPhienDauGia(tokenId,giaKhoiDiem,giaBanLuon,buocGia,thoiGianBatDau,thoiGianKetThuc).send({from: account}).then(res=>{
          if(res){
            window.alert('Create NFT aution success !!!');
          }
        })
      }
    });
  });
};

//
export const ThucHienHuyBanHang = (contract, account, maHopDong) => {
  HuyBanHang(contract, account, maHopDong)
    .then((res) => {
      if(res<=1000000){
        contract.methods.HuyBanHang(  maHopDong).send({from:account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
          if(res){
            window.alert("Hủy bán hàng thành công !!!" + res);
          }
        });
      }else{
        contract.methods.HuyBanHang(  maHopDong).send({from:account}).then(res=>{
          if(res){
            window.alert("Hủy bán hàng thành công !!!" + res);
          }
        });
      }
    })
    .catch((err) => {
      window.alert("Hủy bán hàng thất !!!" + err);
    });
};

//
export const ThucHienThamGiaDauGia = (
  contract,
  contractQuan,
  account,
  maPhien,
  tienDauGia
) => {
  setApproveQuan(
    contractQuan,
    account,
    "0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",
    tienDauGia
  ).then((res) => {
    if(res<1000000){
      contractQuan.methods.approve('0x5Eda6E2a4a023c9D69Da477A6425550B2794B057',tienDauGia).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
        if(res){
          ThamGiaDauGia(contract, account, maPhien, tienDauGia).then(res=>{
            if(res<1000000){
              contract.methods.DauGia(  maPhien,  tienDauGia).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
                if(res){
                  window.alert("Tham gia đáu giá thành công !!!" + res);
                }
              });
            }else{
              contract.methods.DauGia(  maPhien,  tienDauGia).send({from: account}).then(res=>{
                if(res){
                  window.alert("Tham gia đáu giá thành công !!!" + res);
                }
              });
            }
          });
        }
      });
    }else{
      contractQuan.methods.approve('0x5Eda6E2a4a023c9D69Da477A6425550B2794B057',tienDauGia).send({from: account}).then(res=>{
        if(res){
          ThamGiaDauGia(contract, account, maPhien, tienDauGia).then(res=>{
            if(res<1000000){
              contract.methods.DauGia(  maPhien,  tienDauGia).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
                if(res){
                  window.alert("Tham gia đáu giá thành công !!!" + res);
                }
              });
            }else{
              contract.methods.DauGia(  maPhien,  tienDauGia).send({from: account}).then(res=>{
                if(res){
                  window.alert("Tham gia đáu giá thành công !!!" + res);
                }
              });
            }
          });
        }
      });
    }
  });
};

//
export const ThucHienKetThucPhienDauGia = (contract, account, maPhien) => {
  KetThucPhienDauGia(contract, account, maPhien)
    .then((res) => {
      if(res<1000000){
        contract.methods.KetThucPhienDauGia(  maPhien).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
          if(res){
            window.alert("Hủy bán hàng thành công !!!" + res);
          }
        })
      }else{
        contract.methods.KetThucPhienDauGia(  maPhien).send({from: account}).then(res=>{
          if(res){
            window.alert("Hủy bán hàng thành công !!!" + res);
          }
        })
      }
    })
    .catch((err) => {
      window.alert("Hủy bán hàng thất !!!" + err);
    });
};

//
export const ThucHienMuaHang = (
  contract,
  contractQuan,
  account,
  maHopDong,
  tienGui
) => {
  setApproveQuan(
    contractQuan,
    account,
    "0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",
    tienGui
  ).then((res) => {
    if(res<1000000){
      contractQuan.methods.approve('0x5Eda6E2a4a023c9D69Da477A6425550B2794B057',  tienGui).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
        if(res){
          MuaHang(  contract,   account,   maHopDong,   tienGui).then(res=>{
            if(res<1000000){
              contract.methods.MuaHang(  maHopDong,  tienGui).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
                if(res){
                  window.alert("Mua hàng thành công !!!" + res);
                }
              });
            }else{
              contract.methods.MuaHang(  maHopDong,  tienGui).send({from: account}).then(res=>{
                if(res){
                  window.alert("Mua hàng thành công !!!" + res);
                }
              });
            }
          });
        }
      });
    }else{
      contractQuan.methods.approve('0x5Eda6E2a4a023c9D69Da477A6425550B2794B057',  tienGui).send({from: account}).then(res=>{
        if(res){
          MuaHang(  contract,   account,   maHopDong,   tienGui).then(res=>{
            if(res<1000000){
              contract.methods.MuaHang(  maHopDong,  tienGui).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
                if(res){
                  window.alert("Mua hàng thành công !!!" + res);
                }
              });
            }else{
              contract.methods.MuaHang(  maHopDong,  tienGui).send({from: account}).then(res=>{
                if(res){
                  window.alert("Mua hàng thành công !!!" + res);
                }
              });
            }
          });
        }
      });
    }
  });
};

//
export const ThucHienMuaLuonPhienDauGia = (
  contract,
  contractQuan,
  account,
  maPhien,
  tienMuaLuon
) => {
  setApproveQuan(
    contractQuan,
    account,
    "0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",
    tienMuaLuon
  ).then((res) => {
    if(res<1000000){
      contractQuan.methods.approve('0x5Eda6E2a4a023c9D69Da477A6425550B2794B057', tienMuaLuon).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
        if(res){
          MuaLuonPhienDauGia(  contract,   account, maPhien,   tienMuaLuon).then(res=>{
            if(res<1000000){
              contract.methods.MuaLuonPhienDauGia(  maPhien,  tienMuaLuon).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
                if(res){
                  window.alert("Mua hàng thành công !!!" + res);
                }
              });
            }else{
              contract.methods.MuaLuonPhienDauGia(  maPhien,  tienMuaLuon).send({from: account}).then(res=>{
                if(res){
                  window.alert("Mua hàng thành công !!!" + res);
                }
              });
            }
          });
        }
      });
    }else{
      contractQuan.methods.approve('0x5Eda6E2a4a023c9D69Da477A6425550B2794B057',  tienMuaLuon).send({from: account}).then(res=>{
        if(res){
          MuaLuonPhienDauGia(  contract,   account,   maPhien,   tienMuaLuon).then(res=>{
            if(res<1000000){
              contract.methods.MuaLuonPhienDauGia(  maPhien,  tienMuaLuon).send({from: account,gas:1000000,gasPrice:'5000000000'}).then(res=>{
                if(res){
                  window.alert("Mua hàng thành công !!!" + res);
                }
              });
            }else{
              contract.methods.MuaLuonPhienDauGia(  maPhien,  tienMuaLuon).send({from: account}).then(res=>{
                if(res){
                  window.alert("Mua hàng thành công !!!" + res);
                }
              });
            }
          });
        }
      });
    }
  });
};
