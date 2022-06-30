import { Config } from "@/interfaces/config.interface";

declare global {
  /**
   * The global window.
   */
  interface Window {
    /**
     * The configuration file.
     */
    config: Config;
  }
}
