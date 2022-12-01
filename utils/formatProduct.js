export default function formatProduct(product) {
  const { name, slug, images, variants, code, description } = product;
  const formattedObject = {};
  const hasDifferentPriceProp = !variants[`${code}-variant-0`].price;

  if (hasDifferentPriceProp) {
    formattedObject.lowestPrice = variants[`${code}-variant-0`].purchasePrice;
  } else {
    formattedObject.lowestPrice = variants[`${code}-variant-0`].price.current;
  }
  formattedObject.picture = images[0].cachedPath;
  formattedObject.label = name;

  const keys = Object.keys(variants);
  const sizeVariants = {};
  keys.forEach((key, index) => {
    sizeVariants[variants[key].name] = {
      name: variants[key].name,
      price: hasDifferentPriceProp
        ? variants[key].purchasePrice
        : variants[key].price.current,
    };
  });
  formattedObject.sizeVariants = sizeVariants;
  formattedObject.slug = slug;
  formattedObject.description = description;

  return formattedObject;
}
