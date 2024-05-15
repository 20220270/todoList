import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Inputs from './src/components/Inputs'
import Botones from './src/components/Botones'
import { useState } from 'react';

export default function App() {

  /* Codigo javascript */

  const [tasks, setTasks] = useState([
    { id: 1, nombreTarea: 'Botar la basura', estado: 'pendiente' },
    { id: 2, nombreTarea: 'Hacer un cereal', estado: 'pendiente' },
    { id: 3, nombreTarea: 'Ir a estudiar', estado: 'pendiente' },
    { id: 4, nombreTarea: 'Trabajar', estado: 'pendiente' },
    { id: 5, nombreTarea: 'Trabajar hoy', estado: 'pendiente' },
  ]);

  const [inputValue, setInputValue] = useState('');

  const toggleTaskState = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, estado: task.estado === 'pendiente' ? 'completada' : 'pendiente' } : task
    ));
  };

  const [highlightedTask, setHighlightedTask] = useState(null);

  const handleLongPress = (taskId) => {
    setHighlightedTask(taskId);
    setTimeout(() => {
      if (highlightedTask === taskId) {
        setHighlightedTask(null);
      }
    }, 20000); // Cambia a null después de 20 segundos
  };

  

  /* Codigo javascript */

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>TODO LIST</Text>
      <Inputs texto_label="Nueva tarea" value={inputValue} onChangeText={setInputValue} />
      <Botones texto_boton="Enviar" />

      {tasks.map((task) => (
        <TouchableOpacity
          key={task.id}
          onPress={() => toggleTaskState(task.id)}
          onLongPress={() => handleLongPress(task.id)}
          onPressOut={() => {}}
        >
          <View style={[styles.card, highlightedTask === task.id && styles.highlighted]}>
            <Text style={{ textDecorationLine: task.estado === 'completada' ? 'line-through' : 'none' }}>
              {task.nombreTarea}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      <StatusBar style="auto" />
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 30,
    padding: 10,
    marginBottom: 20
  },

  card: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    width: 350,
    borderColor: 'black',
    borderWidth: 1,
  },

  highlighted: {
    backgroundColor: 'green',
  },

});
