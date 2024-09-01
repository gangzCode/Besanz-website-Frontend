import React from "react";
import styles from "./SoftwareDownload.module.scss";
import softwareContent from "@/app/data/software-download/software-download-one.json";

const polyOne = "/assets/images/icons/pl1.png";
const polyTwo = "/assets/images/icons/pl2.png";
const winLogo = "/assets/images/icons/down.png";
const appleLogo = "/assets/images/icons/apple.png";
const softImage = "/assets/images/about/soft1.png";

const SoftwareDownloadOne = () => {
  return (
    <div className={`${styles.voopoSoftware} poss--relative bg--white`}>
      <div className={`${styles.sftBgColor} poss--relative`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-6">
              <div className={styles.content}>
                <h2>{softwareContent.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: softwareContent.content }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.poly1}>
          <img src={polyOne} alt="voopo voip" />
        </div>
        <div className={styles.poly2}>
          <img src={polyTwo} alt="voopo voip" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className={styles.downloadBtn}>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"/"}
                >
                  Download <img src={winLogo} alt="voip voopo" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"/"}
                >
                  Download <img src={appleLogo} alt="voip voopo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.shape1}>
        <img src={softImage} alt="voopo voip" />
      </div>
    </div>
  );
};

export default SoftwareDownloadOne;
