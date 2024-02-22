let backendApiUrl;

if (process.env.NODE_ENV === "development") {
  backendApiUrl = "http://localhost:8888";
} else {
  backendApiUrl = "https://api.homie-concept.live";
}

const config = {
  backendApiUrl,
};

export default config;
