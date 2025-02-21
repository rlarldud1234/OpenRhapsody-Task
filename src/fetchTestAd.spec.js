const { fetchAd } = require("./api.js");
describe("Fetch Ad Test", () => {
  let response;

  beforeEach(async () => {
    response = await fetchAd();
  });

  test("Check the ad is defined", () => {
    expect(response).toBeDefined();
  });

  test("Check the ad code is 0", () => {
    if (response.code !== 0) {
      throw new Error(
        `Ad get on Error!! \n error code: ${response.code} \n error message: ${response.msg}`
      );
    }
    expect(response.code).toEqual(0);
  });

  test("Check the ad result is equaled request banner", () => {
    expect(response.result.unit).toEqual("PUBLIC_TEST_UNIT_ID_375_80");
  });
});
