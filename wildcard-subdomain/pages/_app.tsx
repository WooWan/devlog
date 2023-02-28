import "@/styles/globals.css";
import { GetServerSideProps } from "next";
import App, { AppContext, AppProps } from "next/app";

type Props = AppProps & {
  wildcard: string;
};
const TestApp = ({ Component, pageProps, wildcard, ...props }: Props) => {
  console.log(wildcard);
  // console.log("app client");
  return <Component {...pageProps} />;
};
// export const getServerSideProps : GetServerSideProps= async(context) => {
//   let wildcard = String(context.req.headers.host?.split(".")[0])
//   console.log('app props')
//     console.log(context)
//   // wildcard = wildcard === "yourdomain" ? "home" : wildcard;
//   // wildcard =
//   //   wildcard != "yourdomain"
//   //     ? process.env.NODE_ENV != "development"
//   //       ? wildcard
//   //       : process.env.TEST_WILDCARD
//   //     : "home";
//   return { props: { wildcard } };
// }
export default TestApp;

TestApp.getInitialProps = async (appContext: AppContext) => {
  const wildcard = appContext.ctx.req?.headers.host?.split(".")[0];

  const appProps = await App.getInitialProps(appContext);
  return {
    wildcard,
  };
};
