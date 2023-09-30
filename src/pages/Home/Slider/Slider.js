import React, { useEffect, useState } from "react";
import { Carousel, ConfigProvider } from "antd";
import { getDataSlider } from "../../../api/api";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Slider = () => {
  const [banner, setBanner] = useState([]);
  let fetchData = async () => {
    try {
      let res = await getDataSlider();
      setBanner(res.data.content);
    } catch (error) {
      console.log("Đã có lỗi xảy ra");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onChange = (currentSlide) => {};
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotWidth: 30,
            dotHeight: 10,
            dotActiveWidth: 100,
          },
        },
      }}
    >
      <Carousel effect="fade" afterChange={onChange} autoplay>
        {banner.length > 0 &&
          banner.map((item) => (
            <img
              src={item.hinhAnh}
              className="object-cover w-full h-40 sm:h-60 lg:h-96 xl:h-200"
              alt=""
            />
          ))}
      </Carousel>
    </ConfigProvider>
  );
};

export default Slider;
