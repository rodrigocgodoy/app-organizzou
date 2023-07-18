import React, { Fragment } from 'react';

import LinkBack from '../../../src/components/LinkBack';
import IconArrowRight from '../../../src/components/icons/arrowRight';
import IconExit from '../../../src/components/icons/exit';
import { itemsMenuSettingsHome } from '../../../src/supportPage/settingsHome/content';

import {
  Avaliation,
  AvaliationSubtitle,
  AvaliationTitle,
  BadgePremium,
  BadgePremiumText,
  Body,
  Container,
  Header,
  ItemContentMenu,
  ItemMenu,
  ItemMenuLink,
  ItemMenuText,
  LinkContent,
  Subtitle,
  Title
} from '../../../src/supportPage/settingsHome/styles';

const SettingsHome = () => {
  return (
    <Container>
      <Header>
        <LinkContent>
          <LinkBack />
        </LinkContent>
        <Title>Minha conta</Title>
      </Header>
      <Body>
        {itemsMenuSettingsHome?.map((item, index) => {
          return (
            <Fragment key={item.name}>
              <Subtitle>{item?.name}</Subtitle>
              {item?.subMenu?.map((item2) => (
                <ItemMenuLink href={item2.href} key={item2.name}>
                  <ItemMenu>
                    <ItemContentMenu>
                      {item2.icon}
                      <ItemMenuText>{item2.name}</ItemMenuText>
                    </ItemContentMenu>
                    <ItemContentMenu>
                      {item2?.isPremium && (
                        <BadgePremium>
                          <BadgePremiumText>Premium</BadgePremiumText>
                        </BadgePremium>
                      )}
                      <IconArrowRight />
                    </ItemContentMenu>
                  </ItemMenu>
                </ItemMenuLink>
              ))}
              {index === 1 && (
                <Avaliation>
                  <AvaliationTitle>
                    Você está gostando do Orzanizzou?
                  </AvaliationTitle>
                  <AvaliationSubtitle>
                    Queremos saber como está sendo sua experiência com 
                    nosso aplicativo.
                  </AvaliationSubtitle>
                </Avaliation>
              )}
            </Fragment>
          );
        })}
        <ItemMenu isBorder onPress={() => console.log('Opa')}>
          <ItemContentMenu>
            <IconExit />
            <ItemMenuText>Sair</ItemMenuText>
          </ItemContentMenu>
          <ItemContentMenu>
            <IconArrowRight />
          </ItemContentMenu>
        </ItemMenu>
      </Body>
    </Container>
  );
};

export default SettingsHome;
