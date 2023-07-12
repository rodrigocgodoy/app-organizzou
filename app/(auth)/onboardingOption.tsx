
import OnboardingImage from '../../assets/onboardingOption.png';
import LogoImage from '../../assets/logo-completed.svg';
import ButtonLinkPrimary from '../../src/components/ButtonLinkPrimary';
import ButtonLinkSecundary from '../../src/components/ButtonLinkSecundary';
import { Container, ContentButtons, ImageStyled, Logo } from '../../src/supportPage/onboardingOption/styles';

const OnboardingOption = () => {
  return (
    <Container>
      <Logo source={LogoImage} contentFit="contain" />
      <ImageStyled source={OnboardingImage} contentFit="contain" />
      <ContentButtons>
        <ButtonLinkPrimary href="/login">
          Login
        </ButtonLinkPrimary>
        <ButtonLinkSecundary href="/register">
          Cadastrar-se
        </ButtonLinkSecundary>
      </ContentButtons>
    </Container>
  );
};

export default OnboardingOption;
