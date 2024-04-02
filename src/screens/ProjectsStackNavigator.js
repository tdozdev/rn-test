import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectsScreen from './ProjectsScreen';
import ProjectDetailScreen from './ProjectDetailScreen';

const Stack = createStackNavigator();

function ProjectsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="ProjectDetail" component={ProjectDetailScreen} />
    </Stack.Navigator>
  );
}

export default ProjectsStackNavigator;