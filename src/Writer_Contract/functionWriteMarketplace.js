export const ChuyenDiaChiKho = (contract,account,loaiKho,diaChiKho)=>{
    return contract.methods.ChuyenDiaChiKho(loaiKho,diaChiKho).estimateGas({from: account});
}

export const HuyBanHang = (contract,account,mahopdong)=>{
    return contract.methods.HuyBanHang(mahopdong).estimateGas({from: account});

}
// Không cần gọi hàm gì trước

export const ThamGiaDauGia = (contract, account, maphien, tiendaugia)=>{
    return contract.methods.DauGia(maphien,tiendaugia).estimateGas({from: account});
}
// approve tiền cho contract trước
export const KetThucPhienDauGia = (contract,account,maphien)=>{
    return contract.methods.KetThucPhienDauGia(maphien).estimateGas({from: account});
}
// không cần gọi

export const MuaHang = (contract,account,mahopdong,tienguivao)=>{
    return contract.methods.MuaHang(mahopdong,tienguivao).estimateGas({from: account});
}
// approve tien
export const MuaLuonPhienDauGia = (contract,account,maphien,tienmualuon)=>{
    return contract.methods.MuaLuonPhienDauGia(maphien,tienmualuon).estimateGas({from: account});
}
//approve tien

export const TaoHopDongMuaBan = (contract,account,tokenId,tienHang)=>{
    return contract.methods.TaoHopDongMuaBan(tokenId,tienHang).estimateGas({from: account});
}

export const TaoPhienDauGia1 = (contract,account, tokenId,giaKhoiDiem,giaBanLuon,buocGia,thoiGianBatDau,thoiGianKetThuc)=>{
    return  contract.methods.TaoPhienDauGia(tokenId,giaKhoiDiem,giaBanLuon,buocGia,thoiGianBatDau,thoiGianKetThuc).estimateGas({from: account});
}