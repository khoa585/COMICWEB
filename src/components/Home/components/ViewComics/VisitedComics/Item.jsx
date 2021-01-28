import { BsX } from "react-icons/bs";
import { Link } from "../../../../../../routers";
import { to_slug } from "../../../../../common/stringHelper";

const Item = ({ item, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(item._id);
  };
  return (
    <div className="list-Stote_">
      <div>
        <span className="thumb" title="">
          <img className="img-fluid" src={item.comic_id.image} alt=""></img>
        </span>
      </div>
      <div className="list_Stote_r">
        <Link
          route={`truyen-tranh/${to_slug(item.comic_id.name)}.${to_slug(item.comic_id._id)}`}
        >
          <h6 className="title">
            <span>{item.comic_id.name}</span>
          </h6>
        </Link>

        <p className="chapter">
          <Link
            route={`doc-truyen/${to_slug(item.comic_id.name)}-${to_slug(
              item.name
            )}.${to_slug(item._id)}`}
          >
            <a>
              <span>{item.name}</span>
            </a>
          </Link>

          <span className="view pull-right">
            <BsX></BsX>
            <span className="visited-remove" onClick={handleDelete}>
              Xóa
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Item;
