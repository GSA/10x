import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import Header from "./Header";
import Logo from "components/Logo";
import Footer from "./Footer";
import useOnPathChange from "utils/useOnPathChange";
import registerAnalytics from "utils/registerAnalytics";
import { getMenuList } from "app/MenuModule";
import { getFooterList, getSettings } from "app/SettingsModule";
import { Helmet } from "react-helmet";

const Primary = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettings());
    dispatch(getMenuList({}));
    dispatch(getFooterList({}));
  }, [dispatch]);
  useOnPathChange(() => {
    /* istanbul ignore next */
    registerAnalytics();
  });

  const page = useSelector((state) => state.content.page);
  /* istanbul ignore next */
  const { type, theme } = page.data;
  const pageTheme = type === "projects" ? "5" : !theme ? "6" : theme;
  return (
    <>
      <Helmet></Helmet>
      <div
        className={classnames({
          "usa-app": true,
          [`usa-app__theme-${pageTheme}`]: Boolean(pageTheme),
        })}
      >
        <div className="usa-app__bg">
          <Header logo={<Logo />} />
          <main role="main" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Primary;
