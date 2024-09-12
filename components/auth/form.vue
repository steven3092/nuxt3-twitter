<template>
  <div>
    <div class="space-y-6 pt-5">
      <UiInput
        label="Username"
        placeholder="@username"
        v-model:modelValue="data.username"
      />

      <UiInput
        label="Password"
        placeholder="*********"
        type="password"
        v-model:modelValue="data.password"
      />

      <div>
        <button type="submit" @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = reactive({
  password: "",
  username: "",
  loading: false,
});

async function handleLogin() {
  const { login } = useAuth();
  data.loading = true;

  try {
    await login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
}
</script>
