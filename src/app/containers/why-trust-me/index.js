import React from "react";
import styles from "./WhyTrustMe.module.scss";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyTrustMe = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true
  };

  const clientSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  };

  return (
    <>
      <div className={`${styles.testimonials} m-testimonials`}>
        <div className="container testimonials-warap">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.contentWrap}>
                <div>
                  <h6>testimonials</h6>
                  <h1>What our Clients say</h1>

                  <Slider {...settings}>
                    <div className={styles.slide}>
                      <div className={styles.itemHolder}>
                        <div className={styles.itemIcon}>
                          <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M576.967111 554.894222C576.967111 227.84 849.550222 34.844444 1024 0v192.995556c-95.402667 29.496889-209.891556 179.598222-215.324444 343.125333H1024V739.555556c0 157.098667-127.345778 284.444444-284.444444 284.444444h-162.588445V554.894222zM0 554.894222C0 227.84 272.583111 34.844444 447.032889 0v192.995556c-95.402667 29.496889-209.891556 179.598222-215.324445 343.125333h212.593778V739.555556c0 157.098667-127.345778 284.444444-284.444444 284.444444H0V554.894222z" />
                          </svg>
                        </div>
                        <div className={styles.itemDesc}>
                          A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear.
                        </div>
                      </div>

                      <div className={styles.itemBottom}>
                        <div className={styles.itemImage}>
                          <img src={"/assets/images/author1.jpg"} />
                        </div>
                        <div className={styles.itemMeta}>
                          <h4 className={styles.itemTitle}>Van Hunter</h4>
                          <div className={styles.itemPosition}>Leadership Group</div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.slide}>
                      <div className={styles.itemHolder}>
                        <div className={styles.itemIcon}>
                          <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M576.967111 554.894222C576.967111 227.84 849.550222 34.844444 1024 0v192.995556c-95.402667 29.496889-209.891556 179.598222-215.324444 343.125333H1024V739.555556c0 157.098667-127.345778 284.444444-284.444444 284.444444h-162.588445V554.894222zM0 554.894222C0 227.84 272.583111 34.844444 447.032889 0v192.995556c-95.402667 29.496889-209.891556 179.598222-215.324445 343.125333h212.593778V739.555556c0 157.098667-127.345778 284.444444-284.444444 284.444444H0V554.894222z" />
                          </svg>
                        </div>
                        <div className={styles.itemDesc}>
                          A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear.
                        </div>
                      </div>

                      <div className={styles.itemBottom}>
                        <div className={styles.itemImage}>
                          <img src={"/assets/images/author2.jpg"} />
                        </div>
                        <div className={styles.itemMeta}>
                          <h4 className={styles.itemTitle}>Van Hunter</h4>
                          <div className={styles.itemPosition}>Leadership Group</div>
                        </div>
                      </div>
                    </div>
                  </Slider>

                </div>
              </div>
            </div>

            <div className={`${styles.imgWrap} m-testimonial-imgWrap`}>
              <img src={"/assets/images/testimonial-right1.jpg"} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.certification}>
        <div className="container">
          <div className="row">
            <h1>How Can Besanz's Cloud-Based Phone Solution Benefit Your Business?</h1>
            <p className="col-lg-6">Besanz's cloud-based phone solution offers all the benefits of a cloud-based phone system, and more. Here are some of the key features of Besanz's phone solution:</p>
          </div>

          <div className="row">
            <div className={`${styles.benefit2} m-benefit2`}>
              <div className={styles.itemIcon}>
                01
              </div>

              <div className={styles.content}>
                <h1>Customizable Plans</h1>
                <p>Besanz offers customizable plans that can be tailored to the specific needs of your business. Whether you are a small business owner or a large corporation, Besanz has a plan that will suit your requirements.</p>
              </div>
            </div>

            <div className={`${styles.benefit2} m-benefit2`}>
              <div className={styles.itemIcon}>
                02
              </div>

              <div className={styles.content}>
                <h1>Advanced Features</h1>
                <p>Besanz's phone solution offers a range of advanced features, including call recording, voicemail-to-email, call forwarding, and more. These features can help your business operate more efficiently, and provide a better customer experience.
                </p>
              </div>
            </div>

            <div className={`${styles.benefit2} m-benefit2`}>
              <div className={styles.itemIcon}>
                03
              </div>

              <div className={styles.content}>
                <h1>Easy Setup</h1>
                <p>Setting up Besanz's phone solution is easy and straightforward. Besanz will take care of all the necessary hardware and software, and you can be up and running in no time.
                </p>
              </div>
            </div>

            <div className={`${styles.benefit2} m-benefit2`}>
              <div className={styles.itemIcon}>
                04
              </div>

              <div className={styles.content}>
                <h1>Scalability</h1>
                <p>Besanz's phone solution is highly scalable, which means that it can grow with your business. As your business expands, you can easily add new phone lines or features, without having to purchase new hardware or equipment.
                </p>
              </div>
            </div>

            <div className={`${styles.benefit2} m-benefit2`}>
              <div className={styles.itemIcon}>
                05
              </div>

              <div className={styles.content}>
                <h1>24/5 Support</h1>
                <p>Besanz's phone solution comes with 24/7 support, which means that you can get help whenever you need it. Whether you have a question about the phone system or need assistance with a technical issue, Besanz's support team is always available to help.
                </p>
              </div>
            </div>

            <div className={`${styles.benefit2} m-benefit2`}>
              <div className={styles.itemIcon}>
                06
              </div>

              <div className={styles.content}>
                <h1>Cost Savings</h1>
                <p>Besanz's cloud-based phone solution can save your business money in several ways. Firstly, you do not need to invest in expensive hardware or equipment, as Besanz will take care of all the necessary equipment and software. Secondly, you can reduce your monthly phone bills, as calls are routed over the internet and are typically cheaper than traditional phone lines. Thirdly, you can avoid costly maintenance and upgrades, as Besanz will take care of these tasks.</p>
              </div>
            </div>

            <div className={`${styles.benefit2} m-benefit2`}>
              <div className={styles.itemIcon}>
                07
              </div>

              <div className={styles.content}>
                <h1>Security</h1>
                <p>Besanz's phone solution is highly secure, with end-to-end encryption for all calls and data. This means that your business communications are protected from hackers and other security threats.</p>
              </div>
            </div>

            <div className={`${styles.benefit2} m-benefit2`}>
              <div className={styles.itemIcon}>
                08
              </div>

              <div className={styles.content}>
                <h1>Integration with Other Services</h1>
                <p>Besanz's phone solution can integrate with other services, such as CRM and helpdesk software, to provide a seamless and integrated communication experience. This integration can help your business operate more efficiently, and provide a better customer experience.
                </p>
              </div>
            </div>

            <div className={`${styles.benefit2} m-benefit2`}>
              <div className={styles.itemIcon}>
                09
              </div>

              <div className={styles.content}>
                <h1>Mobile App</h1>
                <p>Besanz's phone solution comes with a mobile app that allows you to make and receive calls from your smartphone, as if you were in the office. This feature is especially useful for remote workers, as it allows them to stay connected even when they are on the go. <br /><br /> In conclusion, a cloud-based phone solution offered by Besanz can revolutionize your business communications and help you stay ahead of the competition. With customizable plans, advanced features, easy setup, scalability, 24/7 support, cost savings, security, integration with other services, and a mobile app, Besanz's phone solution is the perfect choice for businesses of all sizes. If you are looking for a reliable and efficient phone system that can help you communicate more effectively with your customers, clients, and employees, consider a cloud-based phone solution offered by Besanz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.clientLogo}>
        <div className="container">
          <div className="row">
            <div className={styles.clientLogoWrap}>
              <Slider {...clientSettings}>
                <div className={styles.slide}>
                  <img src={"/assets/images/phonepartners/cisco.png"} className={styles.cisco} alt="cisco" />
                </div>

                <div className={styles.slide}>
                  <img src={"/assets/images/phonepartners/Polycom.png"} className={styles.polycom} alt="Polycom" />
                </div>

                <div className={styles.slide}>
                  <img src={"/assets/images/phonepartners/Snom.png"} alt="Snom" />
                </div>

                <div className={styles.slide}>
                  <img src={"/assets/images/phonepartners/Yealink.png"} alt="Yealink" />
                </div>

                <div className={styles.slide}>
                  <img src={"/assets/images/phonepartners/grandstream.png"} alt="grandstream" />
                </div>

                <div className={styles.slide}>
                  <img src={"/assets/images/phonepartners/avaya.png"} alt="avaya" />
                </div>

                <div className={styles.slide}>
                  <img src={"/assets/images/phonepartners/algo.png"} alt="algo" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyTrustMe;