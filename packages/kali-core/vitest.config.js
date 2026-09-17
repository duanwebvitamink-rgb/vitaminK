import { mergeConfig } from "vitest/config";
import { baseConfig } from "@repo/config-vitest/base";

export default mergeConfig(baseConfig, {
  test: {
    environment: "node",
  },
});
