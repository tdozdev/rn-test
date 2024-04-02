import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import projects from '../data/projectsData';

const ProjectDetailScreen = ({ route, navigation }) => {
  const { projectId } = route.params;
  const project = projects.find(p => p.id === projectId);

  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailTitle}>{project.title}</Text>
      <Text style={styles.detailDescription}>{project.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default ProjectDetailScreen;