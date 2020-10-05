import React from "react";
import MDX from "@mdx-js/runtime";
import { Link } from "react-router-dom";
import Button from "components/Button";
import Card from "components/Card";
import ColorBox from "components/ColorBox";
import Date from "components/Date";
import { Grid, Row, Col } from "components/Grid";
import Icon from "components/Icon";
import Image from "components/Image";
import List from "components/List";
import Select from "components/Select";
import ContentList from "features/ContentList";
import LocationMenu from "features/LocationMenu";
import ProjectList from "features/ProjectList";

export const shortcodes = {
  Button,
  Card,
  ColorBox,
  Date,
  Grid,
  Icon,
  Image,
  Link,
  List,
  Row,
  Col,
  Select,
  ContentList,
  LocationMenu,
  ProjectList,
};

const Mdx = ({ children, scope }) => {
  return (
    <MDX components={shortcodes} scope={scope}>
      {children}
    </MDX>
  );
};

export default Mdx;
