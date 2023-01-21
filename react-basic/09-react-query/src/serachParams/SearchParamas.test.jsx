import { render } from "@testing-library/react";
import SearchParams from "./SearchParams";
import { test, describe, expect } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
describe("SearchParams", () => {
  test("location ", () => {
    const container = render(
      <QueryClientProvider client={new QueryClient()}>
        <SearchParams />)
      </QueryClientProvider>
    );

    expect(container).toHaveContext("location");
  });
});
