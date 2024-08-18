import type { AppProps } from "next/app";

import { Header } from "@/components/Header";
import { PurchaseProvider } from "@/providers/Purchase";
import { globalStyles } from "@/styles/global";
import { Container } from "@/styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PurchaseProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </PurchaseProvider>
  );
}
