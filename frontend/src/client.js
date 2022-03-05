// projectID:3lnbwp45
//token:skAjYb5dBrQbBS0e9t5M9wda0Yy2odvWnm3i0PYDijF7jbuykpAidxDVKhPd3gyMBvstEQ6l5141DuuARnJlwr0VMkYNj90FDyxlYZnTkM0KgL1QOyQ2KzKPO2ZZlU7cHOz5iqBvBA3Ubv4KCSqYd55Nt0jh7gcCmK7km0ywJXyeeE5Lz2AG
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
export const client = sanityClient({
    projectId: "3lnbwp45",
    dataset: 'production',
    apiVersion:'2021-10-21',
    useCdn: true,
    token:'skAjYb5dBrQbBS0e9t5M9wda0Yy2odvWnm3i0PYDijF7jbuykpAidxDVKhPd3gyMBvstEQ6l5141DuuARnJlwr0VMkYNj90FDyxlYZnTkM0KgL1QOyQ2KzKPO2ZZlU7cHOz5iqBvBA3Ubv4KCSqYd55Nt0jh7gcCmK7km0ywJXyeeE5Lz2AG'
});
const builder = imageUrlBuilder(client);
export const urlFor = source => builder.image(source);