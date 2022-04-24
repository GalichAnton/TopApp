import { LayoutProps } from "./LayoutProps";
import styles from "./Layout.module.css";
import { SideBar } from "./SideBar/SideBar";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { FunctionComponent } from "react";
import { AppContextProvider, IAppContext } from "../context/AppContext";
import { Up } from "../components";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />

      <SideBar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
