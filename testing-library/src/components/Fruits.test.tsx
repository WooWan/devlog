import { describe, expect, test, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Fruits from "./Fruits";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("검색 통합테스트", () => {
  //screen.debug()를 통해 디버깅
  beforeEach(() => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Fruits />
      </QueryClientProvider>
    );
  });

  test("검색을 하지 않았을 때, 검색 결과가 없다는 메시지를 보여준다.", async () => {
    await waitFor(() => {
      expect(screen.getByText("검색 결과가 없습니다.")).toBeDefined();
    });
  });

  test("검색 후 버튼을 누르면 검색된 결과를 보여준다.", async () => {
    const input = screen.getByRole("textbox");

    await userEvent.type(input, "apple");
    await userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.getByText("apple")).toBeDefined();
    });
  });

  test("엔터를 눌러도 검색 결과를 보여준다.", async () => {
    const input = screen.getByRole("textbox");

    await userEvent.type(input, "apple");
    await userEvent.keyboard("{enter}");

    await waitFor(() => {
      expect(screen.getByText("apple")).toBeDefined();
    });
  });
});
