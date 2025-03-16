<template>
  <form @submit.prevent="submitForm" class=" container mx-auto p-6 bg-white shadow-md rounded-lg">
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Your Name"
      />
    </div>

    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        v-model="form.email"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Your Email"
      />
    </div>

    <div class="mb-4">
      <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
      <input
        type="text"
        id="subject"
        v-model="form.subject"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Subject"
      />
    </div>

    <div class="mb-4">
      <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="4"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Your Message"
      ></textarea>
    </div>

    <div class="flex justify-end bg-blue-500">
      <button
        type="submit" class="px-4 py-2  bg-blue-500 text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-red-50"
      >
        {{ loading ? "Submitting" : "Submit" }} 
      </button>
    </div>
  </form>
</template>

<script setup>
const { mutate, loading, err } = useContactUs();

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitForm = async () => {
  if(!form.name & !form.email  & !form.subject & !form.message) return;
  await mutate(form.value)
};
</script>