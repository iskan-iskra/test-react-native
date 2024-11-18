import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [counter, setCounter] = useState(0);
  const incrementHandler = () => setCounter((v) => v + 1);
  const decrementHandler = () => setCounter((v) => v - 1);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.counter}>{counter}</Text>
          <Button title="increment" onPress={incrementHandler} />
          <Button title="decrement" onPress={decrementHandler} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  counter: {
    margin: "auto",
  },
});
