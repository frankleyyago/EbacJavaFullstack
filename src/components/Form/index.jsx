import { useState } from "react"

import styles from './Form.module.css'

const Form = () => {
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')

    const IMC = () => {
        const calcIMC = (weight / (height * height)) * 10000
        if (isNaN(calcIMC)) {
            return (
                <p className={styles.text}>Calculadora de Indice de Massa Corporal (IMC)</p>
            )
        }
        return (
            <p className={styles.text}>Você está com {checkIMC(calcIMC)} e seu IMC é de {calcIMC.toFixed(2)}</p>
        )
    }

    const checkIMC = (calcIMC) => {        
        if (calcIMC < 14.5) {
            return 'desnutrição'
        } else if (calcIMC >= 14.5 && calcIMC <= 19.9) {
            return 'abaixo do peso normal'
        } else if (calcIMC >= 20 && calcIMC <= 24.9 ) {
            return 'o peso normal'
        } else if (calcIMC >= 25 && calcIMC <= 29.9) {
            return 'sobrepeso'
        } else if (calcIMC >=30 && calcIMC <= 39.9) {
            return 'obesidade'
        } else {
            return 'obesidade mórbida'
        }
    }

    const errorMessageHeight = (event) => {
        const newHeight = parseInt(event.target.value)
        if (newHeight <= 0) {
            setErrorMessage('A altura deve ser maior do que zero')
            setHeight(0)
        } else {
            setErrorMessage('')
            setHeight(newHeight)
        }
    }

    const errorMessageWeight = (event) => {
        const newWeight = parseInt(event.target.value)
        if (newWeight <= 0) {
            setErrorMessage('O peso deve ser maior do que zero')
            setWeight(0)
        } else {
            setErrorMessage('')
            setWeight(newWeight)
        }
    }

    return (
        <div className="container">
            <form className={styles.form}>
                <input className={styles.input} type="number" placeholder="Digite sua altura [cm]" onChange={errorMessageHeight} />
                <input className={styles.input} type="number" placeholder="Digite seu peso [kg]" onChange={errorMessageWeight} />
                {errorMessage && <p>{errorMessage}</p>}
                {IMC()}
            </form>
        </div>
    )
}

export default Form