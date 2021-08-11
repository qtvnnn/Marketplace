export const LayDanhSachTatCaHopDong = (contract) => {
  let DanhSachTatCaHopDong = [];
  contract.methods
    .TongSoHopDong()
    .call()
    .then((res) => {
      for (let i = 1; i <= res; i++) {
        contract.methods
          .DanhSachHopDongMuaBan(i)
          .call()
          .then((res) => {
            DanhSachTatCaHopDong.push(res);
          })
          .catch((err) => {
            window.alert("Can not get");
            console.log(err);
          });
      }
    })
    .catch((err) => {
      window.alert("Can not get");
      console.log(err);
    });

  return DanhSachTatCaHopDong;
};

export const LayDanhSachTatCaPhienDauGia = (contract) => {
  let DanhSachTatCaCacPhien = [];
  contract.methods
    .TongSoPhien()
    .call()
    .then((res) => {
      for (let i = 1; i <= res; i++) {
        contract.methods
          .DanhSachTatCaCacPhienDauGia(i)
          .call()
          .then((res) => {
            DanhSachTatCaCacPhien.push(res);
          })
          .catch((err) => {
            window.alert("Can not get");
            console.log(err);
          });
      }
    })
    .catch((err) => {
      window.alert("Can not get");
      console.log(err);
    });

  return DanhSachTatCaCacPhien;
};

export const LayDanhSachMuaBanSoHuu = (contract, adOwner) => {
  let arrMaPhien = [];
  let DanhSachMuaBanSoHuu = [];

  contract.methods
    .LayDanhSachMaHopDongSoHuu(adOwner)
    .call()
    .then((res) => {
      arrMaPhien = res;
      for (let i = 1; i <= arrMaPhien.length; i++) {
        contract.methods
          .DanhSachHopDongMuaBan(arrMaPhien[i])
          .call()
          .then((res) => {
            DanhSachMuaBanSoHuu.push(res);
          })
          .catch((err) => {
            window.alert("Can not get");
            console.log(err);
          });
      }
    })
    .catch((err) => {
      window.alert("Can not get");
      console.log(err);
    });
  return DanhSachMuaBanSoHuu;
};

export const LayDanhSachPhienDauGiaSoHuu = (contract, adOwner) => {
  let arrMaPhien = [];
  let DanhSachPhienDauSoHuu = [];

  contract.methods
    .LayDanhSachMaPhienDauGiaSoHuu(adOwner)
    .call()
    .then((res) => {
      arrMaPhien = res;
      for (let i = 1; i <= arrMaPhien.length; i++) {
        contract.methods
          .DanhSachTatCaCacPhienDauGia(arrMaPhien[i])
          .call()
          .then((res) => {
            DanhSachPhienDauSoHuu.push(res);
          })
          .catch((err) => {
            window.alert("Can not get");
            console.log(err);
          });
      }
    })
    .catch((err) => {
      window.alert("Can not get");
      console.log(err);
    });
  return DanhSachPhienDauSoHuu;
};

export const LayDanhSachPhienDauGiaThamGia = (contract, adOwner) => {
  let arrMaPhien = [];
  let DanhSachPhienDauThamGia = [];

  contract.methods
    .LayDanhSachMaPhienDauGiaThamGia(adOwner)
    .call()
    .then((res) => {
      arrMaPhien = res;
      for (let i = 1; i <= arrMaPhien.length; i++) {
        contract.methods
          .DanhSachTatCaCacPhienDauGia(arrMaPhien[i])
          .call()
          .then((res) => {
            DanhSachPhienDauThamGia.push(res);
          })
          .catch((err) => {
            window.alert("Can not get");
            console.log(err);
          });
      }
    })
    .catch((err) => {
      window.alert("Can not get");
      console.log(err);
    });
  return DanhSachPhienDauThamGia;
};
