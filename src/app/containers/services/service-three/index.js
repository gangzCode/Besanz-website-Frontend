import React, { useEffect } from "react";
import ServiceOne from "@/app/containers/services/service-one";
import serviceData from "@/app/data/services/service-three-content.json";
import styles from "./ServiceThree.module.scss";
import "./index.css";

import $ from "jquery";
// import "jquery-ui-dist/jquery-ui";

const ServiceThree = () => {

  useEffect(() => {
    $("#m-play-video").on("click", function (e) {
      e.preventDefault();
      $("#m-video-overlay").addClass("open");
      $("#m-video-overlay").append(
        '<iframe src="https://www.youtube.com/embed/Mp2piaSdzRw" width="853" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
      );
    });

    $(".m-video-overlay, .m-video-overlay-close").on("click", function (e) {
      e.preventDefault();
      close_video();
    });

    $('document').keyup(function (e) {
      if (e.keyCode === 27) {
        close_video();
      }
    });

    function close_video() {
      $(".m-video-overlay.open").removeClass("open").find("iframe").remove();
    }
  }, [])


  return (
    <div className="voopo__service__video">

      {/* Start Service Area */}
      <ServiceOne serviceSpacing="minusMargin" />
      {/* End Service Area */}

      {/* Start Video Start */}
      <div className={styles.voopoVideo}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.videoInner}>
                {/* //   {width} */}
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-xl-6 d-sm-block">

                    <div className="video-card">
                      <img src={"/assets/videos/video-img.jpg"} className="img-btn" alt="A group of happy coworkers collaborating on a project, using the Besanz communication platform on their devices." />
                      <a id="m-play-video" className="video-play-btn" href="#">
                        <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <path d="M732.502883 465.602819c-107.883492-82.3454-215.772403-164.681769-323.652282-247.014525-38.414608-29.327534-93.780555-1.929039-93.780555 46.396277v494.029051c0 48.325316 55.365948 75.725617 93.780555 46.398084 107.87988-82.332757 215.76879-164.669126 323.652282-247.014525 30.61356-23.357989 30.61356-69.436372 0-92.794362z" fill="#231815"></path>
                        </svg>
                      </a>
                    </div>

                    <div id="m-video-overlay" className="m-video-overlay">
                      <a className="m-video-overlay-close">&times;</a>
                    </div>

                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-xl-6">
                    <div className={`${styles.videoContent} m-videoContent`}>
                      <div
                        className={styles.videoContentIcon}
                        style={{
                          backgroundImage: `url(/assets/images/icons/${serviceData.serviceContentIcon}))`,
                        }}
                      />
                      <h2>{serviceData.serviceTitle.en}</h2>
                      <div />
                      <p>{serviceData.serviceContent.en}</p>
                      <p>{serviceData.serviceContent2.en}</p>
                      <p>{serviceData.serviceContent6.en}</p>
                      <p>{serviceData.serviceContent7.en}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* End Video Start */}
    </div>
  );
};

export default ServiceThree;
