import React from "react";
import Head from "next/head";

import FooterOne from "../Footer/FooterOne";
import withScrollFixed from "../../common/withScrollFixed";
import HeaderOne from "../Header/HeaderOne";

const ScrollFixedHeader = withScrollFixed(HeaderOne);

const LayoutOne = (props) => {
  return (
    <>
      <Head>
        <title>{props.title || "Skinnovation Shop"}</title>
      </Head>
      <ScrollFixedHeader {...props} />
      {props.children}
      <FooterOne />
    </>
  );
};

export default LayoutOne;
