import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <title>tltpro</title>
        <meta
          name="description"
          content="Разработка программного обеспечения для бизнеса. ИТ-разработка полного цикла и любой сложности в соответствии со стандартами качества, учитывая особенности вашего бизнеса."
        />
        <meta property="og:title" content="tltpro" />
        <meta
          property="og:description"
          content="Разработка программного обеспечения для бизнеса. ИТ-разработка полного цикла и любой сложности в соответствии со стандартами качества, учитывая особенности вашего бизнеса."
        />
        <meta property="og:image" content="/images/image-card.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/favicon/safari-pinned-tab.svg"
          color="#624aff"
        />
        <link
          rel="icon"
          href="/images/favicon/favicon.ico"
          type="image/x-icon"
          sizes="any"
        />
        <link
          rel="icon"
          href="/images/favicon/favicon-svg.svg"
          type="image/svg+xml"
        />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#231e43" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
