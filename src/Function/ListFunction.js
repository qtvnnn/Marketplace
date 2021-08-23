import {
  createNewNFT,
  getListNFTByArrTokenURL,
  getNFTByTokenURL,
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
const { ethers } = require("ethers");
const BigNumber = ethers.BigNumber;

// collection **
export const LayThongTinNFTTheoTokenId = async (contractNginNFT, tokenId) => {
  const tokenURI = await contractNginNFT.methods.tokenURI(tokenId).call();
  const tokenURL = tokenURI.substring(
    tokenURI.lastIndexOf("/") + 1,
    tokenURI.length
  );
  const metadata = await getNFTByTokenURL(tokenURL);
  return {
    Metadata: metadata,
    TokenURI: tokenURL,
  };
};

// mua ban home page **
export const LayThongTinNFTMuaBanTheoTokenId = async (
  contract,
  contractNginNFT,
  tokenId,
  maHopDong
) => {
  const tokenURI = await contractNginNFT.methods.tokenURI(tokenId).call();
  const tokenURL = tokenURI.substring(
    tokenURI.lastIndexOf("/") + 1,
    tokenURI.length
  );
  const thongTin = await getNFTByTokenURL(tokenURL);
  const thongTinMuaBan = await contract.methods
    .DanhSachHopDongMuaBan(maHopDong)
    .call();
  return {
    Metadata: thongTin,
    HopDong: thongTinMuaBan,
  };
};

// dau gia home page **
export const LayThongTinNFTPhienTheoTokenId = async (
  contract,
  contractNginNFT,
  tokenId,
  maPhien
) => {
  const tokenURI = await contractNginNFT.methods.tokenURI(tokenId).call();
  const tokenURL = tokenURI.substring(
    tokenURI.lastIndexOf("/") + 1,
    tokenURI.length
  );
  const thongTin = await getNFTByTokenURL(tokenURL);
  const thongTinPhien = await contract.methods
    .DanhSachTatCaCacPhienDauGia(maPhien)
    .call();
  return {
    Metadata: thongTin,
    PhienDauGia: thongTinPhien,
  };
};

//collection
export const LayDanhSachNFTSoHuu = async (contractNginNFT, adOwner, page) => {
  // Lay danh sach tokenId theo nguoi so huu
  const DanhSachTokenId = await contractNginNFT.methods
    .tokensOfOwner(adOwner)
    .call();

  const ViTri = DanhSachTokenId.length - page >= 8 ? 8 : DanhSachTokenId.length;

  const DanhSachTokenURLVaTokenId = [];

  const DanhSachTokenURL = [];
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
    DanhSachTokenURL.push(tokenURL1);
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
        if (tokenURIByMetadate == danhSach.tokenURI) {
          const dataMap = {
            Metadata: listMetatdata.data.data[i],
            TokenId: danhSach.TokenId,
            Length: DanhSachTokenId.length,
          };
          Data.push(dataMap);
        }
      });
    }
    return Data;
  } else {
    return [];
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
    if (a.TrangThaiHopDong == 0) {
      DanhSachTatCaCacHopDong.push(a);
    }
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
            Length: DanhSachTatCaCacHopDong.length,
          };
          Data.push(dataMap);
        }
      });
    }
    return Data;
  } else {
    return [];
  }
};

// nft mua ban profile **
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
        if (tokenURIByMetadate == danhSach.tokenURI) {
          const dataMap = {
            Metadata: listMetatdata.data.data[i],
            HopDong: danhSach.HopDong,
            Length: DanhSachTokenURLVaHopDong.length,
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
    if (a.HoatDong === true) {
      DanhSachTatCaCacPhien.push(a);
    }
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
            Length: DanhSachTokenURLVaPhien.length,
          };
          Data.push(dataMap);
        }
      });
    }
    return Data;
  } else {
    return [];
  }
};

// nft dau gia profile **
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
            Length: DanhSachTokenURLVaPhien.length,
          };
          Data.push(dataMap);
        }
      });
    }
    return Data;
  } else {
    return [];
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
            Length: DanhSachTokenURLVaPhien.length,
          };
          Data.push(dataMap);
        }
      });
    }
    return Data;
  } else {
    return [];
  }
};

// tao nft collection
export const TaoNFT = (contractNginNFT, nft, account) => {
  createNewNFT(nft)
    .then((res) => {
      const { data } = res;
      console.log(data);
      setSafeMint(contractNginNFT, account, account, data.tokenURI).then(
        (res) => {
          if (res < 1000000) {
            contractNginNFT.methods
              .safeMint(account, data.tokenURI)
              .send({ from: account, gas: 1000000, gasPrice: "5000000000" })
              .then((res) => {
                if (res.events.Transfer.returnValues.tokenId) {
                  console.log(res.events.Transfer.returnValues.tokenId);
                  window.alert("Create NFT success !!!");
                }
              })
              .catch((err) => {
                console.log(err);
                window.alert("Create NFT false !!!");
              });
          } else {
            contractNginNFT.methods
              .safeMint(account, data.tokenURI)
              .send({ from: account })
              .then((res) => {
                if (res.events.Transfer.returnValues.tokenId) {
                  console.log(res.events.Transfer.returnValues.tokenId);
                  window.alert("Create NFT success !!!");
                }
              })
              .catch((err) => {
                console.log(err);
                window.alert("Create NFT false !!!");
              });
          }
        }
      );
    })
    .catch((err) => {
      console.log(err);
      window.alert("Create NFT false !!!");
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
  )
    .then((res) => {
      if (res < 1000000) {
        contractNginNFT.methods
          .approve("0x5Eda6E2a4a023c9D69Da477A6425550B2794B057", tokenId)
          .send({ from: account, gas: 1000000, gasPrice: "5000000000" })
          .then((res) => {
            if (res) {
              TaoHopDongMuaBan(contract, account, tokenId, tienHang)
                .then((res1) => {
                  if (res1 < 1000000) {
                    contract.methods
                      .TaoHopDongMuaBan(tokenId, tienHang)
                      .send({
                        from: account,
                        gas: 1000000,
                        gasPrice: "5000000000",
                      })
                      .then((res2) => {
                        if (res2) {
                          console.log(res.events.Transfer.returnValues.tokenId);
                          window.alert("Create NFT market success !!!");
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                        window.alert("Create NFT market false !!!");
                      });
                  } else {
                    contract.methods
                      .TaoHopDongMuaBan(tokenId, tienHang)
                      .send({ from: account })
                      .then((res2) => {
                        if (res2) {
                          console.log(res.events.Transfer.returnValues.tokenId);
                          window.alert("Create NFT market success !!!");
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                        window.alert("Create NFT market false !!!");
                      });
                  }
                })
                .catch((err) => {
                  console.log(err);
                  window.alert("Create NFT market false !!!");
                });
            }
          });
      } else {
        contractNginNFT.methods
          .approve("0x5Eda6E2a4a023c9D69Da477A6425550B2794B057", tokenId)
          .send({ from: account })
          .then((res) => {
            if (res) {
              TaoHopDongMuaBan(contract, account, tokenId, tienHang)
                .then((res1) => {
                  if (res1 < 1000000) {
                    contract.methods
                      .TaoHopDongMuaBan(tokenId, tienHang)
                      .send({
                        from: account,
                        gas: 1000000,
                        gasPrice: "5000000000",
                      })
                      .then((res2) => {
                        if (res2) {
                          console.log(res.events.Transfer.returnValues.tokenId);
                          window.alert("Create NFT market success !!!");
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                        window.alert("Create NFT market false !!!");
                      });
                  } else {
                    contract.methods
                      .TaoHopDongMuaBan(tokenId, tienHang)
                      .send({ from: account })
                      .then((res2) => {
                        if (res2) {
                          console.log(res.events.Transfer.returnValues.tokenId);
                          window.alert("Create NFT market success !!!");
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                        window.alert("Create NFT market false !!!");
                      });
                  }
                })
                .catch((err) => {
                  console.log(err);
                  window.alert("Create NFT market false !!!");
                });
            }
          })
          .catch((err) => {
            console.log(err);
            window.alert("Create NFT market false !!!");
          });
      }
    })
    .catch((err) => {
      console.log(err);
      window.alert("Create NFT market false !!!");
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
  )
    .then((res) => {
      if (res < 1000000) {
        contractNginNFT.methods
          .approve("0x5Eda6E2a4a023c9D69Da477A6425550B2794B057", tokenId)
          .send({ from: account, gas: 1000000, gasPrice: "5000000000" })
          .then((res) => {
            if (res) {
              TaoPhienDauGia1(
                contract,
                account,
                tokenId,
                giaKhoiDiem,
                giaBanLuon,
                buocGia,
                thoiGianBatDau,
                thoiGianKetThuc
              )
                .then((res) => {
                  if (res < 1000000) {
                    contract.methods
                      .TaoPhienDauGia(
                        tokenId,
                        giaKhoiDiem,
                        giaBanLuon,
                        buocGia,
                        thoiGianBatDau,
                        thoiGianKetThuc
                      )
                      .send({
                        from: account,
                        gas: 1000000,
                        gasPrice: "5000000000",
                      })
                      .then((res) => {
                        if (res) {
                          window.alert("Create NFT aution success !!!");
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                        window.alert("Create NFT aution false !!!");
                      });
                  } else {
                    contract.methods
                      .TaoPhienDauGia(
                        tokenId,
                        giaKhoiDiem,
                        giaBanLuon,
                        buocGia,
                        thoiGianBatDau,
                        thoiGianKetThuc
                      )
                      .send({ from: account })
                      .then((res) => {
                        if (res) {
                          window.alert("Create NFT aution success !!!");
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                        window.alert("Create NFT aution false !!!");
                      });
                  }
                })
                .catch((err) => {
                  console.log(err);
                  window.alert("Create NFT aution false !!!");
                });
            }
          })
          .catch((err) => {
            console.log(err);
            window.alert("Create NFT aution false !!!");
          });
      } else {
        contractNginNFT.methods
          .approve("0x5Eda6E2a4a023c9D69Da477A6425550B2794B057", tokenId)
          .send({ from: account })
          .then((res) => {
            if (res) {
              TaoPhienDauGia1(
                contract,
                account,
                tokenId,
                giaKhoiDiem,
                giaBanLuon,
                buocGia,
                thoiGianBatDau,
                thoiGianKetThuc
              )
                .then((res) => {
                  if (res < 1000000) {
                    contract.methods
                      .TaoPhienDauGia(
                        tokenId,
                        giaKhoiDiem,
                        giaBanLuon,
                        buocGia,
                        thoiGianBatDau,
                        thoiGianKetThuc
                      )
                      .send({
                        from: account,
                        gas: 1000000,
                        gasPrice: "5000000000",
                      })
                      .then((res) => {
                        if (res) {
                          window.alert("Create NFT aution success !!!");
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                        window.alert("Create NFT aution false !!!");
                      });
                  } else {
                    contract.methods
                      .TaoPhienDauGia(
                        tokenId,
                        giaKhoiDiem,
                        giaBanLuon,
                        buocGia,
                        thoiGianBatDau,
                        thoiGianKetThuc
                      )
                      .send({ from: account })
                      .then((res) => {
                        if (res) {
                          window.alert("Create NFT aution success !!!");
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                        window.alert("Create NFT aution false !!!");
                      });
                  }
                })
                .catch((err) => {
                  console.log(err);
                  window.alert("Create NFT aution false !!!");
                });
            }
          })
          .catch((err) => {
            console.log(err);
            window.alert("Create NFT aution false !!!");
          });
      }
    })
    .catch((err) => {
      console.log(err);
      window.alert("Create NFT aution false !!!");
    });
};
//
export const ThucHienHuyBanHang = (contract, account, maHopDong) => {
  HuyBanHang(contract, account, maHopDong)
    .then((res) => {
      if (res <= 1000000) {
        contract.methods
          .HuyBanHang(maHopDong)
          .send({ from: account, gas: 1000000, gasPrice: "5000000000" })
          .then((res) => {
            if (res) {
              window.alert("Hủy bán hàng thành công !!!" + res);
            }
          })
          .catch((err) => {
            window.alert("Hủy bán hàng thất !!!" + err);
          });
      } else {
        contract.methods
          .HuyBanHang(maHopDong)
          .send({ from: account })
          .then((res) => {
            if (res) {
              window.alert("Hủy bán hàng thành công !!!" + res);
            }
          })
          .catch((err) => {
            window.alert("Hủy bán hàng thất !!!" + err);
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
  )
    .then((res) => {
      if (res < 1000000) {
        contractQuan.methods
          .approve(
            "0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",
            BigNumber.from("" + tienDauGia * 1000000000000000000)
          )
          .send({ from: account, gas: 1000000, gasPrice: "5000000000" })
          .then((res) => {
            if (res) {
              ThamGiaDauGia(contract, account, maPhien, tienDauGia)
                .then((res) => {
                  if (res < 1000000) {
                    contract.methods
                      .DauGia(maPhien, tienDauGia)
                      .send({
                        from: account,
                        gas: 1000000,
                        gasPrice: "5000000000",
                      })
                      .then((res) => {
                        if (res) {
                          window.alert("Tham gia đáu giá thành công !!!" + res);
                        }
                      })
                      .catch((err) => {
                        window.alert("Tham gia đáu giá thất bại !!!" + err);
                      });
                  } else {
                    contract.methods
                      .DauGia(maPhien, tienDauGia)
                      .send({ from: account })
                      .then((res) => {
                        if (res) {
                          window.alert("Tham gia đáu giá thành công !!!" + res);
                        }
                      })
                      .catch((err) => {
                        window.alert("Tham gia đáu giá thất bại !!!" + err);
                      });
                  }
                })
                .catch((err) => {
                  window.alert("Tham gia đáu giá thất bại !!!" + err);
                });
            }
          });
      } else {
        contractQuan.methods
          .approve(
            "0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",
            BigNumber.from("" + tienDauGia * 1000000000000000000)
          )
          .send({ from: account })
          .then((res) => {
            if (res) {
              ThamGiaDauGia(contract, account, maPhien, tienDauGia)
                .then((res) => {
                  if (res < 1000000) {
                    contract.methods
                      .DauGia(maPhien, tienDauGia)
                      .send({
                        from: account,
                        gas: 1000000,
                        gasPrice: "5000000000",
                      })
                      .then((res) => {
                        if (res) {
                          window.alert("Tham gia đáu giá thành công !!!" + res);
                        }
                      })
                      .catch((err) => {
                        window.alert("Tham gia đáu giá thất bại !!!" + err);
                      });
                  } else {
                    contract.methods
                      .DauGia(maPhien, tienDauGia)
                      .send({ from: account })
                      .then((res) => {
                        if (res) {
                          window.alert("Tham gia đáu giá thành công !!!" + res);
                        }
                      })
                      .catch((err) => {
                        window.alert("Tham gia đáu giá thất bại !!!" + err);
                      });
                  }
                })
                .catch((err) => {
                  window.alert("Tham gia đáu giá thất bại !!!" + err);
                });
            }
          })
          .catch((err) => {
            window.alert("Tham gia đáu giá thất bại !!!" + err);
          });
      }
    })
    .catch((err) => {
      window.alert("Tham gia đáu giá thất bại !!!" + err);
    });
};

//
export const ThucHienKetThucPhienDauGia = (contract, account, maPhien) => {
  KetThucPhienDauGia(contract, account, maPhien)
    .then((res) => {
      if (res < 1000000) {
        contract.methods
          .KetThucPhienDauGia(maPhien)
          .send({ from: account, gas: 1000000, gasPrice: "5000000000" })
          .then((res) => {
            if (res) {
              window.alert("Kết thúc đấu giá thành công !!!" + res);
            }
          })
          .catch((err) => {
            window.alert("Kết thúc đấu giá thất bại !!!" + err);
          });
      } else {
        contract.methods
          .KetThucPhienDauGia(maPhien)
          .send({ from: account })
          .then((res) => {
            if (res) {
              window.alert("Kết thúc đấu giá thành công !!!" + res);
            }
          })
          .catch((err) => {
            window.alert("Kết thúc đấu giá thất bại !!!" + err);
          });
      }
    })
    .catch((err) => {
      window.alert("Kết thúc đấu giá thất bại !!!" + err);
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
  )
    .then((res) => {
      if (res < 1000000) {
        contractQuan.methods
          .approve(
            "0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",
            BigNumber.from("" + tienGui * 1000000000000000000)
          )
          .send({ from: account, gas: 1000000, gasPrice: "5000000000" })
          .then((res) => {
            if (res) {
              MuaHang(contract, account, maHopDong, tienGui)
                .then((res) => {
                  if (res < 1000000) {
                    contract.methods
                      .MuaHang(maHopDong, tienGui)
                      .send({
                        from: account,
                        gas: 1000000,
                        gasPrice: "5000000000",
                      })
                      .then((res) => {
                        if (res) {
                          window.alert("Mua hàng thành công !!!" + res);
                        }
                      })
                      .catch((err) => {
                        window.alert("Mua hàng thất bại !!!" + err);
                      });
                  } else {
                    contract.methods
                      .MuaHang(maHopDong, tienGui)
                      .send({ from: account })
                      .then((res) => {
                        if (res) {
                          window.alert("Mua hàng thành công !!!" + res);
                        }
                      })
                      .catch((err) => {
                        window.alert("Mua hàng thất bại !!!" + err);
                      });
                  }
                })
                .catch((err) => {
                  window.alert("Mua hàng thất bại !!!" + err);
                });
            }
          })
          .catch((err) => {
            window.alert("Mua hàng thất bại !!!" + err);
          });
      } else {
        contractQuan.methods
          .approve(
            "0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",
            BigNumber.from("" + tienGui * 1000000000000000000)
          )
          .send({ from: account })
          .then((res) => {
            if (res) {
              MuaHang(contract, account, maHopDong, tienGui)
                .then((res) => {
                  if (res < 1000000) {
                    contract.methods
                      .MuaHang(maHopDong, tienGui)
                      .send({
                        from: account,
                        gas: 1000000,
                        gasPrice: "5000000000",
                      })
                      .then((res) => {
                        if (res) {
                          window.alert("Mua hàng thành công !!!" + res);
                        }
                      })
                      .catch((err) => {
                        window.alert("Mua hàng thất bại !!!" + err);
                      });
                  } else {
                    contract.methods
                      .MuaHang(maHopDong, tienGui)
                      .send({ from: account })
                      .then((res) => {
                        if (res) {
                          window.alert("Mua hàng thành công !!!" + res);
                        }
                      })
                      .catch((err) => {
                        window.alert("Mua hàng thất bại !!!" + err);
                      });
                  }
                })
                .catch((err) => {
                  window.alert("Mua hàng thất bại !!!" + err);
                });
            }
          })
          .catch((err) => {
            window.alert("Mua hàng thất bại !!!" + err);
          });
      }
    })
    .catch((err) => {
      window.alert("Mua hàng thất bại !!!" + err);
    });
};

// mua luon dau
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
  )
    .then((res) => {
      if (res < 1000000) {
        contractQuan.methods
          .approve(
            "0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",
            BigNumber.from("" + tienMuaLuon * 1000000000000000000)
          )
          .send({ from: account, gas: 1000000, gasPrice: "5000000000" })
          .then((res) => {
            if (res) {
              MuaLuonPhienDauGia(contract, account, maPhien, tienMuaLuon).then(
                (res) => {
                  if (res < 1000000) {
                    contract.methods
                      .MuaLuonPhienDauGia(maPhien, tienMuaLuon)
                      .send({
                        from: account,
                        gas: 1000000,
                        gasPrice: "5000000000",
                      })
                      .then((res) => {
                        if (res) {
                          window.alert("Mua hàng thành công !!!" + res);
                        }
                      })
                      .catch((err) => {
                        window.alert("Mua hàng thành công !!!" + err);
                      });
                  } else {
                    contract.methods
                      .MuaLuonPhienDauGia(maPhien, tienMuaLuon)
                      .send({ from: account })
                      .then((res) => {
                        if (res) {
                          window.alert("Mua hàng thành công !!!" + res);
                        }
                      })
                      .catch((err) => {
                        window.alert("Mua hàng thành công !!!" + err);
                      });
                  }
                }
              );
            }
          })
          .catch((err) => {
            window.alert("Mua hàng thành công !!!" + err);
          });
      } else {
        contractQuan.methods
          .approve(
            "0x5Eda6E2a4a023c9D69Da477A6425550B2794B057",
            BigNumber.from("" + tienMuaLuon * 1000000000000000000)
          )
          .send({ from: account })
          .then((res) => {
            if (res) {
              MuaLuonPhienDauGia(contract, account, maPhien, tienMuaLuon)
                .then((res) => {
                  if (res < 1000000) {
                    contract.methods
                      .MuaLuonPhienDauGia(maPhien, tienMuaLuon)
                      .send({
                        from: account,
                        gas: 1000000,
                        gasPrice: "5000000000",
                      })
                      .then((res) => {
                        if (res) {
                          window.alert("Mua hàng thành công !!!" + res);
                        }
                      })
                      .catch((err) => {
                        window.alert("Mua hàng thành công !!!" + err);
                      });
                  } else {
                    contract.methods
                      .MuaLuonPhienDauGia(maPhien, tienMuaLuon)
                      .send({ from: account })
                      .then((res) => {
                        if (res) {
                          window.alert("Mua hàng thành công !!!" + res);
                        }
                      })
                      .catch((err) => {
                        window.alert("Mua hàng thành công !!!" + err);
                      });
                  }
                })
                .catch((err) => {
                  window.alert("Mua hàng thành công !!!" + err);
                });
            }
          })
          .catch((err) => {
            window.alert("Mua hàng thành công !!!" + err);
          });
      }
    })
    .catch((err) => {
      window.alert("Mua hàng thành công !!!" + err);
    });
};
