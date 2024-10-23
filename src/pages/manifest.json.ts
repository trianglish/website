import type { APIRoute } from "astro";
import Manifest from '@binz/visor/src/lib/manifest';
import type { ManifestConfig } from '@binz/visor/src/lib/manifest';

import favicon from '../images/Logo.svg';

const faviconPngSizes = [192, 512];

const config: ManifestConfig = {
  name: "Trianglish",
  description: "The organic growth social media experts for your business.",
  start_url: "/",
  display: "standalone",
  id: "trianglish-com",
  background_color: "#000000",
  theme_color: "#B9FF66",
  favicon: {
    src: favicon,
    faviconSizes: faviconPngSizes,
  },
};

export const GET: APIRoute = Manifest(config);
