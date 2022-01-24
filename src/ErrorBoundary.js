import { Component } from "react";
import styled from "styled-components";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState((state) => ({ ...state, hasError: true }));
  }

  reloadPage = () => {
    window.location.pathname = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <StyledArea>
          <h2>Something seems to have gone wrong</h2>
          <Button onClick={this.reloadPage}>Reload the animationland!</Button>
        </StyledArea>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

const StyledArea = styled.div`
  background: #566cef;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  background: white;
  color: #566cef;
  padding: 10px;
`;
