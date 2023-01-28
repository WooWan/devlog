import React from 'react'
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query'
import {afterAll, afterEach, beforeAll} from "vitest";
import {server} from "./utils/tests";

type QueryProviderWrapperProps = {
  children: React.ReactNode
}

beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
export const createQueryProviderWrapperFail = (config: QueryClientConfig = {}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => null,
    },
    ...config,
  })

  return ({ children }: QueryProviderWrapperProps) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
