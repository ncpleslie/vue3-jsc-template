import { Config } from "@/interfaces/config.interface";

/**
 * Obtain a configuration value set at runtime.
 * @return Config the configuration file.
 */
const useConfig = (): Config => {
  const config = (window as Window).config;
  if (!config) {
    console.warn(`Configuration is not present.`);
  }

  return config;
};

export default useConfig;
