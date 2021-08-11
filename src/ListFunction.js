import axios from 'axios';
import { setSafeMint, setApprove } from './functionWriteNginNFT';
import { TaoPhienDauGia1, TaoHopDongMuaBan } from './functionWriteContract';
import { LayDanhSachTatCaHopDong, LayDanhSachTatCaPhienDauGia, LayDanhSachMuaBanSoHuu, LayDanhSachPhienDauGiaSoHuu, LayDanhSachPhienDauGiaThamGia } from './functionReadContract';

const API_CALLER = (endpoint, method,body)=>{
    return axios({
        url: `https://nft-node-server.herokuapp.com/api/nft/${endpoint}`,
        method:method,
        data:body
    })
}
export const TaoNFT = (contract,nft,account)=>{

        API_CALLER('createNewNFT','POST',nft).then(res=>{
            const {data} = res;
            console.log(data.tokenId);
            setSafeMint(contract,account,account,data.tokenId).then(res=>{
                console.log(res.events.Transfer.returnValues.tokenId);
            });
        }).catch(err=>{
            window.alert('Create nft false !!!');
            console.log(err);
        });
}

export const TaoNFTMuaBan = (contract,nft,account)=>{
    API_CALLER('createNewNFT','POST',nft).then(res=>{
            const {data} = res;
            setSafeMint(contract,account,account,data).then(res=>{
                console.log(res.events.Transfer.returnValues.tokenId);
                setApprove(contract,account,'0x4F212E42a5B66cC587489b3050409C477963C389',res.events.Transfer.returnValues.tokenId).then(res=>{
                    TaoHopDongMuaBan(contract,account,res.events.Transfer.returnValues.tokenId,nft.tienhang);
                });
            });
        }).catch(err=>{
            window.alert('Create nft false !!!');
            console.log(err);
        });
}

export const TaoPhienThucHienDauGia = (contract,formData, nft , giaKhoiDiem,giaBanLuon,buocGia,thoiGianBatDau,thoiGianKetThuc,account)=>{
    API_CALLER('createNFT','POST',formData).then(res=>{
        const {data} = res;
        const nftt = {
            ...nft,
            image: data,
        }
        API_CALLER('uploadInfoNft','POST',nftt).then(res=>{
            const {data} = res;
            setSafeMint(contract,account,account,data).then(res=>{
                setApprove(contract,account,'0x4F212E42a5B66cC587489b3050409C477963C389',res.events.Transfer.returnValues.tokenId).then(res=>{
                    TaoPhienDauGia1(contract,account,res.events.Transfer.returnValues.tokenId,giaKhoiDiem,giaBanLuon,buocGia,thoiGianBatDau,thoiGianKetThuc);
                })
            }).catch(err=>{
                window.alert('Create aution false !!!');
                console.log(err);
            });
        }).catch(err=>{
            window.alert('Create aution false !!!');
            console.log(err);
        })
    }).catch(err=>{
        window.alert('Create aution false !!!');
        console.log(err);
    })
}

export const LayDanhSachMuaBan = (contract)=>{
    return LayDanhSachTatCaHopDong(contract);
}

export const LayDanhSachDauGia = (contract)=>{
    return LayDanhSachTatCaPhienDauGia(contract);
}

export const LayDanhSachMuaBanSoHuu1 = (contract,adOwner)=>{
    return LayDanhSachMuaBanSoHuu(contract,adOwner);
}

export const LayDanhSachDauGiaSoHuu = (contract,adOwner)=>{
    return LayDanhSachPhienDauGiaSoHuu(contract,adOwner);
}

export const LayDanhSachDauGiaThamGia = (contract,adOwner)=>{
    return LayDanhSachPhienDauGiaThamGia(contract,adOwner);
}