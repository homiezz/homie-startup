let backendApiUrl;

if (process.env.NODE_ENV === "development") {
  backendApiUrl = "http://170.64.166.147";
} else {
  backendApiUrl = "http://170.64.166.147";
}

const config = {
  backendApiUrl,
};

export default config;
