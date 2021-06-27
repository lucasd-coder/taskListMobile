import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { Toggle } from '../components/Toggle';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    } as Task;

    if(newTaskTitle.length !== 0) {
      setTasks(oldState => [...oldState, data ])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(oldState => oldState.map(
      task => task.id === id ? {...task, done: !task.done} : task      
      ));
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ));
  }

  function handleDarkMode() {
    setIsDarkMode(oldState => !oldState);
  }

  return (
    <SafeAreaView style={
        isDarkMode ?  
        styles.containerDark : 
        styles.container
    }>
        <Header  
          darkMode={isDarkMode}
        />       

      <TodoInput 
        addTask={handleAddTask}
        darkMode={isDarkMode}
      />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
        darkMode={isDarkMode}
      />

      <View style={styles.toggleView}>
          <Toggle
              style={styles.toggle}
              onPress={handleDarkMode}
              text="Dark Mode"
          />
       </View>         
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
  containerDark: {    
    flex: 1,
    backgroundColor:'#191622'
  },  
  toggle: {
    backgroundColor: '#808080',      
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',   
    borderColor: '#E6E6F0',   
    borderRadius: 50,
    width: 80,
    height: 30    
  },
  toggleView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  }
  
});