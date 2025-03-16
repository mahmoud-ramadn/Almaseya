export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: process.env.API_URL,
    onRequest({ request, options, error }) {},
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo("/login"));
      }
    },
  });
  return {
    provide: {
      api,
    },
  };
});
