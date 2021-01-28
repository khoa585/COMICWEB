const routers = require("next-routes")();
routers.add("index","/?page=:page");
routers.add("register","/dang-ky");
routers.add("login","/dang-nhap");
routers.add("detialcomic","/truyen-tranh/:slug.:id");
routers.add("viewscomics","/doc-truyen/:slug.:id");
routers.add("comictype","/the-loai/:name")
module.exports = routers ;
