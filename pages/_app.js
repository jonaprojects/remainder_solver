// pages/_app.js
import { Libre_Baskerville } from "next/font/google";
import { Lora } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Inter } from "next/font/google";

import "@/styles/globals.css"; // Import global styles

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const lora = Lora({ weight: ["400", "700"], subsets: ["latin"] });
const open_sans = Open_Sans({ weight: ["400", "700"], subsets: ["latin"] });
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
function MyApp({ Component, pageProps }) {
  return (
    <div
      className={` ${open_sans.className} ${libreBaskerville.className} ${lora.className}`}
      style={{
        "--font-libre-baskerville": libreBaskerville.style.fontFamily,
        "--font-lora": lora.style.fontFamily,
        "--font-inter": inter.style.fontFamily,
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
