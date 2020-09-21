import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { logOut } from "../../../store/user/actions";

import { Container, Links } from "./SidebarView.styles";

const SidebarView: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  return (
    <Container>
      <Links>
        <Link to="/home">Home</Link>
        <Link to="/settings">Settings</Link>
      </Links>
      <div>
        <Button onClick={() => dispatch(logOut())}>Logout</Button>
      </div>
    </Container>
  );
};

export default SidebarView;
