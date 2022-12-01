import TopNav from "./TopNav";
import styled from "styled-components";
import Footer from "./Footer";

const StyledLayout = styled("div")`
  min-height: 100vh;
  position: relative;
`;

const StyledContentWrapper = styled("div")`
  padding-bottom: 200px;
`;
export default function Layout({ children }) {
  return (
    <StyledLayout>
      <StyledContentWrapper>
        <TopNav />
        {children}
      </StyledContentWrapper>
      <Footer />
    </StyledLayout>
  );
}
