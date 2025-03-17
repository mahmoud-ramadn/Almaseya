export const useHomeState = () => {
  const productsData = useState<TProduct[]>("productsData", () => []);
  const homeDataSection = useState<any>("homeDataSection", () => []);

  const setProductData = (data: TProduct[]) => {
    productsData.value = data;
  };

  const setHomeDataSection = (data: any) => {
    homeDataSection.value = data;
  };

  return { productsData, setProductData, setHomeDataSection, homeDataSection };
};

export const useProduct = () => {
  const { setProductData } = useHomeState();

  return useAsyncData("productsData", async () => {
    const { data } = await useAPI<{ data: TProduct[] }>("products");
    if (data.value) {
      setProductData(data.value?.data || [])
    }
    return data.value?.data;
  });
};

export const useHome = () => {
  const { setHomeDataSection } = useHomeState();

  return useAsyncData("homeData", async () => {
    const { data } = await useAPI<{ data: any }>("home");
    if (data.value) {
      setHomeDataSection(data.value?.data);
    }
    return data.value?.data;
  });
};
