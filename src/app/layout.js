import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Guilherme Ramos",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" cz-shortcut-listen="true">
      <head>
        {/* Insira a tag <link> para a fonte importada */}
        <link rel="stylesheet" href={poppins.css} />
      </head>
      <body>{children}</body>
    </html>
  );
}