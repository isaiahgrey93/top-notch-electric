import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  const is404 = router.route === "/404";

  return (
    <>
      {is404 ? null : <Header />}
      <Component {...pageProps} />
      {is404 ? null : <Footer />}
    </>
  );
};

export default api.withTRPC(MyApp);
