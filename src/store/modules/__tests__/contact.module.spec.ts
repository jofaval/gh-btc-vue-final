// Store
import contactModule, {
  getters,
  mutations,
  ContactStateType,
  ContactGettersType,
} from "../contact.module";

describe("Contact Module", () => {
  let state: ContactStateType;

  beforeEach(() => {
    state = {
      form: {
        fullName: "Pepe Fabra Valverde",
        email: "contact@github.com",
        subject: "Final project",
        message: "Lorem ipsum dolor sit amet",
      },
    };
    jest.clearAllMocks();
  });

  it("should return the full name", () => {
    expect(getters.fullName(state)).toEqual(state.form.fullName);
  });

  it("should return the e-mail", () => {
    expect(getters.email(state)).toEqual(state.form.email);
  });

  it("should return the subject", () => {
    expect(getters.subject(state)).toEqual(state.form.subject);
  });

  it("should return the message", () => {
    expect(getters.message(state)).toEqual(state.form.message);
  });

  it("should return if the form is filled", () => {
    expect(getters.isFormFilled(state)()).toBe(true);
  });

  it("should validate the full name", () => {
    expect(getters.checkFullName(state)()).toEqual(true);
  });

  it("should validate the e-mail", () => {
    expect(getters.checkEmail(state)()).toEqual(true);
  });

  it("should validate the subject", () => {
    expect(getters.checkSubject(state)()).toEqual(true);
  });

  it("should validate the message", () => {
    expect(getters.checkMessage(state)()).toEqual(true);
  });

  it("should check if the form is valid", () => {
    expect(
      getters.isFormValid(state, getters as unknown as ContactGettersType)()
    ).toEqual(true);
  });

  it("should form", () => {
    expect(getters.form(state)).toEqual(state.form);
  });

  it("should not be null", () => {
    expect(contactModule).not.toBe(null);
  });

  it("should update full name", () => {
    mutations.updateFullName(state, "New");
    expect(state.form.fullName).toEqual("New");
  });

  it("should update e-mail", () => {
    mutations.updateEmail(state, "test@example.com");
    expect(state.form.email).toEqual("test@example.com");
  });

  it("should update subject", () => {
    mutations.updateSubject(state, "Subject");
    expect(state.form.subject).toEqual("Subject");
  });

  it("should update message", () => {
    mutations.updateMessage(state, "Message");
    expect(state.form.message).toEqual("Message");
  });

  it("should update a form field", () => {
    mutations.updateFormField(state, {
      field: "email",
      value: "contact@example.es",
    });
    expect(state.form.email).toEqual("contact@example.es");
  });

  it("should clear the form values", () => {
    mutations.clearFormValues(state);
    expect(state.form).toEqual(
      expect.objectContaining({
        email: "",
        fullName: "",
        message: "",
        subject: "",
      })
    );
  });
});
