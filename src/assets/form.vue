<template>
  <div
        class="bg-white bg-opacity-50 min-w-1xl flex flex-col rounded-xl shadow-lg"
      >
        <div class="px-12 py-5">
          <h2 class="text-gray-800 text-3xl font-semibold">
            Registro de tareas
          </h2>
        </div>
        <div
          class="bg-gray-200 bg-opacity-50 w-full flex flex-col items-center"
        >
          <div class="w-3/4 flex flex-col">
            <label class="block text-lg font-bold text-black" for="taskTitle"
              >Titulo</label
            >
            <input
              class="p-4 text-gray-500 rounded-xl mb-6 focus:outline-none focus:bg-white"
              type="text"
              id="taskTitle"
              placeholder="Digite o e-mail"
              aria-label="taskTitle"
              required
            />
          </div>
          <div class="w-3/4 flex flex-col">
            <label class="block text-lg font-bold text-black" for="taskTitle"
              >Descripción</label
            >
            <textarea
              rows="3"
              class="p-4 text-gray-500 rounded-xl resize-none"
            ></textarea>
            <button
              class="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
            >
              {{ getTextButton }}
            </button>
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