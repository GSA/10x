import React from "react";
import MDX from "@mdx-js/runtime";
import { Link } from "react-router-dom";
import Break from "components/Break";
import Button from "features/Button";
import Card from "components/Card";
import Date from "components/Date";
import { Grid, Row, Col } from "components/Grid";
import Icon from "components/Icon";
import List from "components/List";
import Select from "components/Select";
import ContentList from "features/ContentList";
import GhostWriter from "features/GhostWriter";
import ProjectList from "features/ProjectList";
import ReportList from "features/ReportList";

export const shortcodes = {
  Break,
  Button,
  Card,
  Date,
  GhostWriter,
  Grid,
  Icon,
  Link,
  List,
  Row,
  Col,
  Select,
  ContentList,
  ProjectList,
  ReportList,
};

const Mdx = ({ children, className, components, scope }) => {
  return (
    <MDX components={{ ...shortcodes, ...components }} scope={scope}>
      {children}
    </MDX>
  );
};

Mdx.defaultProps = {
  components: {},
};
export default Mdx;
