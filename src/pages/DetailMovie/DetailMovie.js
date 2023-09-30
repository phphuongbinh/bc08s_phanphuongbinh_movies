import React, { useEffect, useState } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { Progress, Space } from "antd";
import { getInfoMovie } from "../../api/api";

const DetailMovie = () => {
  const { maPhim } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getInfoMovie(maPhim)
      .then((result) => {
        setMovie(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <img
            src={movie.hinhAnh}
            className="w-1/3 rounded-lg aspect-square"
            alt=""
          />
          <div>
            <p className="text">
              {moment(movie.ngayKhoiChieu).utc().format("DD-MM-YYYY")}
            </p>
            <h3>{movie.tenPhim}</h3>
            <button className="px-6 py-3 text-white bg-red-500 rounded-md">
              Mua vé
            </button>
          </div>
        </div>
        <Space wrap>
          <Progress
            type="circle"
            strokeColor={"#C70039"}
            percent={movie.danhGia * 10}
            format={(percent) => (
              <span className="font-semibold text-red-500">
                {percent / 10} / 10
              </span>
            )}
          />
        </Space>
      </div>
    </div>
  );
};

export default DetailMovie;
