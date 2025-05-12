import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4ff'
    },
    containerLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginBottom: 25,
    },
    areaInput: {
        flexDirection: 'row'
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        fontSize: 17,
        padding: 10,
        borderRadius: 8,
        color: '#121212',
        marginBottom: 15
    },
    submitButton: {
        width: '90%',
        height: 45,
        borderRadius: 8,
        backgroundColor: '#3B3DBF',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitText:{
        fontSize: 20,
        color: '#fff'
    },
    link:{
        marginTop: 10,
        marginBottom: 10
    },
    linkText :{
        color: '#171717'
    }

})
