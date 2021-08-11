export const ChuyenDiaChiKho = (contract,account,loaiKho,diaChiKho)=>{
    contract.methods.ChuyenDiaChiKho(loaiKho,diaChiKho).send({from: account});
}

export const HuyBanHang = (contract,account,mahopdong)=>{
    contract.methods.HuyBanHang(mahopdong).send({from:account});
}

export const ThamGiaDauGia = (contract, account, maphien, tiendaugia)=>{
    contract.methods.DauGia(maphien,tiendaugia).send({from: account});
}

export const KetThucPhienDauGia = (contract,account,maphien)=>{
    contract.methods.KetThucPhienDauGia(maphien).send({from:account});
}

export const MuaHang = (contract,account,mahopdong,tienguivao)=>{
    contract.methods.MuaHang(mahopdong,tienguivao).send({from: account});
}

export const MuaLuonPhienDauGia = (contract,account,maphien,tienmualuon)=>{
    contract.methods.MuaLuonPhienDauGia(maphien,tienmualuon).send({from: account});
}

export const TaoHopDongMuaBan = (contract,account,tokenId,tienHang)=>{
    contract.methods.TaoHopDongMuaBan(tokenId,tienHang).send({from: account});
}

export const TaoPhienDauGia1 = (contract,account, tokenId,giaKhoiDiem,giaBanLuon,buocGia,thoiGianBatDau,thoiGianKetThuc)=>{
    contract.methods.TaoPhienDauGia(tokenId,giaKhoiDiem,giaBanLuon,buocGia,thoiGianBatDau,thoiGianKetThuc).send({from:account});
}