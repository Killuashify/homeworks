import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught by ErrorBoundary:", error, errorInfo); // 👈 бачимо в консолі
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong 😢</h2>;
    }

    return this.props.children;
  }
}
