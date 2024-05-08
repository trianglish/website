import type { APIRoute } from "astro";
import { getImage } from "astro:assets";
import favicon from "../../public/Logo.svg";

const faviconPngSizes = [192, 512];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    faviconPngSizes.map(async size => {
      const image = await getImage({
        src: favicon,
        width: size,
        height: size,
        format: "svg",
      });
      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`,
      };
    }),
  );

  const manifest = {
    name: "Trianglish",
    short_name: "Trianglish",
    description: "The organic growth social media experts for your business.",
    start_url: "/",
    display: "standalone",
    id: "trianglish-com",
    icons,
    background_color: "#000000",
    theme_color: "#B9FF66",
  };

  return new Response(JSON.stringify(manifest));
};
