import { createClient } from "@sanity/client";
import { imageUrlBuilder } from "@sanity/image-url";

const client = createClient({
  projectId: 'ibxx3vt9',
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source);

export default client;