import React from "react";
import Link from "next/link";
import styles from "./BlogPostWithSidebar.module.scss";
import BlogSidebar from "../blog-sidebar";

const BlogPostWithSidebar = ({ sidebarPosition }) => {
  return (
    <div className="voopo__blog__area pb--120">
      <div className="container">
        <div className="row">
          <div
            className={` col-12 col-lg-8 ${sidebarPosition && sidebarPosition === "left"
                ? "order-1 order-lg-2"
                : ""
              }`}
          >
            <div className={styles.blogListWrapper}>
              {/* Start Single Blog */}
              <div className={styles.blogList}>
                <div className={styles.content}>
                  <h2>
                    <Link href={"/blog-post"}>
                      This is the best tower &amp; communication way, 2020
                    </Link>
                  </h2>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure the moment, so blinded by desire, that
                    they cannot foesee the pain and trouble that are bound to
                    ensue.
                  </p>
                  <ul className={styles.blogMeta}>
                    <li>13 Feb 2020</li>
                    <li className={styles.separator}>/</li>
                    <li>
                      By:{" "}
                      <Link href={"/blog"}>
                        John Doe
                      </Link>
                    </li>
                  </ul>
                  <ul className={styles.blogCat}>
                    <li>
                      <Link href={"/blog"}>
                        News
                      </Link>
                    </li>
                    <li>
                      <Link href={"/blog"}>
                        Techno
                      </Link>
                    </li>
                    <li>
                      <Link href={"/blog"}>
                        Network
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.thumb}>
                  <Link href={"/blog-post"}>
                    <img
                      src={"/assets/images/blog/md1.png"}
                      alt="voopo voip"
                    />
                  </Link>
                </div>
              </div>
              {/* End Single Blog */}
              {/* Start Single Blog */}
              <div className={`${styles.blogList}`}>
                <div className={styles.thumb}>
                  <Link href={"/blog-post"}>
                    <img
                      src={"/assets/images/blog/md2.png"}
                      alt="voopo voip"
                    />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h2>
                    <Link href={"/blog-post"}>
                      Lorem ipsum dolor set amet
                    </Link>
                  </h2>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure the moment, so blinded by desire, that
                    they cannot foesee the pain and trouble that are bound to
                    ensue.
                  </p>
                  <ul className={styles.blogMeta}>
                    <li>14 Feb 2020</li>
                    <li className={styles.separator}>/</li>
                    <li>
                      By:{" "}
                      <Link href={"/blog"}>
                        John Doe
                      </Link>
                    </li>
                  </ul>
                  <ul className={styles.blogCat}>
                    <li>
                      <Link href={"/blog"}>
                        News
                      </Link>
                    </li>
                    <li>
                      <Link href={"/blog"}>
                        Techno
                      </Link>
                    </li>
                    <li>
                      <Link href={"/blog"}>
                        Network
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Blog */}
              {/* Start Single Blog */}
              <div className={styles.blogList}>
                <div className={styles.content}>
                  <h2>
                    <Link href={"/blog-post"}>
                      Usefulness of VoIP 2020
                    </Link>
                  </h2>
                  <ul className={styles.blogMeta}>
                    <li>15 Feb 2020</li>
                    <li className={styles.separator}>/</li>
                    <li>
                      By:{" "}
                      <Link href={"/blog"}>
                        John Doe
                      </Link>
                    </li>
                  </ul>
                  <ul className={styles.blogCat}>
                    <li>
                      <Link href={"/blog"}>
                        News
                      </Link>
                    </li>
                    <li>
                      <Link href={"/blog"}>
                        Techno
                      </Link>
                    </li>
                    <li>
                      <Link href={"/blog"}>
                        Network
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.thumb}>
                  <Link href={"/blog-post"}>
                    <img
                      src={"/assets/images/blog/md3.png"}
                      alt="voopo voip"
                    />
                  </Link>
                </div>
              </div>
              {/* End Single Blog */}
              {/* Start Single Blog */}
              <div className={`${styles.blogList}`}>
                <div className={styles.thumb}>
                  <Link href={"/blog-post"}>
                    <img
                      src={"/assets/images/blog/md4.png"}
                      alt="voopo voip"
                    />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h2>
                    <Link href={"/blog-post"}>
                      The best tower &amp; communication way, 2020
                    </Link>
                  </h2>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure the moment, so blinded by desire, that
                    they cannot foesee the pain and trouble that are bound to
                    ensue.
                  </p>
                  <ul className={styles.blogMeta}>
                    <li>16 Feb 2020</li>
                    <li className={styles.separator}>/</li>
                    <li>
                      By:{" "}
                      <Link href={"/blog"}>
                        John Doe
                      </Link>
                    </li>
                  </ul>
                  <ul className={styles.blogCat}>
                    <li>
                      <Link href={"/blog"}>
                        News
                      </Link>
                    </li>
                    <li>
                      <Link href={"/blog"}>
                        Techno
                      </Link>
                    </li>
                    <li>
                      <Link href={"/blog"}>
                        Network
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
          </div>
          <div
            className={`col-12 col-lg-4 sm__mt--40 md__mt--40 ${sidebarPosition && sidebarPosition === "left"
                ? "order-2 order-lg-1"
                : ""
              } ${sidebarPosition && sidebarPosition === "left"
                ? styles.spaceRight
                : styles.spaceLeft
              }`}
          >
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostWithSidebar;
