import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
    this.setState((state) => ({ ...state, hasError: true }));
  }

  reloadPage = () => {
    window.location.pathname = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Något gick fel</h1>
          <button onClick={this.reloadPage}>Ladda om</button>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
