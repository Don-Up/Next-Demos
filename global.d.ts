// global.d.ts
import { MongoClient } from 'mongodb';

declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}

// This is required to ensure TypeScript treats this file as a module
export {};