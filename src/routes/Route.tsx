import React from "react";
import { useSelector } from "react-redux";

import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from "react-router-dom";

import { IUser, IUserState } from "../store/user/types";

interface IRouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

function Route({ isPrivate, component: Component, ...rest }: IRouteProps) {
  const user: IUser = useSelector((state: IUserState) => state.user);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        !!isPrivate === user.isAuthenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: !isPrivate ? "/rh" : "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default Route;
