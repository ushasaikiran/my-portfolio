import {
  FaChartBar,
  FaPython,
  FaDatabase,
  FaProjectDiagram,
  FaCloud,
  FaCogs,
} from "react-icons/fa";
import "./WhatIDo.css";

function WhatIDo() {
  return (
    <section className="whatido" id="what-i-do">
      <h2 className="whatido-title">What I Do?</h2>

      <div className="whatido-grid">
        <div className="whatido-illustration">
  <div className="illus-card">
    <div className="illus-stat">
      <h4>+42%</h4>
      <p>Forecast Accuracy</p>
    </div>
    <div className="illus-stat">
      <h4>120+</h4>
      <p>Dashboards Built</p>
    </div>
    <div className="illus-stat">
      <h4>5M+</h4>
      <p>Rows Processed</p>
    </div>
  </div>
</div>

        <div className="whatido-right">
          <h3 className="whatido-heading">
            Data Science & <br /> Analysis
          </h3>

          <div className="whatido-icons">
            <div className="whatido-icon"><FaChartBar /></div>
            <div className="whatido-icon"><FaPython /></div>
            <div className="whatido-icon"><FaDatabase /></div>
            <div className="whatido-icon"><FaProjectDiagram /></div>
            <div className="whatido-icon"><FaCloud /></div>
            <div className="whatido-icon"><FaCogs /></div>
          </div>

          <ul className="whatido-list">
            <li>Building production-ready analytics + ML solutions</li>
            <li>Forecasting, KPI monitoring, and business reporting</li>
            <li>Data pipelines, automation, and dashboard delivery</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
