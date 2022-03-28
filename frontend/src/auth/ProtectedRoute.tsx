import { FC, ComponentType } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components";

interface ProtectedRouteProps {
  component: ComponentType
}
export const ProtectedRoute: FC<ProtectedRouteProps> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
  })
  return <Component />
};
