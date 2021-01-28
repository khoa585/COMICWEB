import React from "react";
import { Col } from "react-bootstrap";
import { BsFillEyeFill, BsFillHeartFill } from "react-icons/bs";
import {Link} from "../../../../../routers";
import {to_slug} from './../../../../common/stringHelper';
import {showTimeAgo} from './../../../../common/timeHelper';
import "./ImageItem.scss";
const ImageItem = ({ image, alt, views, like, title, chapters, id }) => {
  const showListChapter=()=>{
    return chapters?.map((chapter) => {
      return <div key={chapter._id} className="image_item_container">
          <div>
              <Link route={`/doc-truyen/${to_slug(title)}-${to_slug(chapter.name)}.${chapter._id}`} >
                  <a alt={chapter.name}>{chapter.name.slice(0,(chapter.name.indexOf(":")>0?chapter.name.indexOf(":"):chapter.name.length))}</a>
              </Link>
          </div>
          <div className="image_time_ago">
              {showTimeAgo(chapter.createdAt)}
          </div>
      </div>;
    })
  }
  return (
    <Col lg={3} className="my-3" md={4} sm={6} xs={6}>
      <div className="item_Store">
        <Link route={`/truyen-tranh/${to_slug(title)}.${id}`}>
          <a>
            <div className="image">
              <img className="img-fluid" src={image} alt={alt} />
              <div className="follow_View_Store">
                <span>
                  <BsFillEyeFill />
                  {views}
                </span>
                <span>
                  <BsFillHeartFill />
                  {like}
                </span>
              </div>
              <div className="hot_trend">
                <span>Hot</span>
              </div>
            </div>
          </a>
        </Link>
        <div className="title_Item">
          <span className="jtip" data-jtip="#truyen-tranh-9929">
            <Link route={`/truyen-tranh/${to_slug(title)}.${id}`}>
               <a><h6>{title}</h6></a>
            </Link>
          </span>
            {showListChapter()}
        </div>
      </div>
    </Col>
  );
};

export default React.memo(ImageItem);
