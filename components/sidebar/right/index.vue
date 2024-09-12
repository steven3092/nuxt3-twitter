<template>
  <div class="flex flex-col">
    <!--  Preview Card -->
    <div>
      <SidebarRightPreviewCard title="What's happening">
        <SidebarRightPreviewCardItem
          v-for="whatsHappeningItem in whatsHappeningItems"
        >
          <h2 class="text-md font-bold text-gray-800 dark:text-white">
            {{ whatsHappeningItem.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ whatsHappeningItem.count }}</p>
        </SidebarRightPreviewCardItem>
      </SidebarRightPreviewCard>
    </div>
    <div>
      <SidebarRightPreviewCard title="Who to follow">
        <SidebarRightPreviewCardItem
          v-for="whoToFollowItem in whoToFollowItems"
        >
          <div class="flex flex-row items-center justify-between p-2">
            <div class="flex flex-row">
              <img
                class="h-10 w-10 rounded-full"
                :src="whoToFollowItem.image"
                :alt="whoToFollowItem.name"
              />
              <div class="ml-2 flex flex-col">
                <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                  {{ whoToFollowItem.name }}
                </h1>
                <p class="text-xs text-gray-400">
                  {{ whoToFollowItem.handle }}
                </p>
              </div>
            </div>
            <button
              class="rounded-full bg-black px-4 py-2 text-xs font-bold text-white hover:bg-gray-700 dark:bg-white dark:text-black"
            >
              Follow
            </button>
          </div>
        </SidebarRightPreviewCardItem>
      </SidebarRightPreviewCard>
    </div>
  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  {
    title: "SpaceX",
    count: "18.8k Tweets",
  },
  {
    title: "#Coding is fun",
    count: "8.8k Tweets",
  },
  {
    title: "#ArtForAll",
    count: "1.8k Tweets",
  },
]);

const whoToFollowItems = ref([
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200",
  },
]);
</script>
