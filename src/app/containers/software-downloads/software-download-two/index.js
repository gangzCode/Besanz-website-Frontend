import React from "react";
import softwareContent from "@/app/data/software-download/software-download-two.json";
import styles from "./SoftwareDownloadTwo.module.scss";

const backgroundImage = "/assets/images/bg/3.jpg";
const windowsLogo = "/assets/images/icons/down2.png";
const appleLogo = "/assets/images/icons/apple2.png";
const SoftwareDownloadTwo = () => {
  return (
    <div
      className={`${styles.softwareStyle2} ${styles.voopoSoftware}`}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className={styles.content}>
              <h2>{softwareContent.title}</h2>
              <p>{softwareContent.content}</p>
              <ul className={styles.downloadBtn}>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"/"}
                  >
                    Download
                    <img src={windowsLogo} alt="voip voopo" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"/"}
                  >
                    Download
                    <img src={appleLogo} alt="voip voopo" />
                  </a>
                </li>
              </ul>
              <div className={styles.thumb}>
                <img
                  src={`/assets/images/about/${softwareContent.image}`}
                  alt="voopo voip"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDownloadTwo;
