export const LayDanhSachTatCaHopDong = async (contract) => {
  let DanhSachTatCaHopDong = [];
  const TongSoHopDong = await contract.methods.TongSoHopDong().call();
  for (let i = 1; i <= TongSoHopDong; i++) {
    const a = contract.methods.DanhSachHopDongMuaBan(i).call();
    DanhSachTatCaHopDong.push(a);
    }
  return DanhSachTatCaHopDong;
};

export const LayDanhSachTatCaPhienDauGia = async (contract) => {
  let DanhSachTatCaCacPhien = [];
  const TongSoPhien = await contract.methods.TongSoPhien().call();
    for (let i = 1; i <= TongSoPhien; i++) {
      const a = await contract.methods.DanhSachTatCaCacPhienDauGia(i).call();
      DanhSachTatCaCacPhien.push(a);
    }
  return DanhSachTatCaCacPhien;
};

export const LayDanhSachMuaBanSoHuu = (contract, adOwner) => {
  let arrMaPhien = [];
  let DanhSachMuaBanSoHuu = [];

  contract.methods.LayDanhSachMaHopDongSoHuu(adOwner).call().then((res) => {
      arrMaPhien = res;
      for (let i = 1; i <= arrMaPhien.length; i++) {
        contract.methods.DanhSachHopDongMuaBan(arrMaPhien[i]).call().then((res) => {
          DanhSachMuaBanSoHuu.push(res);
        }).catch((err) => {
          window.alert("Can not get");
          console.log(err);
        });
      }
    }).catch((err) => {
      window.alert("Can not get");
      console.log(err);
    });
  return DanhSachMuaBanSoHuu;
};

export const LayDanhSachPhienDauGiaSoHuu = (contract, adOwner) => {
  let arrMaPhien = [];
  let DanhSachPhienDauSoHuu = [];

  contract.methods.LayDanhSachMaPhienDauGiaSoHuu(adOwner).call().then((res) => {
      arrMaPhien = res;
      for (let i = 1; i <= arrMaPhien.length; i++) {
        contract.methods.DanhSachTatCaCacPhienDauGia(arrMaPhien[i]).call().then((res) => {
            DanhSachPhienDauSoHuu.push(res);
        }).catch((err) => {
          window.alert("Can not get");
          console.log(err);
        });
      }
    }).catch((err) => {
      window.alert("Can not get");
      console.log(err);
    });
  return DanhSachPhienDauSoHuu;
};

export const LayDanhSachPhienDauGiaThamGia = (contract, adOwner) => {
  let arrMaPhien = [];
  let DanhSachPhienDauThamGia = [];

  contract.methods.LayDanhSachMaPhienDauGiaThamGia(adOwner).call().then((res) => {
      arrMaPhien = res;
      for (let i = 1; i <= arrMaPhien.length; i++) {
        contract.methods.DanhSachTatCaCacPhienDauGia(arrMaPhien[i]).call().then((res) => {
          DanhSachPhienDauThamGia.push(res);
        }).catch((err) => {
          window.alert("Can not get");
          console.log(err);
        });
      }
    }).catch((err) => {
      window.alert("Can not get");
      console.log(err);
    });
  return DanhSachPhienDauThamGia;
};
