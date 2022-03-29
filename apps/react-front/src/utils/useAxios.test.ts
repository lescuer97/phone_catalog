import { renderHook, act } from "@testing-library/react-hooks";
import useAxios from "./useAxios";

test("testing initial setUp", () => {
  const { result: resultFromRender } = renderHook(() =>
    useAxios({
      method: "GET",
      url: "/phones",
    })
  );
  console.log({ resultFromRender });

  const { response, error, loading } = resultFromRender.current;

  expect(response).toBeNull;
  expect(error).toBeNull;
  expect(loading).toBe(true);
});
