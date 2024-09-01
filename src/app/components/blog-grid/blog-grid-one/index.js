import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";

const BlogGridSingle = ({ data, styles, sliderClass }) => {
  return (
    <div
      className={`col-12 col-sm-6 col-lg-4 ${sliderClass ? sliderClass : ""}`}
    >
      <div className={styles.blog}>
        <div className={styles.thumb}>
          <Link href={process.env.PUBLIC_URL + data.url} className="topbar-link">
            <img
              src={require("/assets/images/blog-img/" + data.image)}
              alt="voopo voip"
            />
          </Link>
        </div>
        <div className={styles.blogInner}>
          <div className={styles.content}>
            <span>
              On {data.date} / By :{" "}
              <Link href={process.env.PUBLIC_URL + data.authorUrl} className="topbar-link">
                {data.author}
              </Link>
            </span>
            <h2>
              <Link href={process.env.PUBLIC_URL + data.url} className="topbar-link">
                {data.title}
              </Link>
            </h2>
            <p>{data.excerpt}</p>
          </div>
          <Link href={process.env.PUBLIC_URL + data.url} className={styles.readmoreBtn}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

BlogGridSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default BlogGridSingle;
