import React from "react";
import FooterView from "../Footer/FooterView";
import HeaderView from "../Header/HeaderView";
import SidebarView from "../Sidebar/SidebarView";

import { Container, Layout } from "./BaseView.styles";

type Props = {
  children: React.ReactNode;
};

const BaseView = ({ children }: Props) => {
  return (
    <Container>
      <HeaderView />
      <SidebarView />
      <Layout>{children}</Layout>
      <FooterView />
    </Container>
  );
};

export default BaseView;
