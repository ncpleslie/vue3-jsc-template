import { createFetch } from "@vueuse/core";
import useConfig from "./use_config.composable";

const baseUrl = useConfig().BASE_API_URL;

/**
 * Reactive Fetch API provides the ability to abort requests, intercept requests before they are fired,
 * automatically refetch requests when the url changes.
 * Find more information about this at {@see https://vueuse.org/core/usefetch/}
 */
const useFetch = createFetch({
  baseUrl,
  options: {
    async beforeFetch({ options }) {
      // Get your auth token here
      const authToken = "MY TOKEN HERE";

      const headers = options?.headers
        ? new Headers(options.headers)
        : new Headers();

      if (!headers.has("Authorization")) {
        headers.set("Authorization", `Bearer ${authToken}`);
      }

      return { options };
    },
  },
  fetchOptions: {
    mode: "cors",
  },
});

export default useFetch;
