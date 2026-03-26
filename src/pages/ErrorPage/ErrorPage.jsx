import { Container, ErrorBtn, TextError, Title} from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <Container>
      <Title> <span>404</span>  PAGE NOT FOUND
</Title>
<TextError> Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну </TextError>
<ErrorBtn> На головну</ErrorBtn>
    </Container>
  );
};

export default ErrorPage;
