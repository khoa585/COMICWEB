import React from 'react';
import category from './../../../config/category';
import {to_slug} from './../../../common/stringHelper';
import {Link} from './../../../../routers';
import './TypeComic.scss';
function SelectTypeComic (){
    const showSelect =()=>{
        return category.map((item)=>{
           return (
            <div key={item._id}>
                <Link route={`/the-loai/${to_slug(item.name)}`}>
                    <a>{item.name}</a>
                </Link>
            </div>
           )
        })
    }
    return (
        <div className="select_type_comic">
            <h1>Thể Loại</h1>
            <div className="container_flex">
                {showSelect()}
            </div>
        </div>
    )
}
export default SelectTypeComic ;