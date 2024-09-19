const { createApp, ref, onMounted } = Vue;

const app = createApp({
  setup() {
    const plan = ref(window.localStorage.getItem("plan"));
    const query = ref(window.localStorage.getItem("query"));

    return {
      plan,
      query,
    };
  },
});

app.component("pev2", pev2.Plan);
app.mount("#app");
