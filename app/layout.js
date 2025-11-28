import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { OrderProvider } from "@/context/OrderContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "The Coffee Co",
  description: "Premium Coffee Machines & Accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <CartProvider>
          <OrderProvider>
            {children}
          </OrderProvider>
        </CartProvider>
      </body>
    </html>
  );
}
