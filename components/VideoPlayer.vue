<template>
  <Dialog>
    <DialogTrigger
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 "
    >
      <img src="@/assets/icons/svg/vidoe-play.svg" alt="play" />
    </DialogTrigger>
    <DialogContent
      class="lg:max-w-[1000px]   w-[90%] md:h-fit  h-56 rounded overflow-hidden    "
    >
      <video autoplay loop controls muted class=" w-full h-full">
        <source src="../public/videos/WhatsApp Video 2025-03-17 at 02.27.47.mp4" type="video/mp4" />
      </video>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
</script>
