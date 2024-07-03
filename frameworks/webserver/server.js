export default function serverConfig(app, mongoose, config) {
  // Connect to MongoDB
  console.log("config.uri ----->", config.uri);
  mongoose
    .connect(
      "mongodb+srv://sajith:i8hsM4JR7SzkB2YV@cluster0.c9y6zm1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

  function startServer() {
    app.listen(config.port, () => {
      console.log(`UserAuth Server Start At port${config.port}`);
    });
  }
  return {
    startServer,
  };
}
