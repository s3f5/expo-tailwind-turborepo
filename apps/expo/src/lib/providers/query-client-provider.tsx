import type { PropsWithChildren } from "react";
import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider as TQueryClientProvider,
} from "@tanstack/react-query";

export const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <TQueryClientProvider client={queryClient}>{children}</TQueryClientProvider>
  );
};
