// Constants
import globalConstants from "@/constants/global.constants";
// Utilities
import { dLog, isProduction } from "../global.utils";

describe("Global utilities", () => {
  // https://stackoverflow.com/questions/48033841/test-process-env-with-jest
  const backupEnv = { ...process.env };

  beforeEach(() => {
    jest.resetAllMocks();
    process.env = { ...backupEnv };
  });

  afterAll(() => {
    process.env = backupEnv;
  });

  it("should be on development by default", () => {
    expect(isProduction()).toBe(
      process.env.NODE_ENV === globalConstants.ENV.PRODUCTION
    );
  });

  it("should console log if on production", () => {
    jest.spyOn(console, "log");
    jest.mock("../global.utils", () => ({
      isProduction: false,
    }));

    dLog("Hello World!");

    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith("Hello World!");
  });

  it("should not console log if on production", () => {
    jest.spyOn(console, "log");
    process.env.NODE_ENV = globalConstants.ENV.PRODUCTION;

    dLog("Hello World!");

    expect(console.log).not.toHaveBeenCalled();
  });
});
