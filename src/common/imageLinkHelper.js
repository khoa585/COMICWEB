import {IMAGE_WEB_PROXY} from './../../config';
export const imageLinkChange = (img)=>{
    let status = true ;
    const listLinkNotRequire = [
        "blogspot.com/",
    ]
    listLinkNotRequire.forEach((item)=>{
        if(img.indexOf(item)>=0){
            status=false ;
        }
    })
    if(status){
        return IMAGE_WEB_PROXY+img ;
    }
    return img ;
}