<template>
  <div>
    <div
      class="bg-white bg-opacity-50 min-w-1xl flex flex-col rounded-xl shadow-lg"
    >
      <div class="px-12 py-5">
        <h2 class="text-gray-800 text-3xl font-semibold">Registro de tareas</h2>
      </div>
      <div class="bg-gray-200 bg-opacity-50 w-full flex flex-col items-center">
        <div class="w-3/4 flex flex-col">
          <label class="block text-lg font-bold text-black" for="taskTitle"
            >Titulo</label
          >
          <input
            v-model="form.title"
            class="p-4 text-gray-500 rounded-xl mb-6 focus:outline-none focus:bg-white"
            type="text"
            id="taskTitle"
            placeholder="Ingresa el título de la tarea"
            aria-label="taskTitle"
            required
          />
        </div>
        <div class="w-3/4 flex flex-col">
          <label class="block text-lg font-bold text-black" for="taskTitle"
            >Descripción</label
          >
          <textarea
            v-model="form.description"
            rows="3"
            class="p-4 text-gray-500 rounded-xl resize-none"
          ></textarea>
          <button
            @click="saveTask"
            class="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
          >
            {{ getTextButton }}
          </button>
        </div>
      </div>
    </div>
    <h1 class="text-xl font-bold mx-auto text-center mt-12 uppercase">Listado de tareas</h1>
    <list-tasks
      :task="task"
      v-for="(task, index) in getTasksComputed"
      :key="index"
      @deleteTask="eraseTask"
      @editTask="editTask"
    />
  </div>
</template>

<script>
import TaskLayout from "@/layouts/TaskLayout";
import ListTasks from "@/partials/ListTasks";

export default {
  name: "tasks-component",
  components: {
    TaskLayout,
    ListTasks,
  },
  data() {
    return {
      tasks: [],
      form: {
        title: "",
        description: "",
        status: "pending",
      },
    };
  },
  mounted() {
    this.getListTasks();
  },
  computed: {
    getTasksComputed() {
      return this.tasks;
    },
    getTextButton() {
      if (this.form.hasOwnProperty("id")) {
        return "Editar";
      }
      return "Guardar";
    },
  },
  methods: {
    cleanForm(){
      this.form = {}
    },
    editTask(value) {
      const newTask = { ...value };
      this.form = Object.assign({}, newTask.attributes);
      this.form.id = newTask.id;
    },
    deletingTask(id) {
      const index = this.tasks.findIndex((task) => task.id === id);
      this.tasks.splice(index, 1);
    },
    updatingArrayTask(newTask) {
      const index = this.tasks.findIndex((task) => task.id === newTask.id);
      this.tasks.splice(index, 1, newTask);
    },
    async getListTasks() {
      try {
        const res = await axios.get("tasks");
        this.tasks = res.data.data;
      } catch (error) {
        console.log("al obtener tareas", error);
      }
    },
    async eraseTask(value) {
      try {
        const res = await axios.delete(`tasks/${value}`);
        if (res.status === 204) {
          this.deletingTask(value);
        }
      } catch (error) {}
    },

    async saveTask() {
      try {
        if (this.form.hasOwnProperty("id")) {
          this.updateTask();
          return;
        }
        const res = await axios.post("tasks", this.form);
        this.tasks.unshift(res.data.data);
        this.cleanForm()
      } catch (error) {
        console.log("no se puede guardar: ", error);
      }
    },
    async updateTask() {
      try {
        const res = await axios.put(`tasks/${this.form.id}`, this.form);
        this.updatingArrayTask(res.data.data);
        this.cleanForm()
      } catch (error) {
        console.log("actualizando: ", res);
      }
    },
  },
};
</script>

<style>
</style>