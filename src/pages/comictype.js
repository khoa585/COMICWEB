import React from "react";
import HeaderTag from './../components/common/HeaderTag/HeaderTag';
import ComicType from './../components/ComicType/ComicType';
import {to_slug} from './../common/stringHelper';
import {Router} from './../../routers';
import listCategory from './../config/category';
import {getComicByGenres} from './../api/comic';
function ComicTypePage ({listComic,totalNumber,page ,category,status}){
    return (
        <React.Fragment>
            <HeaderTag />
            <ComicType listComic={listComic} totalNumber={totalNumber} page={page} category={category} status={status}/>
        </React.Fragment>
    )
}
ComicTypePage.getInitialProps = async (ctx)=>{
    let {name}= ctx.query ;
    let category = listCategory.filter(category=>{
        if(to_slug(category.name)==name.toLowerCase()){
            return true ;
        }
        return false ;
    })
    if(category.length==0){
        if(ctx.req){
            ctx.res.writeHead(302, { Location: "/" }).end();
        }
        else {
            Router.push("/");
        }
    }
    let page = parseInt(ctx.query.page);
    if (!page) {
        page = 1;
    }
    let status = ctx.query.status;
    
    if (status==undefined) {
        status = 2;
    }
    let listComic = await getComicByGenres(page,20,category[0].name,status);
    if(listComic.status==200 && listComic.data.status=="success"){
        return {
            listComic:listComic.data.data,
            totalNumber:listComic.data.numberOfResult,
            category:category[0],
            page:page,
            status:status
        }
    }
    else {
        if(ctx.req){
            ctx.res.writeHead(302, { Location: "/" }).end();
        }
        else {
            Router.push("/");
        }
    }
    
}
export default ComicTypePage ;