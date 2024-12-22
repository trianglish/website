import type { APIRoute } from "astro";
import Favicon from "@binz/visor/src/lib/favicon"
import path from "node:path";

const faviconSrc = path.resolve("src/images/Logo.svg");

export const GET: APIRoute = Favicon({ faviconSrc });