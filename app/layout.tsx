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
      <body className={arcane.className}>
        {children}
      </body>
    </html>
  );
}