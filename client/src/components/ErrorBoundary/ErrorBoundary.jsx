import React, { Component } from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./ErrorBoundary.styles";

export default class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(error) {
    // Process Error
    return {
      hasErrored: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored === true) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>La pagina esta rota!</ErrorImageText>
        </ErrorImageOverlay>
      );
    } else {
      return this.props.children;
    }
  }
}
