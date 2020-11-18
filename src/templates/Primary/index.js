import React from "react";
import { useSelector } from "react-redux";
import classnames from "classnames";
import Header from "./Header";
import Logo from "components/Logo";
import Mdx from "features/Mdx";
import Footer from "./Footer";
import useOnPathChange from "utils/useOnPathChange";
import registerAnalytics from "utils/registerAnalytics";

const Primary = ({ children }) => {
  useOnPathChange(() => {
    /* istanbul ignore next */
    registerAnalytics();
  });

  const page = useSelector((state) => state.content.page);
  /* istanbul ignore next */
  const template = page.data ? page.data.template : "";

  return (
    <div
      className={classnames({
        "usa-app": true,
        [`usa-theme-${template}`]: Boolean(template),
      })}
    >
      <Header logo={<Logo />} />
      <main role="main" id="main-content">
        {page.data.hero && (
          <div
            className={classnames({
              TxContent: true,
              [`Tx__${page.data.name}`]: page.data.name,
            })}
          >
            <Mdx>{page.data.hero}</Mdx>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Primary;
