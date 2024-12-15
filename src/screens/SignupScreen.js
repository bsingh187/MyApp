// // src/screens/SignupScreen.js

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

// const SignupScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const handleSignup = () => {
//     // Handle signup logic here
//     alert('Signup Successful');
//     navigation.navigate('Login');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Sign Up</Text>
//       </View>

//       <View style={styles.form}>
//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           placeholderTextColor="#ccc"
//           value={name}
//           onChangeText={setName}
//         />
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

//         <TouchableOpacity style={styles.button} onPress={handleSignup}>
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.link}>
//           <Text style={styles.linkText}>Already have an account? Login</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2c3e50', // Dark black background
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

// export default SignupScreen;



// src/screens/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/features/loginSlice';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleSignup = () => {
    // Here you would normally save user data to backend or local storage
    const user = { email, password };
    dispatch(login(user)); // Store user data in Redux

    alert('Signup Successful');
    navigation.navigate('Home'); // Navigate to the Home screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />
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

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.link}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c3e50', // Dark black background
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
      color: '#3498db', 
    },
  });

export default SignupScreen;
