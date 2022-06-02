import { cf_kv } from "./db";
import { url, image, date, related } from "./process";
import { speakr } from "./speaker";

export const db = cf_kv;

export const process = {
    url, image, date, related
};

export const speaker = speakr