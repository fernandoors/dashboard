import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import BaseView from "../components/Common/Base/BaseView";
import { IUser, IUserState } from "../store/user/types";

const Private = ({ component: Component, ...rest }: any) => {
  const user: IUser = useSelector(
    (state: IUserState) => state.user,
    shallowEqual
  );

  return (
    <Route
      {...rest}
      render={(props: any) =>
        user.isAuthenticated ? (
          <BaseView>
            <Component {...props} />
          </BaseView>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default Private;
