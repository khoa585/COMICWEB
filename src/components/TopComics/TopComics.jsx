import React, { useEffect, useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";

import { useHttp } from "../../hooks/useHttp";

export default React.memo(function TopComics() {
  const { isLoading, error, sendRequest, source } = useHttp();
  const [comics, setComics] = useState([]);
  const [tab, setTab] = useState(1);

  const setTabNav = (task) => {
    setTab(task);
  };

  useEffect(() => {
    (async () => {
      const response = await sendRequest("/comic/list-top", "POST", {
        type: tab,
      });
      if (!error.message && !isLoading) setComics(response.data);
    })();
  }, [tab]);

  const numberOfCcapacitors = (i) => {
    if (i < 10) return "0" + i;
    else return i;
  };
  return (
    <>
      <div className="tab_Nav">
        <li
          className={`nav_Item ${tab === 1 ? "active" : ""}`}
          onClick={() => setTabNav(1)}
        >
          <span>Top Tháng</span>
        </li>
        <li
          className={`nav_Item ${tab === 2 ? "active" : ""}`}
          onClick={() => setTabNav(2)}
        >
          <span>Top Tuần</span>
        </li>
        <li
          className={`nav_Item ${tab === 3 ? "active" : ""}`}
          onClick={() => setTabNav(3)}
        >
          <span>Top Ngày</span>
        </li>
      </div>
      <div className="tab-pane">
        <div id="topComics">
          <div className="list-unstyled">
            {comics.map((comic, index) => {
              return (
                <li className="list-style-comics" key={comic._id}>
                  <span
                    className={`txt-rank fn-order ${
                      index === 0
                        ? "top_One"
                        : index === 1
                        ? "top_Two"
                        : index === 2
                        ? "top_Three"
                        : ""
                    }`}
                  >
                    {numberOfCcapacitors(index + 1)}
                  </span>
                  <div className="t-item">
                    <div className="list-Stote-comic">
                      <div>
                        <span className="thumb-comic" title="">
                          <img
                            className="img-fluid"
                            src={comic.image}
                            alt={comic.name}
                          />
                        </span>
                      </div>
                      <div className="listStote">
                        <h6 className="title-comic">{comic.name}</h6>
                        <p className="chapter-comic">
                          <span>Đọc tiếp {comic.chapters[0].name}</span>
                          <span className="view-pull-right">
                            <BsFillEyeFill></BsFillEyeFill>{" "}
                            {comic.chapters[0].views}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
})
