const { fetchAd } = require("./api.js");

// 광고 받아오기 테스트
describe("Fetch Ad Test", () => {
  let response;
  const params = {
    unit: "PUBLIC_TEST_UNIT_ID_375_80",
    uid: "asdasdasd",
    pf: "web",
    lcl: "ko_	KR",
  };

  beforeEach(async () => {
    response = await fetchAd(params);
  });

  // Response 값이 비었는지 확인
  test("Check the ad is defined", () => {
    expect(response).toBeDefined();
  });

  // Response Code 값이 0인지 확인 * 아닐시 Code와 Message를 Error와 함께 던짐
  test("Check the ad code is 0", () => {
    if (response.code !== 0) {
      throw new Error(
        `Ad get on Error!! \n error code: ${response.code} \n error message: ${response.msg}`
      );
    }
    expect(response.code).toEqual(0);
  });

  // Response Banner 값이 내가 요청한 Banner의 값인지 확인
  test("Check the ad result is equaled request banner", () => {
    expect(response.result.unit).toEqual(params.unit);
  });
});
