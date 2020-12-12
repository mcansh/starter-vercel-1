import {
  Meta,
  Scripts,
  Styles,
  Routes,
  useGlobalData,
  Link,
} from "@remix-run/react";

export default function App() {
  let data = useGlobalData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes />
        <Scripts />
        <footer>
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>
      </body>
    </html>
  );
}
