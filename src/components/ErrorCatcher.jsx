import React from "react";
import ErrorPage from "../pages/ErrorPage.jsx";

class ErrorCatcher extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error });
    if (process.env.NODE_ENV === "production") console.error(error, info);
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) return <ErrorPage error={error.toString()} />;
    return this.props.children;
  }
}

export default ErrorCatcher;
