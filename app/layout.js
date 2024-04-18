import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import AnimatedCursor from "react-animated-cursor";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio de Kévin Nizet",
  description:
    "This is the portfolio of Kévin Nizet. I am a full stack developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          {/* 
          <AnimatedCursor
            innerSize={8}
            outerSize={20}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
              backgroundColor: "white",
            }}
            outerStyle={{
              border: "3px solid white",
            }}
          /> */}
          <AnimatedCursor
            innerSize={8}
            outerSize={8}
            color="255, 255, 255"
            outerAlpha={0.2}
            innerScale={1}
            outerScale={6}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
              {
                target: ".custom",
                options: {
                  innerSize: 12,
                  outerSize: 12,
                  color: "255, 255, 255",
                  outerAlpha: 0.3,
                  innerScale: 0.7,
                  outerScale: 5,
                },
              },
            ]}
            elementStyles={{
              // Définir le curseur par défaut pour les éléments cliquables
              a: { cursor: "default" },
              'input[type="text"]': { cursor: "default" },
              'input[type="email"]': { cursor: "default" },
              'input[type="number"]': { cursor: "default" },
              'input[type="submit"]': { cursor: "default" },
              'input[type="image"]': { cursor: "default" },
              "label[for]": { cursor: "default" },
              select: { cursor: "default" },
              textarea: { cursor: "default" },
              button: { cursor: "default" },
              ".link": { cursor: "default" },
              ".custom": { cursor: "default" },
            }}
          />

          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
