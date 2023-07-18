import React, { useEffect, useState } from 'react';
import { Animated, Dimensions } from 'react-native';

import {
  Container,
  Content,
} from './styles';

const { height } = Dimensions.get('window');

type ModalProps = {
  show: boolean;
  children: React.ReactNode
};

const Modal = ({ show, children }: ModalProps) => {
  const [state] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {toValue: 0, duration: 100, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: true })
    ]).start();
  };

  useEffect(() => {
    if(show){
      openModal();
    } else {
      closeModal();
    }
  }, [show]);

  return (
    <Container
      style={{
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ],
      }}
    >
      <Content
        style={{
          transform: [
            { translateY: state.modal }
          ],
        }}
      >
        {children}
      </Content>
    </Container>
  );
};

export default Modal;
