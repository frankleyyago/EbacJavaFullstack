<script setup>
    const props = defineProps(['addTask', 'tempTask', 'filterSwitcher', 'tempTaskEditor'])
</script>
<template>
    <form @submit.prevent="props.addTask">
        <div class="row">
            <div class="col">
                <input :value='props.tempTask' @change="props.tempTaskEditor" required type="text"
                    placeholder="Digite aqui a descrição da tarefa" class="form-control">
            </div>
            <div class="col-md-2">
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
            <div class="col-md-2">
                <select @change="props.filterSwitcher" class="form-control">
                    <option value="all">Todas as tarefas</option>
                    <option value="pendent">Pendentes</option>
                    <option value="finished">Finalizadas</option>
                </select>
            </div>
        </div>
    </form>
</template>