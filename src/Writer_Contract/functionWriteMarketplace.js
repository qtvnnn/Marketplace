export const ChuyenDiaChiKho = (contract,account,loaiKho,diaChiKho)=>{
    return contract.methods.ChuyenDiaChiKho(loaiKho,diaChiKho).send({from: account});
}

export const HuyBanHang = (contract,account,mahopdong)=>{
    return  contract.methods.HuyBanHang(mahopdong).send({from:account});
}

export const ThamGiaDauGia = (contract, account, maphien, tiendaugia)=>{
    return contract.methods.DauGia(maphien,tiendaugia).send({from: account});
}

export const KetThucPhienDauGia = (contract,account,maphien)=>{
    return contract.methods.KetThucPhienDauGia(maphien).send({from:account});
}

export const MuaHang = (contract,account,mahopdong,tienguivao)=>{
    return contract.methods.MuaHang(mahopdong,tienguivao).send({from: account});
}

export const MuaLuonPhienDauGia = (contract,account,maphien,tienmualuon)=>{
    return contract.methods.MuaLuonPhienDauGia(maphien,tienmualuon).send({from: account});
}

export const TaoHopDongMuaBan = (contract,account,tokenId,tienHang)=>{
    return contract.methods.TaoHopDongMuaBan(tokenId,tienHang).send({from: account});
}

export const TaoPhienDauGia1 = (contract,account, tokenId,giaKhoiDiem,giaBanLuon,buocGia,thoiGianBatDau,thoiGianKetThuc)=>{
    return  contract.methods.TaoPhienDauGia(tokenId,giaKhoiDiem,giaBanLuon,buocGia,thoiGianBatDau,thoiGianKetThuc).send({from:account});
}