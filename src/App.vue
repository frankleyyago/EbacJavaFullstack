<script setup>
  let numero1 = 0;
  let numero2 = 0;
  let operacao = "somar";
  let resultado = 0;

  function calcular() {
    switch (operacao) {
      case "somar":
        resultado = numero1 + numero2;
        break;
      case "subtrair":
        resultado = numero1 - numero2;
        break;
      case "multiplicar":
        resultado = numero1 * numero2;
        break;
      case "dividir":
        resultado = numero1 / numero2;
        break;
    }
  }
  watch([() => numero1, () => numero2, () => operacao], () => {
    calcular();
  });
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
          <input class="form-control" type="number" placeholder="X" v-model="numero1">
        </div>
        <div class="col-md-1">
          <select class="form-control" v-model="operacao">
            <option value="somar">+</option>
            <option value="subtrair">-</option>
            <option value="multiplicar">x</option>
            <option value="dividir">÷</option>
          </select>
        </div>
        <div class="col-md-1">        
          <input class="form-control" type="number" placeholder="Y" v-model="numero2">
        </div>
        <div class="col-md-1">
          <h2>Resultado: {{ resultado }}</h2>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>
