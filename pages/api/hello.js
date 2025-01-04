// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // Add CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins (for development)
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.status(200).json({ name: "John Doe" });
}
