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
        <meta name="description" content="This website is made for $Arcane memecoin" />
        <link rel="icon" href="/favicon.ico" />
        <title>Arcane Coin</title>
      </head>
      <body className={arcane.className}>
        {children}
      </body>
    </html>
  );
}