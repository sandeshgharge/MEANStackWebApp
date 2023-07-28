
// export const MONGODB_URI = process.env["MONGODB_URI"];

// mongodb://127.0.0.1:27017/JWTAuthentication?compressors=disabled&gssapiServiceName=mongodb
//export const MONGODB_URI = 'mongodb://127.0.0.1:27017/thd-ws-21-22?compressors=zlib&gssapiServiceName=mongodb';
/**
 * Database URL is initialised here and can be changed to local database too
 */

export const MONGODB_URI = 'mongodb+srv://sg27875:MITws2122@cluster0.vau4y.mongodb.net/mit-ws-2122?retryWrites=true&w=majority';

export const DEBUG = true; // true, if debug function shall output, else false

if (!MONGODB_URI) {
    console.log("No mongo connection string. Set MONGODB_URI environment variable.");
    process.exit(1);
}

export const JWT_SECRET = "abc" || process.env["JWT_SECRET"];


if (!JWT_SECRET) {
    console.log("No JWT secret string. Set JWT_SECRET environment variable.");
    process.exit(1);
}

// Debugging function
// parameters s: Info string
// parameters v: variable, which value is shown, optional (? indicates this)
export function debug(s: string, v?: any): void {
    if (DEBUG) {
        console.log("debug: " + s);
        console.log(v);
        //if (typeof v == "object")
    }
}

debug("DB connection string: ", MONGODB_URI);