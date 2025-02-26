<template>
  <Dialog >
  <DialogTrigger class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hover:opacity-100 hover:scale-100">
  <img src="@/assets/icons/svg/vidoe-play.svg" alt="play" />
</DialogTrigger>
    <DialogContent
      class="lg:max-w-[1000px] w-full flex justify-center items-center bg-white/20 p-4"
    >
      <video autoplay loop muted class="rounded-lg">
        <source src="/videos/frame.mp4" type="video/mp4" />
      </video>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
</script>

<style scoped></style>
