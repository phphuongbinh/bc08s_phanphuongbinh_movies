import React, { useEffect, useState } from "react";
import { getMovieByTheater } from "../../../api/api";
import { Tabs } from "antd";
import moment from "moment";
import "moment/locale/vi";

const onChange = (key) => {};
const TabMovie = () => {
  const [danhSachHeThongRap, setdanhSachHeThongRap] = useState([]);
  useEffect(() => {
    getMovieByTheater()
      .then((result) => {
        setdanhSachHeThongRap(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderDsPhim = (dsPhim) => {
    return dsPhim.map((phim) => {
      return (
        <div className="flex gap-x-4 p-5 border-b ">
          <img
            src={phim.hinhAnh}
            className="w-32 h-32 object-cover inline-block"
            alt=""
          />
          <div>
            <p className="text-black text-xl font-semibold mb-3">
              {phim.tenPhim}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {phim.lstLichChieuTheoPhim.slice(0, 4).map((lich) => (
                <span className="px-5 py-2 border rounded-lg inline-block">
                  <span className="text-green-500 font-semibold">
                    {moment(lich.ngayChieuGioChieu)
                      .utc()
                      .locale("vi")
                      .format("DD-MM-YYYY")}
                  </span>
                  <span className="mx-1">~</span>
                  <span className="text-red-500 font-semibold">
                    {moment(lich.ngayChieuGioChieu).utc().format("LT")}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    });
  };

  const handleHeThongRap = () => {
    return danhSachHeThongRap.map((heThongRap, index) => {
      const handleCumRap = () => {
        return heThongRap.lstCumRap.map((cumRap, index) => {
          return {
            key: cumRap.tenCumRap,
            label: (
              <div className="w-60  text-left ">
                <h3 className="text-green-700 font-semibold text-lg truncate">
                  {cumRap.tenCumRap}
                </h3>
                <p className="truncate">{cumRap.diaChi}</p>
              </div>
            ),
            children: (
              <div className="h-[500px] overflow-y-scroll">
                {renderDsPhim(cumRap.danhSachPhim)}
              </div>
            ),
          };
        });
      };
      return {
        key: index,
        label: <img className="w-10 h-10" src={heThongRap.logo} alt="logo" />,
        children: (
          <Tabs
            style={{
              height: "500px",
            }}
            tabPosition="left"
            defaultActiveKey="1"
            items={handleCumRap()}
            onChange={onChange}
          />
        ),
      };
    });
  };

  return (
    <div className="container max-w-5xl border shadow-lg">
      <Tabs
        style={{
          height: "500px",
        }}
        tabPosition="left"
        defaultActiveKey="1"
        items={handleHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
};

export default TabMovie;
