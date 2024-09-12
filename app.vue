<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div v-if="isAuthLoading"><Loading /></div>

      <!---- App ---->
      <div v-else-if="user" class="min-h-full">
        <div
          class="mx-auto grid grid-cols-12 sm:px-6 lg:max-w-7xl lg:gap-5 lg:px-8"
        >
          <!----- Left sidebar ----->
          <div
            class="xs-col-span-1 hidden md:col-span-1 md:block xl:col-span-2"
          >
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>

          <!----- Main content ----->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <nuxt-page />
          </main>

          <!----- Right sidebar ----->
          <div class="col-span-12 hidden md:col-span-3 md:block xl:col-span-4">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>

      <!-- Auth page -->
      <AuthPage v-else />
    </div>
  </div>
  <!-- <button @click="count++">Count is: {{ count }}</button> -->
</template>
<script setup>
const darkMode = ref(false);
const { useAuthUser, initAuth, useAuthLoading } = useAuth();
const isAuthLoading = useAuthLoading();
const user = useAuthUser();

onBeforeMount(() => {
  initAuth();
});

const count = ref(0);

// const handleOnClick = () => {
//   count++;
// };
</script>
