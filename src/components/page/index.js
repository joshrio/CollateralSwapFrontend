// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, First, Second } from "./styles.js";

const Page = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Page;
