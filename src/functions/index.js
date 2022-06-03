import { cf_kv } from "./db";
import { url, image, date, related } from "./process";

export const db = cf_kv;

export const process = {
    url, image, date, related
};
