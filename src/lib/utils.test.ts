import { describe, expect, it } from "vitest";

import { cn } from "./utils";

describe("cn", () => {
  it("merges class names and preserves Tailwind precedence", () => {
    expect(cn("px-2", "px-4", "text-red-500", "text-blue-500")).toBe(
      "px-4 text-blue-500",
    );
  });

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "active")).toBe("base active");
  });
});
