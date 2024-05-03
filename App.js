import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Inputs from './src/components/Inputs'
import Botones from './src/components/Botones'
import { useState } from 'react';

export default function App() {

  /* Codigo javascript */

  const [tarea, setTarea] = useState('')

  let tasks = [{ id: 1, nombreTarea: 'Botar la basura' },
  { id: 2, nombreTarea: 'Hacer un cereal' },
  { id: 3, nombreTarea: 'Ir a estudiar' },
  { id: 4, nombreTarea: 'Trabajar' },
  { id: 5, nombreTarea: 'Trabajar hoy' }]

  const handleEnviar = () => {
    if (tarea.trim() !== '') {
      // Agregar una nueva tarea al estado con un ID único
      setTasks(prevTasks => [
        ...prevTasks,
        {
          id: Math.max(...prevTasks.map(task => task.id), 0) + 1,
          nombreTarea: tarea
        }
      ]);
      // Limpiar el input después de agregar la tarea
      setTarea('');
    }
  };


  /* Codigo javascript */

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>TODO LIST</Text>

      <Inputs

      />

            <Botones
                texto_boton='Enviar'
                onPress={handleEnviar}
            />

      {/* Mapeamos el arreglo de tareas y renderizar cada una como una card, igual que en el ejemplo 
      de los artistas, a excepcion que ahora los mapeamos desde un view */}
       {/* Key nos identifica los elementos que se han agregado */}
       {tasks.map(task => (
        <View key={task.id} style={styles.card}>
          <Text>{task.nombreTarea}</Text>
        </View>
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

});
