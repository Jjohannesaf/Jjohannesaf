import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(0.33);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [promilles, setPromilles] = useState(0);


  function calculate() {
    let result = 0;

    if (gender === 'male') {
      result = (bottles*11.88 - ((weight/10)*time))/(weight*0.7);
    } else {
      result = (bottles*11.88 - ((weight/10)*time))/(weight*0.6);
    }
    
    // if (result <0){
    //     return;
    //   }
    

    setPromilles(result);
  }



  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Enter weight.."
          value={weight}
          onChangeText={text => setWeight(text)}
        >

        </TextInput>
      </View>

     
     
      <Text style={styles.dropdowntext}>Bottles</Text>
      <DropDownPicker style={styles.dropdown} items={[
        { label: '1 bottle', value: 0.33 },
        { label: '2 bottles', value: 0.66 },
        { label: '3 bottles', value: 0.99 },
        { label: '4 bottles', value: 1.32 },
        { label: '5 bottles', value: 1.65 },
        { label: '6 bottles', value: 1.98 },
        { label: '7 bottles', value: 2.31 },
        { label: '8 bottles', value: 2.64 },
        { label: '9 bottles', value: 2.97 },
        { label: '10 bottles', value: 3.3 },
        { label: '11 bottles', value: 3.63 },
        { label: '12 bottles', value: 3.96 },
        { label: '13 bottles', value: 4.29 },
        { label: '14 bottles', value: 4.62 },
        { label: '15 bottles', value: 4.95 },
        { label: '16 bottles', value: 5.28 },
        { label: '17 bottles', value: 5.61 },
        { label: '18 bottles', value: 5.94 },
        { label: '19 bottles', value: 6.27 },
        { label: '20 bottles', value: 6.6 },
        { label: '21 bottles', value: 6.93 },
        { label: '22 bottles', value: 7.26 },
        { label: '23 bottles', value: 7.59 },
        { label: '24 bottles', value: 7.92 },
      ]}
        containerStyle={{ height: 50 }}
        defaultValue={bottles}
        onChangeItem={item => setBottles(item.value)}
        labelStyle={{color:'#000'}}
        

      >

      </DropDownPicker>


      <Text style={styles.dropdowntext}>Time</Text>
      <DropDownPicker style={styles.dropdown} items={[
        { label: '1 hour', value: 1 },
        { label: '2 hours', value: 2 },
        { label: '3 hours', value: 3 },
        { label: '4 hours', value: 4 },
        { label: '5 hours', value: 5 },
        { label: '6 hours', value: 6 },
        { label: '7 hours', value: 7 },
        { label: '8 hours', value: 8 },
        { label: '9 hours', value: 9 },
        { label: '10 hours', value: 10 },
        { label: '11 hours', value: 11 },
        { label: '12 hours', value: 12 },
        { label: '13 hours', value: 13 },
        { label: '14 hours', value: 14 },
        { label: '15 hours', value: 15 },
        { label: '16 hours', value: 16 },
        { label: '17 hours', value: 17 },
        { label: '18 hours', value: 18 },
        { label: '19 hours', value: 19 },
        { label: '20 hours', value: 20 },
        { label: '21 hours', value: 21 },
        { label: '22 hours', value: 22 },
        { label: '23 hours', value: 23 },
        { label: '24 hours', value: 24 },
      ]}
        containerStyle={{ height: 50 }}
        defaultValue={time}
        onChangeItem={item => setTime(item.value)}
        labelStyle={{color:'#000'}}
      >

      </DropDownPicker>

      <View style={styles.field}>

        <Text>Gender</Text>
        <RadioForm
          radio_props={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]}
          onPress={(value) => { setGender(value) }}
        >

        </RadioForm>
      </View>
      <View style={styles.field}>
        <Text>Promilles</Text>
        <Text>{promilles.toFixed(2)}</Text>
        <Button onPress={calculate} title="Calculate"></Button>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginRight: 20,
    
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
  },

  dropdown: {
    flex:1,
    marginLeft: 10,
    
  },
  dropdowntext: {
    marginLeft: 10,
  },
  field: {
    margin: 10,
    
  }
});
