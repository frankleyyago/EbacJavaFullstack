<script setup>
  import { reactive } from 'vue';
  import Header from './components/Header.vue'
  import Form from './components/Form.vue'
  import TasksList from './components/TasksList.vue'

const state = reactive({
  filter: 'all',
  tempTask: '',
  tasks: [
    {
      title: 'Estudar ES6',
      finished: false,
    },
    {
      title: 'Estudar SASS',
      finished: false,
    },
    {
      title: 'Ir para a academia',
      finished: true,
    }
  ]
})

const getPendentTasks = () => {
  return state.tasks.filter(task => !task.finished)
}

const getFinishedTasks = () => {
  return state.tasks.filter(task => task.finished)
}

const getFilteredTasks = () => {
  const { filter } = state

  switch (filter) {
    case 'pendent':
      return getPendentTasks()
    case 'finished':
      return getFinishedTasks()
    default:
      return state.tasks
  }
}

  const addTask = () => {
    const newTask = {
      title: state.tempTask,
      finished: false,
    }
    state.tasks.push(newTask)
    state.tempTask = ''
  }
</script>

<template>
  <div class="container">
    <Header :pendent-tasks="getPendentTasks().length" />
    <Form :filter-switcher="event => state.filter = event.target.value" :temp-task="state.tempTask" filter-switcher="event => state.tempTask = event.target.value" :add-task="addTask" />
    <TasksList :tasks="getFilteredTasks()" />
  </div>
</template>