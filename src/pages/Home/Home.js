import React from "react";
import Header from "../../component/Header/Header";
import ListMovie from "./ListMovie";
import TabMovie from "./TabMovie/TabMovie";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div className="space-y-10">
      <Slider />
      <ListMovie />
      <TabMovie />
    </div>
  );
};

export default Home;
