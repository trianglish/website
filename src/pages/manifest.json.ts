import type { APIRoute } from "astro";
import { getImage } from "astro:assets";
import favicon from "../../public/Logo.svg";

const faviconPngSizes = [192, 512];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
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
    description: "Your site description",
    start_url: "/",
    display: "standalone",
    id: "trianglish-com",
    icons,
  };

  return new Response(JSON.stringify(manifest));
};
