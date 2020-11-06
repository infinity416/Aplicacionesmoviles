import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ResultCalculation(props) {
    const {capital, interest, months, total, errorMessage}=props;
    console.log(props);
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxContent}>
                    <Text style={styles.title}>Resumen</Text>
                    <DataResult title={"Cantidad Solicitada:"} value={`$ ${capital}`}/>
                    <DataResult title={"Interes:"} value={`${interest}%`}/>
                    <DataResult title={"Plazos:"} value={`${months} meses`}/>
                    <DataResult title={"Pago mensual:"} value={`$ ${total.mothleyFee}`}/>
                    <DataResult title={"Pago total:"} value={`$ ${total.totalPayable}`}/>
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}

function DataResult (props){
    const {title, value}=props
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error:{
        textAlign: "center",
        color: "#f00",
        fontWeight: "bold",
        fontSize: 20,
    },
    content:{
        marginTop: 10,
        marginHorizontal: 40,
    },
    boxContent:{
        padding: 30,
    },

    title:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
    },

    value:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    }
})
