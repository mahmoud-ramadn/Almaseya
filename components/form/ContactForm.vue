<template>
  <div>
    <form class="w-full rounded-lg" @submit.prevent="handleSubmit">
      <div class="space-y-5 text-center">
        <FormInput
          id="name"
          v-model="form.name"
          placeholder="الاسم"
          :error="errors.name"
          :is-dirty="formState.name.dirty"
          :is-blurred="formState.name.blurred"
          @blur="handleBlur('name')"
          @dirty="setDirty('name', $event)"
        />
        <FormInput
          id="email"
          v-model="form.email"
          placeholder="البريد الإلكتروني"
          type="email"
          :error="errors.email"
          :is-dirty="formState.email.dirty"
          :is-blurred="formState.email.blurred"
          @blur="handleBlur('email')"
          @dirty="setDirty('email', $event)"
        />
        <FormInput
          id="subject"
          v-model="form.subject"
          placeholder="الموضوع"
          :error="errors.subject"
          :is-dirty="formState.subject.dirty"
          :is-blurred="formState.subject.blurred"
          @blur="handleBlur('subject')"
          @dirty="setDirty('subject', $event)"
        />
        <FormTextarea
          id="message"
          v-model="form.message"
          placeholder="نص رسالتك"
          :rows="2"
          :error="errors.message"
          :is-dirty="formState.message.dirty"
          :is-blurred="formState.message.blurred"
          @blur="handleBlur('message')"
          @dirty="setDirty('message', $event)"
        />
        <button
          type="submit"
          class="bg-purple-900 font-bold text-white py-4 lg:w-fit w-full lg:px-36 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          {{ loading ? "جاري الارسال" : "ارسل الآن" }}
        </button>
      </div>
    </form>
    <div
      v-if="showPopup"
      class="fixed inset-0 px-4 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div v-if="!err" class="bg-white p-8 rounded-lg shadow-lg text-center">
        <h3 class="text-2xl font-bold text-green-600 mb-4">
          تم الإرسال بنجاح!
        </h3>
        <p class="text-gray-700">شكرًا لتواصلك معنا. سنرد عليك قريبًا.</p>
        <button
          class="mt-4 bg-purple-900 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          @click="showPopup = false"
        >
          إغلاق
        </button>
      </div>
      <div v-else class="bg-white p-8 rounded-lg shadow-lg text-center">
        <h3 class="text-2xl font-bold text-red-500 mb-4">
          حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى لاحقًا
        </h3>
        <p class="text-gray-700">شكرًا لتواصلك معنا.</p>
        <button
          class="mt-4 bg-purple-900 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          @click="showPopup = false"
        >
          إغلاق
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("الاسم مطلوب"),
  email: yup
    .string()
    .email("البريد الإلكتروني غير صحيح")
    .required("البريد الإلكتروني مطلوب"),
  subject: yup.string().required("الموضوع مطلوب"),
  message: yup.string().required("الرسالة مطلوبة"),
});
interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string; // Add this line
}

const form = ref<Form>({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const errors = ref<Errors>({});
const formState = ref<FormState>(createFormState());
const showPopup = ref(false);
const { mutate, loading, err } = useContactUs();

function createFormState(): FormState {
  return ["name", "email", "subject", "message"].reduce((state, field) => {
    state[field] = { dirty: false, blurred: false };
    return state;
  }, {} as FormState);
}
function setDirty(field: string, isDirty: boolean) {
  formState.value[field].dirty = isDirty;
  validateField(field);
}
function handleBlur(field: string) {
  formState.value[field].blurred = true;
  validateField(field);
}
async function validateField(field: string) {
  try {
    const fieldSchema = yup.reach(schema, field) as yup.StringSchema;
    await fieldSchema.validate(form.value[field]);
    errors.value[field] = "";
  }
 catch (err) {
    if (err instanceof Error) {
      errors.value[field] = err.message;
    }
  }
}
async function handleSubmit() {
  try {
    Object.keys(formState.value).forEach((field) => {
      formState.value[field].dirty = true;
      formState.value[field].blurred = true;
    });
    await schema.validate(form.value, { abortEarly: false });
    if (!form.value)
    return;
    await mutate(form.value);
    showPopup.value = true;
    resetForm();
  }
 catch (err: any) {
    if (yup.ValidationError.isError(err)) {
      err.inner.forEach((error: any) => {
        if (error.path) {
          errors.value[error.path] = error.message;
        }
      });
    }
    else {
      console.error("حدث خطأ غير متوقع:", err);
    }
  }
}
function resetForm() {
  form.value = { name: "", email: "", subject: "", message: "" };
  errors.value = {};
  formState.value = createFormState();
}
</script>
