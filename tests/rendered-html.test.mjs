import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://defatestar.example/", {
      headers: { accept: "text/html", host: "defatestar.example" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the DefateStar portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /DefateStar — 开源项目参与者与开发者/);
  assert.match(html, /DEFATE/);
  assert.match(html, /Shell\+\+ Web/);
  assert.match(html, /Shell\+\+ Android端/);
  assert.doesNotMatch(html, /Shell\+\+ Releases/);
  assert.match(html, /GitHub 主页/);
  assert.match(html, /slash-intro/);
  assert.match(html, /LOADING \/ PORTFOLIO/);
  assert.match(html, /http:\/\/localhost:3001\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/);
});
