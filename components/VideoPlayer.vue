<template>
  <Dialog>
    <DialogTrigger
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 "
    >
      <img src="@/assets/icons/svg/vidoe-play.svg" alt="play" />
    </DialogTrigger>
    <DialogContent
      class="lg:max-w-[700px]   w-4/5  rounded overflow-hidden    "
    >
      <video autoplay loop controls muted class=" w-full">
        <source src="/videos/frame.mp4" type="video/mp4" />
      </video>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
</script>

<style scoped></style>
