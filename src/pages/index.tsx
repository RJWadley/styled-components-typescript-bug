import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const Test = styled(GatsbyImage)<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
`;

export default function IndexPage() {
  return "Hello world!"
}