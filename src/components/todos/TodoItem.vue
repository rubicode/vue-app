<script setup>
import { useTodosStore } from '@/stores/todos';
import { ref, toRefs } from 'vue';

const props = defineProps({
    no: {
        type: Number,
        required: true
    },
    todo: {
        type: Object,
        required: true
    }
});

const { no, todo } = toRefs(props);

const todosStore = useTodosStore()
const onEdit = ref(false)
const title = ref(todo.value.title)
const complete = ref(todo.value.complete)

function onUpdate(){
    todosStore.updateTodo(todo.value._id, title.value, complete.value)
    onEdit.value = false
}

</script>

<template>
    <tr v-if="onEdit">
        <td>{{ no }}</td>
        <td>
            <input className="form-control" type="text" v-model="title" />
        </td>
        <td>
            <select className="form-control" v-model="complete">
                <option :value="false">Belum</option>
                <option :value="true">Sudah</option>
            </select>
        </td>
        <td>
            <button className="btn btn-primary" type="button" @click="onUpdate">Save</button>
            <button className="btn btn-warning" type="button" @click="onEdit = false">Cancel</button>
        </td>
    </tr>
    <tr v-else>
        <td>{{ no }}</td>
        <td>{{ todo.title }}</td>
        <td>{{ todo.complete ? 'sudah' : 'belum' }}</td>
        <td>
            <button className="btn btn-success" type="button" @click="onEdit = true">Edit</button>
            <button className="btn btn-danger" type="button" @click="todosStore.removeTodo(todo._id)">Hapus</button>
        </td>
    </tr>
</template>