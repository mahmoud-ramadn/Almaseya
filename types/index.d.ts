interface TProduct {
  id: number;
  title: {
    ar: string;
    en: string;
  };
  title_txt: string;
  description: {
    ar: string;
    en: string;
  };
  thumbnail: string;
  cover: string;
  images: {
    url: string;
    deleteUrl: string;
  }[];
}

interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  [key: string]: { dirty: boolean; blurred: boolean };
}

interface Errors {
  [key: string]: string;
}