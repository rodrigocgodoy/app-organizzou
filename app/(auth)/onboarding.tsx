import { useState } from 'react';
import { useRouter } from 'expo-router';

import Link from '../../src/components/Link';
import ButtonPrimary from '../../src/components/ButtonPrimary';
import { content } from '../../src/supportPage/onboarding/content';

import {
  Container,
  ContentButtons,
  ContentStep,
  ImageStyled,
  Info,
  Step,
  Subtitle,
  Title,
} from '../../src/supportPage/onboarding/styles';

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const onNextStep = () => {
    if (step === 2) {
      router.replace('onboardingOption');
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <Container>
      <ImageStyled source={content[step].image} contentFit="contain" />
      <Info>
        <Title>{content[step].title}</Title>
        <Subtitle>{content[step].subtitle}</Subtitle>
        <ContentStep>
          <Step active={step === 0} />
          <Step active={step === 1} />
          <Step active={step === 2} />
        </ContentStep>
      </Info>
      <ContentButtons>
        <Link href="/onboardingOptions">
          Pular
        </Link>
        <ButtonPrimary onPress={onNextStep}>
          Próximo
        </ButtonPrimary>
      </ContentButtons>
    </Container>
  );
};

export default Onboarding;
