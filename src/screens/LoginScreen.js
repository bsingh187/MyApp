// // src/screens/LoginScreen.js

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Handle login logic here
//     alert('Login Successful');
//     navigation.navigate('Home');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Login</Text>
//       </View>

//       <View style={styles.form}>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#ccc"
//           value={email}
//           onChangeText={setEmail}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#ccc"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.link}>
//           <Text style={styles.linkText}>Forgot your password?</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.link}>
//           <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2c3e50', 
//     justifyContent: 'center',
//   },
//   header: {
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   form: {
//     paddingHorizontal: 30,
//   },
//   input: {
//     height: 50,
//     backgroundColor: '#34495e', // Light dark blue background
//     marginBottom: 15,
//     paddingLeft: 15,
//     borderRadius: 10,
//     color: '#fff',
//   },
//   button: {
//     height: 50,
//     backgroundColor: '#e74c3c', // Red button color
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   link: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   linkText: {
//     color: '#3498db', // Blue link color
//   },
// });

// export default LoginScreen;



// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/features/loginSlice';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    // Here you would normally validate with a backend
    const user = { email, password };
    dispatch(login(user)); // Store user data in Redux
    alert('Login Successful');
    navigation.navigate('Visual'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.link}>
          <Text style={styles.linkText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.link}>
          <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c3e50', 
      justifyContent: 'center',
    },
    header: {
      paddingBottom: 20,
      alignItems: 'center',
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
    },
    form: {
      paddingHorizontal: 30,
    },
    input: {
      height: 50,
      backgroundColor: '#34495e', // Light dark blue background
      marginBottom: 15,
      paddingLeft: 15,
      borderRadius: 10,
      color: '#fff',
    },
    button: {
      height: 50,
      backgroundColor: '#e74c3c', // Red button color
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    link: {
      marginTop: 15,
      alignItems: 'center',
    },
    linkText: {
      color: '#3498db', // Blue link color
    },
  });

export default LoginScreen;
