import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Header,
  NextImage,
  Text,
} from "../../components/shared";
import { useRouter } from "next/router";
import useTshirts from "../../hooks/useTshirts";
import formatProduct from "../../utils/formatProduct";
import ProductList from "../../components/product/ProductList";
import SizeSelector from "../../components/product/SizeSelector";
export default function Product() {
  const history = useRouter();
  const { slug } = history.query;
  const { tshirts, isError, isLoading } = useTshirts();
  const [tshirt, setTshirt] = useState(null);
  const [currentSize, setCurrentSize] = useState("M");

  useEffect(() => {
    if (!!slug && !isLoading) {
      const index = tshirts.items.findIndex((e) => e.slug === slug);
      setTshirt(formatProduct(tshirts.items[index]));
    }
  }, [slug, isLoading]);
  console.log("TSHIRT", tshirt);
  //   const { tshirt, isError, isLoading } = useTshirt(slug);
  if (!!tshirt) {
    console.log(Object.keys(tshirt.sizeVariants));
    return (
      <>
        <Container mt={{ xs: 4, lg: 7 }}>
          <Box
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              borderRadius={16}
              overflow="hidden"
              mr={{ xs: 0, md: 6, lg: 12 }}
              mb={{ xs: 4, lg: 0 }}
              width={400}
              height={400}
              flex={1}
            >
              <NextImage src={tshirt.picture} />
            </Box>
            <Box flex={1}>
              <Header serif level={2} mb={2}>
                {tshirt.label}
              </Header>
              <Text serif fontSize="lg" mb={5}>
                {tshirt.sizeVariants[currentSize].price}€
              </Text>
              <SizeSelector
                sizes={Object.keys(tshirt.sizeVariants)}
                currentSize={currentSize}
                setCurrentSize={setCurrentSize}
              />
              <Button mt={5}>Buy</Button>
              <Text fontWeight={2} mb={2} mt={4}>
                Descritption:
              </Text>
              <Text>{tshirt.description}</Text>
            </Box>
          </Box>
        </Container>
        <ProductList title="You're gonne love also" mt={{ xs: 5, lg: 10 }} />
      </>
    );
  } else {
    return <div>load</div>;
  }
}
