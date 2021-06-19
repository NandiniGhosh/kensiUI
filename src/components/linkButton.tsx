import React, { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import Button from "@material-ui/core/Button";

interface IProps {
  children: ReactNode;
  to: string;
  color: "inherit" | "primary" | "secondary" | "default" | undefined;
}

// The usage of React.forwardRef will no longer be required for react-router-dom v6.
// see https://github.com/ReactTraining/react-router/issues/6056
const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link innerRef={ref as any} {...props} />
);

const LinkButton: FC<IProps> = ({ children, to, color, ...props }) => (
  <Button color={color} component={AdapterLink} to={to} {...props}>
    {children}
  </Button>
);
export default LinkButton;
