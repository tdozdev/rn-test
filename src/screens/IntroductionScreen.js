import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

function IntroductionScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile.jpeg')}
        style={styles.profilePic}
      />
      <Text style={styles.name}>김영근</Text>
      <Text style={styles.contact}>휴대폰 번호: 010-9458-8523</Text>
      <Text style={styles.contact}>이메일: ygcarrot@gmail.com</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/tdozdev')}>
        <Text style={styles.githubLink}>GitHub: tdozdev</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75, // 원형 이미지를 만들기 위해
  },
  name: {
    fontSize: 24,
    marginVertical: 8,
  },
  contact: {
    fontSize: 16,
    marginVertical: 4,
  },
  githubLink: {
    fontSize: 16,
    color: 'blue',
    marginVertical: 8,
  },
});

export default IntroductionScreen;