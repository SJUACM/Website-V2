import { z } from "zod";
import { Logger } from "@/lib/logger";

const logger = new Logger("Config:Env");

// Schema for environment variables
const envSchema = z.object({
    CONTENTFUL_SPACE_ID: z.string(),
    CONTENTFUL_ACCESS_TOKEN: z.string(),
    NODE_ENV: z.string(),
});

// Function to validate environment variables
const validateEnv = () => {
  try {
    logger.info("Validating environment variables");
    const env = {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
      NODE_ENV: process.env.NODE_ENV || "development"
    };
    logger.debug("Environment variables", {
      hasSpaceId: !!env.CONTENTFUL_SPACE_ID,
      hasAccessToken: !!env.CONTENTFUL_ACCESS_TOKEN,
      hasNodeEnv: !!env.NODE_ENV,
    });
    const parsed = envSchema.parse(env);
    logger.info("Environment variables validated successfully");
    return parsed;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors.map(err => err.path.join("."));
      logger.error("Invalid environment variables", { missingVars });
      throw new Error(
        `❌ Invalid environment variables: ${missingVars.join(
          ", "
        )}. Please check your .env file`
      );
    }
    throw error;
  }
};

export const env = validateEnv();
