import express from "express";
import cors from "cors";
import {clerkMiddleware} from "@clerk/express";

import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";


import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());

app.get("/", ( req, res) => res.send("Hello from server"));

app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);
app.use("/api/comments",commentRoutes);


// error handling middleware
app.use((err, req, res, next) => {
    console.log("Unhandled error:", err);
    res.status(500).json({ error: err.message || "Internal server error" });
});


const startServer = async () => {
    try {
        await connectDB();

        app.listen(ENV.PORT, () => console.log("Server is up and running on port:", ENV.PORT));
    }catch(e) {
        console.log("Failed to start server:", e.message);
        process.exit(1);
    }
};
startServer();
