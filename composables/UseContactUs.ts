export const useContactUs = () => {
  const $api = useNuxtApp().$api;
  const loading = ref(false);
  const err = ref();
  const mutate = async (inputs: Form) => {
    try {
      loading.value = true;
       await $api("https://api.almaseya.net/api/contact-us", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: inputs,
       });
    }
    catch (error) {
      err.value = error;
      // eslint-disable-next-line no-console
      console.log(error);
    }
    finally {
      loading.value = false;
    }
  };
  return { mutate, loading, err };
};
