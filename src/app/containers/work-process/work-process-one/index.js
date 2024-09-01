import React from "react";
import workData from "@/app/data/work-process/work-process-one.json";
import WorkProcessSingleOne from "@/app/components/work-process/work-process-one";
import SectionTitle from "@/app/components/UI/section-title/section-title-one";
import styles from "./WorkProcess.module.scss";

const shape = "/assets/images/about/shape.png";
const WorkProcess = () => {
  return (
    <div className={`${styles.voopoWorkingProcess} bg--cart-7 poss--relative`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle title="Process" text="How it work" textAlign="left" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5">
            <div className={styles.processInner}>
              {
                workData?.map((single, key) =>
                (
                  <WorkProcessSingleOne
                    data={single}
                    key={key}
                    styles={styles}
                  />
                )
                )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thumbPoss}>
        <img src={shape} alt="voip voopo" className="img-fluid" />
      </div>
    </div>
  );
};

export default WorkProcess;
