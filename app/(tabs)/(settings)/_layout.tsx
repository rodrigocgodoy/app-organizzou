import React from 'react';
import { Stack } from 'expo-router';

const LayoutSettings = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default LayoutSettings;
