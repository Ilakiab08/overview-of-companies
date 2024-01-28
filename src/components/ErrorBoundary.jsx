import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

 
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', textAlign: 'center' }}>
          <h2>Something went wrong. Please try again later.</h2>
        </div>
      );
    }

  
    return this.props.children;
  }
}

export default ErrorBoundary;
