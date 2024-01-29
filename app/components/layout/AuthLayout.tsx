"use client";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import {SessionProvider} from "next-auth/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});
export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          zIndex: 99999
        }}
        toastOptions={{
          style: {
            pointerEvents: "none"
          }
        }}
      />
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </SessionProvider>
    </div>
  );
}
