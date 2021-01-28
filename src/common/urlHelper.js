import queryString from 'query-string';
class UrlHelper {
    constructor(url){
        this.url=url ;
        this.parameter = queryString.parse(url.slice(url.indexOf("?")>0?url.indexOf("?"):url.length,url.length));
        this.path = url.slice(0,url.indexOf("?")>0?url.indexOf("?"):url.length)
    }
    setParams(name,value){
        this.parameter[name] =value ;
        return this ;
    }
    deleteParams(name){
        delete this.parameter[name] ;
        return this ;
    }
    toString(){
        return this.path + "?"+queryString.stringify(this.parameter);
    }
}
export default UrlHelper ;