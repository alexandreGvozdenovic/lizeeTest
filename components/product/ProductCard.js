import { Box, Button, NextImage, Text, Header } from "../shared";
import { useRouter } from "next/router";
import formatProduct from "../../utils/formatProduct";
import Image from "next/image";

export default function ProductCard({ tshirt }) {
  const { label, lowestPrice, picture, sizeVariants, slug } =
    formatProduct(tshirt);
  const history = useRouter();

  return (
    <Box
      border="1px solid"
      borderColor="gray.main"
      borderRadius={16}
      overflow="hidden"
      onClick={() => history.push(`/product/${slug}`)}
      style={{ cursor: "pointer" }}
    >
      <Box position="relative">
        <NextImage
          src={picture}
          height={250}
          objectFit="cover"
          borderRadius={16}
        />
      </Box>
      <Box flexDirection="row" justifyContent="space-between" p={4}>
        <Box>
          <Header serif level={4} mb={2}>
            {label}
          </Header>
          <Text fontSize="xs">{lowestPrice}€</Text>
        </Box>
        <Box alignSelf="flex-end">
          <Button icon>
            <Image
              src={"/icons/basket.svg"}
              width={20}
              height={20}
              alt="product"
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
