<template>
  <div>
    <label for="taskTitle">Titulo de la tarea</label>
    <input v-model="form.title" type="text" name="taskTitle" />
    <label for="taskDescription">Algo de información de la tarea</label>
    <textarea
      v-model="form.description"
      name="TaskDescription"
      id="taskDescription"
      cols="30"
      rows="10"
    ></textarea>
    <label for="taskStatus">Estado de la tarea</label>
    <select name="taskStatus" id="taskStatus" v-model="form.status">
      <option value="pending">Pendiente</option>
      <option value="done">Hecho</option>
    </select>
    <button type="button" @click="saveTask" v-text="getTextButton"></button>

    <!-- listados -->
    <div class="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
      <div class="flex items-center mb-6">
        <svg
          class="h-8 w-8 text-indigo-500 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        <h4 class="font-semibold ml-3 text-lg">Frodo's Jobs</h4>
      </div>
      <button
        class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded"
      >
        <svg
          class="w-5 h-5 text-gray-400 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <input
          class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
          type="text"
          placeholder="add a new task"
        />
      </button>

      <div class="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
        <div class="flex items-center mb-6">
          <svg
            class="h-8 w-8 text-indigo-500 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <h4 class="font-semibold ml-3 text-lg">Tareas por realizar</h4>
        </div>
        <list-tasks
          :task="task"
          v-for="(task, index) in getTasksComputed"
          :key="index"
          @deleteTask="eraseTask"
          @editTask="editTask"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>