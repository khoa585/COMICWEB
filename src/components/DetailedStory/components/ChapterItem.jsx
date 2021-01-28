import { Link } from "../../../../routers";
import { to_slug } from "../../../common/stringHelper";
import {showTimeAgo} from './../../../common/timeHelper';
import {Row,Col} from 'react-bootstrap';
const ChapterItem = ({ chapter }) => {
  return (
    <Row className="row item_chap">
      <Col className="chapter" lg={6} md={6} sm={6} xs={6}>
        <Link route={`/doc-truyen/${to_slug(chapter.name)}.${chapter._id}`}>
              <a>
              <span>{chapter.name}</span>
              </a>
          </Link>
      </Col>
      <Col className="col-lg-3" lg={3} md={3} sm={3} xs={3}>
        <span>{showTimeAgo(chapter.createdAt)}</span>
      </Col>
      <Col className="col-lg-3" lg={3} md={3} sm={3} xs={3}>
        <span>{chapter.views}</span>
      </Col>
    </Row>
  );
};

export default React.memo(ChapterItem);
