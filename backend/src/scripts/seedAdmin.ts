import { connectDB } from "../config/db.js";
import { env } from "../config/env.js";
import { User } from "../models/user.model.js";
import { logger } from "../utils/logger.js";
import mongoose from "mongoose";

/**
 * There is no public signup — Admin and Lead Team accounts only exist because
 * an Admin created them. This script creates the very first Admin so you have
 * someone to log in as.
 *
 * Usage:
 *   1. Set BOOTSTRAP_ADMIN_EMAIL and BOOTSTRAP_ADMIN_PASSWORD in server/.env
 *   2. npm run seed:admin
 */
async function run() {
  await connectDB();

  const email = env.BOOTSTRAP_ADMIN_EMAIL;
  const password = env.BOOTSTRAP_ADMIN_PASSWORD;

  if (!email || !password) {
    logger.error("Set BOOTSTRAP_ADMIN_EMAIL and BOOTSTRAP_ADMIN_PASSWORD in server/.env first.");
    process.exit(1);
  }

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) {
    logger.info(`Admin ${email} already exists — nothing to do.`);
  } else {
    await User.create({ name: "Admin", email, password, role: "ADMIN" });
    logger.info(`Admin account created: ${email}`);
  }

  await mongoose.disconnect();
  process.exit(0);
}

run();
