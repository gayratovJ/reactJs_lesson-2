import { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img from "../../assets/1 1.png";
import img1 from "../../assets/3 1.png";
import img2 from "../../assets/4 1.png";
import img3 from "../../assets/5 1.png";
import img4 from "../../assets/6 1.png";
import "./Tabs.module.css";
export default class MainTab extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <div className="container">
            <div className="row">
              <img src={img} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="row">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    );
  }
}
