import React from "react";
import Landing from "./Landing";
import "./style.css";
import Section from "./Section";
import { MDBIcon, MDBTooltip } from "mdb-react-ui-kit";
import Filter from "./Filter";
import SectionCustom from './SectionCustom'
import Introduction from "./Introduction";
import Speciality from "./Speciality";
import Layouts from "./Layouts";
import Reviews from "./Reviews";
import Support from "./Support";
import PremiumPlugins from "./PremiumPlugins";

const Home = () => {
  return (
    <div>
      <div className="stickyLeft">
        <MDBTooltip
          className="left"
          wrapperProps={{ color: "#151719" }}
          placement="right"
          title="Setting"
        >
          <MDBIcon fas icon="cogs" />
        </MDBTooltip>
        <MDBTooltip
          className="left"
          wrapperProps={{ color: "#151719" }}
          placement="right"
          title="Setting"
        >
          <MDBIcon fas icon="cogs" />
        </MDBTooltip>
        <MDBTooltip
          className="left"
          wrapperProps={{ color: "#151719" }}
          placement="right"
          title="Setting"
        >
          <MDBIcon fas icon="cogs" />
        </MDBTooltip>
      </div>
      <Landing />
      <Section />
      <Filter />
      <SectionCustom/>
<Layouts/>
<Reviews/>
<Support/>
<PremiumPlugins/>
    </div>
  );
};

export default Home;
