<template>
  <form @submit.prevent="handleSubmit" class="w-full rounded-lg p-8">
    <div class="space-y-8 text-center">
      <FormInput
        id="name"
        placholder="الاسم"
        v-model="form.name"
        :error="errors.name"
        @blur="validateField('name')"
      />

      <FormInput
        id="email"
        placholder="البريد الإلكتروني"
        type="email"
        v-model="form.email"
        :error="errors.email"
        @blur="validateField('email')"
      />

      <FormInput
        id="subject"
        placholder="الموضوع"
        v-model="form.subject"
        :error="errors.subject"
        @blur="validateField('subject')"
      />

      <FormTextarea
        id="message"
        placholder="نص رسالتك"
        v-model="form.message"
        :rows="2"
        :error="errors.message"
        @blur="validateField('message')"
      />

      <button
        type="submit"
        class="bg-blue-600 font-bold text-white py-4 lg:w-fit w-full lg:px-36 rounded-md hover:bg-blue-700"
      >
        ارسل الآن
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import * as yup from "yup";

interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const schema = yup.object().shape({
  name: yup.string().required("الاسم مطلوب"),
  email: yup
    .string()
    .email("البريد الإلكتروني غير صحيح")
    .required("البريد الإلكتروني مطلوب"),
  subject: yup.string().required("الموضوع مطلوب"),
  message: yup.string().required("الرسالة مطلوبة"),
});

const form = ref<Form>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = ref<Errors>({});

const validateField = async (field: keyof Form) => {
  try {
    await yup.reach(schema, field).validate(form.value[field]);
    errors.value[field] = "";
  } catch (err) {
    if (err instanceof Error) {
      errors.value[field] = err.message;
    }
  }
};

// Handle form submission
const handleSubmit = async () => {
  try {
    errors.value = {}; // Reset errors
    await schema.validate(form.value, { abortEarly: false });

    form.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  } catch (err) {
    if (yup.ValidationError.isError(err)) {
      err.inner.forEach((error) => {
        if (error.path) {
          errors.value[error.path as keyof Errors] = error.message;
        }
      });
    }
  }
};
</script>
