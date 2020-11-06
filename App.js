import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox, Button} from "react-native";
import Form from "./src/components/Forms";
import ResultCalculation from "./src/components/ResultCalculation";
import Footer from "./src/components/Footer";
import colors from "./src/utils/colors";


YellowBox.ignoreWarnings(['Picker has been extracted']);

export default function App(){
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] =useState(null);
  const [total, setTotal]= useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() =>{
    if(capital && interest && months){
      calculate();
    }else{
      reset();
    }
  }, [capital, interest, months])

  const calculate=() =>{
    reset();
    if (!capital){
      setErrorMessage("Añade la catidad que quieres solicitar.");
    } else if (!interest){
      setErrorMessage("Añade el interes del prestamo.");
    } else if (!months){
      setErrorMessage("Selecciona el plazo del préstamo.");
    } else{
      const i = interest/100;
      const fee = capital / ((1-Math.pow(i+1, -months))/i);

      setTotal({
        mothleyFee: fee.toFixed(2),
        totalPayable: (fee*months).toFixed(2),
      })
    }
  }

  const reset = () =>{
    setErrorMessage ("");
    setTotal (null);
  }

  return(
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background} />
      <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
      <Form 
        setCapital={setCapital}
        setInterest={setInterest}
        setMonths={setMonths}
      />
    </SafeAreaView>
    <ResultCalculation
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage} 
     />
    <Footer calculate={calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    height: 290,
    alignItems: 'center',
  },

  background:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  
  titleApp:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  }


})
