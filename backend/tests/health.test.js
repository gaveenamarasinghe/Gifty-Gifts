const test = require("node:test");
const assert = require("node:assert/strict");

const app = require("../server");

test("health endpoint returns success payload", async () => {
  const server = app.listen(0);

  await new Promise((resolve) => server.once("listening", resolve));

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/health`);

  assert.equal(response.status, 200);
  const data = await response.json();
  assert.equal(data.success, true);
  assert.equal(data.service, "gifty-api");

  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) reject(error);
      else resolve();
    });
  });
});
