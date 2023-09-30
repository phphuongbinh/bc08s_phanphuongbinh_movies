import React, { useEffect, useState } from "react";
import { getListMovie, getMovieByTheater } from "../../api/api";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { NavLink } from "react-router-dom";

const ListMovie = () => {
  const [listMovie, setListMovie] = useState([]);
  useEffect(() => {
    getListMovie()
      .then((result) => {
        setListMovie(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listMovie &&
        listMovie.slice(0, 12).map((item) => (
          <Card
            key={item.maPhim}
            hoverable
            className="shadow-lg"
            cover={
              <img
                className="w-full h-[400px] object-cover"
                alt="example"
                src={item.hinhAnh}
              />
            }
          >
            <Meta title={item.tenPhim} description="www.instagram.com" />
            <button className="px-10 py-3 text-white bg-red-500 rounded-lg">
              <NavLink to={`/movie/${item.maPhim}`}>Mua vé</NavLink>
            </button>
          </Card>
        ))}
    </div>
  );
};

export default ListMovie;
