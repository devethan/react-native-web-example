import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const App = () => {
  // 플랫폼 별로 분기 처리하기
  const platformName = Platform.OS === 'web' ? '웹' : '모바일';

  return (
    <View style={style.container}>
      <Text style={style.text}>{`${platformName}에서 그렸습니다 🎉`}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS === 'web' ? '100vh' : undefined,
  },
  text: {
    fontSize: 24,
  },
});

export default App;
