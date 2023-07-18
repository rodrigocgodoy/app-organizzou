import React from 'react';
import { Text } from 'react-native';
import { Image } from 'expo-image';
import { styled } from 'styled-components/native';

export default function Home() {
  return (
    <Container>
      <Text>Home screen</Text>
      <Img contentFit='cover' style={{ width: 400, height: 400 }} source={{ uri: 'https://organizzou-bucket.s3.amazonaws.com/avatar/8f96d532-6665-4752-949a-755aca9fa2f7-56c74069-0ca4-447a-af6d-4fed31e40586.JPG' }} />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Img = styled(Image)`
  width: 100%;
  height: 100%;
  /* background-color: green; */
`;
