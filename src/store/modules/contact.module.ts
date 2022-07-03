// Types
import type { ContactFormType, ContactFormField } from "@/types/forms";

type ContactStateType = {
  form: ContactFormType;
};

const initialState = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
} as ContactFormType;

type ContactGettersType = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  isFormFilled: boolean;
  checkFullName: boolean;
  checkEmail: boolean;
  checkSubject: boolean;
  checkMessage: boolean;
  isFormValid: boolean;
  form: ContactFormType;
};

export default {
  state: {
    form: { ...initialState },
  },
  getters: {
    fullName: (state: ContactStateType): string => state.form.fullName,
    email: (state: ContactStateType): string => state.form.email,
    subject: (state: ContactStateType): string => state.form.subject,
    message: (state: ContactStateType): string => state.form.message,
    isFormFilled: (state: ContactStateType): boolean =>
      Object.entries(state.form).every(([, value]) => value),
    checkFullName: (state: ContactStateType): boolean =>
      state.form.fullName.length >= 1 &&
      /^[A-Za-z][^'"]*$\w*$/.test(state.form.fullName),
    checkEmail: (state: ContactStateType): boolean =>
      /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(state.form.email),
    checkSubject: (state: ContactStateType): boolean =>
      state.form.subject.length >= 1,
    checkMessage: (state: ContactStateType): boolean =>
      state.form.message.length >= 1,
    isFormValid: (
      state: ContactStateType,
      getters: ContactGettersType
    ): boolean => {
      return (
        getters.checkFullName &&
        getters.checkEmail &&
        getters.checkSubject &&
        getters.checkMessage
      );
    },
    form: (state: ContactStateType): ContactFormType => state.form,
  },
  mutations: {
    updateFullName(state: ContactStateType, fullName: string) {
      state.form.fullName = fullName;
    },
    updateEmail(state: ContactStateType, email: string) {
      state.form.email = email;
    },
    updateSubject(state: ContactStateType, subject: string) {
      state.form.subject = subject;
    },
    updateMessage(state: ContactStateType, message: string) {
      state.form.message = message;
    },
    updateFormField(
      state: ContactStateType,
      { field, value }: { field: ContactFormField; value: string }
    ) {
      if (field in state.form) {
        state.form[field] = value;
      }
    },
    clearFormValues(state: ContactStateType) {
      state.form = { ...initialState };
    },
  },
  actions: {},
  modules: {},
};
