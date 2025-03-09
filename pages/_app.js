// pages/_app.js
import { Libre_Baskerville } from "next/font/google";
import { Lora } from "next/font/google";
import "@/styles/globals.css"; // Import global styles

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const lora = Lora({ weight: ["400", "700"], subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div
      className={`${libreBaskerville.className} ${lora.className}`}
      style={{
        "--font-libre-baskerville": libreBaskerville.style.fontFamily,
        "--font-lora": lora.style.fontFamily,
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
