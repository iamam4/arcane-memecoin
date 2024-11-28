import "./globals.css";
import localFont from 'next/font/local'


const arcane = localFont({

src: './fonts/Arcane Nine.otf',

});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
    <meta name="description" content="$Arcane - The revolutionary memecoin inspired by Hextech Crystal. Join our community and be part of the next generation of crypto innovation." />
    <meta name="keywords" content="Arcane, cryptocurrency, memecoin, Hextech Crystal, blockchain" />  
    <link rel="canonical" href="https://yourdomain.com" />
    <link rel="icon" href="/favicon.ico" />
    <title>Arcane Coin - Revolutionary Memecoin</title>
  </head>
  <body className={arcane.className}>
    {children}
  </body>
</html>
  );
}