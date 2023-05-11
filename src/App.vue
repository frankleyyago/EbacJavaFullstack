<script setup>
import { reactive } from 'vue';


const estado = reactive ({
  numero1: '',
  numero2: '',
  operador: 'somar',
})

const operadores = {
  somar: '+',
  subtrair: '-',
  multiplicar: '*',
  dividir: '/',
}

function resultado() {
  const x = Number(estado.numero1)
  const y = Number(estado.numero2)
  const op = operadores[estado.operador]
  let res

  switch (op) {
    case operadores.somar:
      res = x + y
      break
    case operadores.subtrair:
      res = x - y
      break
      case operadores.multiplicar:
      res = x * y
      break
    case operadores.dividir:
      res = x / y
      break
    default:
      res = ''
      break
  }
  return res
}
</script>

<template>
  <div class="container">
    <header class="p-5 mb-4 mt-4 bg-light rounded-3">
      <h1>Calculadora Aritmética</h1>
      <p>
        Insira dois número e selecione o tipo de operação
      </p>
    </header>
    <form class="p-5 bg-light rounded-3">
      <div class="row">
        <div class="col-md-1">
          <input class="form-control" type="number" placeholder="X" v-model="estado.numero1">
        </div>
        <div class="col-md-1">
          <select class="form-control" v-model="estado.operador">
            <option value="somar">+</option>
            <option value="subtrair">-</option>
            <option value="multiplicar">x</option>
            <option value="dividir">÷</option>
          </select>
        </div>
        <div class="col-md-1">        
          <input class="form-control" type="number" placeholder="Y" v-model="estado.numero2">
        </div>
        <div class="col-md-6">
          <h2> = {{ resultado() }}</h2>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>
