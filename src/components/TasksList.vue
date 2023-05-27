<script setup>
    const props = defineProps(['tasks'])
</script>
<template>
    <ul class="list-group mt-4">
        <li class="list-group-item" v-for="task in props.tasks">
            <input @change="event => task.finished = event.target.checked" :checked="task.finished" :id="task.title"
                type="checkbox">
            <label :class="{ done: task.finished }" class="ms-3" :for="task.title">
                {{ task.title }}
            </label>
        </li>
    </ul>
</template>

<style scoped>

    .done {
        text-decoration: line-through;
    }

</style>