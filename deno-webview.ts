import { Webview } from "jsr:@webview/webview";

const js = [
    "const count = (times) => {",
    "    const counter = document.getElementById(\"counter\");",
    "    counter.textContent = `Pressed ${times} times`;",
    "}"
].join("\n");

const html = `<html><body>
    <script>${js}</script>
    <h1>Hello from deno v${Deno.version.deno}</h1>
    <button id="counter" onclick="press().then(count);">Press me!</button>
</body></html>`;

const webview = new Webview();

webview.navigate(`data:text/html,${encodeURIComponent(html)}`);

let counter = 0;
webview.bind("press", () => ++counter);

webview.run();
