const validImages = ['.jpg', '.jpeg', '.png'];

export default function getImage(item) {
  const hasImage = validImages.find((img) => item.assetUrl.includes(img));
  // It has an image, huzzah!
  if (!!hasImage) return item.assetUrl;
  // It has no "items" and no image, sad ):
  if (!item.items.length) return item.assetUrl;
  // Return the first item's image
  return item.items[0].assetUrl;
}
