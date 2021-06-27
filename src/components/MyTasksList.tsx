import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface FlatListHeaderComponentProps {
  headerDark: boolean
}
function FlatListHeaderComponent(props: FlatListHeaderComponentProps) {
  return (
    <View>
      <Text style={props.headerDark ? styles.headerDark : styles.header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  darkMode: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, darkMode }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onLongPress={() => onLongPress(item.id)}
            onPress={() => onPress(item.id)}
            style={
              darkMode ? 
              (item.done ? styles.taskButtonDoneDark : styles.taskButton) : 
              (item.done ? styles.taskButtonDone : styles.taskButton)
            }            
          >
            <View 
              testID={`marker-${index}`}
              style={                
                darkMode ? 
                (item.done ? styles.taskMarkerDoneDark : styles.taskMarkerDark ) :
                (item.done ? styles.taskMarkerDone : styles.taskMarker)
              } 
            />
            <Text 
              style={               
                darkMode ? 
                (item.done ? styles.taskTextDone : styles.taskTextDark) :
                (item.done ? styles.taskTextDone : styles.taskText)

              }            
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent headerDark={darkMode} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,        
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerDark: {
    color: '#67E480',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',    
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',    
    marginRight: 10,
  },
  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#67E480',
    marginRight: 10,
  },

  taskText: {
    color: '#3D3D4D',    
  },
  taskTextDark: {
    color: '#67E480',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: '#212136',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#67E480',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }  

})