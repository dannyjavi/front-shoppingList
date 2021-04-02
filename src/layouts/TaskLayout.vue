<template>
  <!-- component -->
  <div class="h-screen font-sans login bg-cover">
    <div
      class="container mx-auto h-full flex flex-1 justify-center items-center"
    >
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <slot name="taskForm" />
        </div>
      </div>
    </div>
    <section class="text-gray-200 bg-gray-900">
        <div class="max-w-6xl mx-auto px-5 py-24 ">
          <div class="text-center mb-20">
            <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Tareas pendientes</h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">No te agobies si no las haces todas, lo importante es ir poco a poco o como bien dices, de meno a maa++</p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
            <slot name="listTask" />
          </div>
        </div>
    </section>
  </div>
  <!-- <task-component /> -->
</template>

<script>

export default {
  name: "tasks-view-component",
  components: {

  },
  data() {
    return {};
  },
  methods: {
    getTasks() {},
    /* focusItem(index) {
      if (!this.todos[index].open) {
        for (let i = 0; i < this.todos.length; i++) {
          this.todos[i].open = false;
          this.todos[i].focused = i == index;
        }
      }
    },
    openItem(index) {
      for (let i = 0; i < this.todos.length; i++) {
        this.todos[i].focused = false;
        this.todos[i].open = i == index;
      }
      setTimeout(
        () => document.getElementById(`titleField${index}`).focus(),
        10
      );
    },
    defocusItems() {
      for (let i = 0; i < this.todos.length; i++) {
        this.todos[i].focused = false;
        this.todos[i].open = false;
      }
    },
    removeItem(index) {
      this.todos = this.todos.filter((todo, i) => {
        return i == index ? false : true;
      });
      setTimeout(() => this.defocusItems(), 10);
    },
    addItem() {
      this.todos.push({
        title: "",
        notes: "",
        checked: false,
        focused: false,
        open: false,
      });
      setTimeout(() => this.openItem(this.todos.length - 1), 10);
    }, */
  },
};
</script>

<style>
.login {
  /*
    background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
  */
  background: url("http://bit.ly/2gPLxZ4");
  background-repeat: no-repeat;
}
</style>