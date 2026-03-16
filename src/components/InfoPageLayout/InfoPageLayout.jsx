import { Breadcrumbs, ContentContainer, PageWrapper, Title } from "./InfoPageLayout.styled";

const InfoPageLayout = ({ title, children, breadcrumbPath }) => {
  return (
    <PageWrapper>
      <Breadcrumbs>Головна / {breadcrumbPath}</Breadcrumbs>
      <ContentContainer>
        <Title>{title}</Title>
        {children}
      </ContentContainer>
    </PageWrapper>
  );
};

export default InfoPageLayout;