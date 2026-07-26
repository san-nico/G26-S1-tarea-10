import "./globals.css";
import styles from "./layout.module.css";
import { metadata } from "./metadata";

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className={styles.app}>{children}</div>
      </body>
    </html>
  );
}
