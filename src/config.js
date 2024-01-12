let backendApiUrl;

if (process.env.NODE_ENV === "development") {
  backendApiUrl = "http://localhost:8888";
} else {
  backendApiUrl = "https://homie-concept.netlify.app";
}

const config = {
  backendApiUrl,
};

export default config;
