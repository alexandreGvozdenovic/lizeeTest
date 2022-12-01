import useTshirts from "../../hooks/useTshirts";
import { Container, Header, Box, Text } from "../shared";
import ProductCard from "./ProductCard";

export default function ProductList({ title = "Title", ...props }) {
  const { tshirts, isError, isLoading } = useTshirts();
  console.log("ITEMS", tshirts);

  return (
    <Container {...props}>
      <Header level={2} serif mb={6}>
        {title}
      </Header>
      <Box
        display="grid"
        gridGap={5}
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr));"
      >
        {isLoading ? (
          <Text>skeleton</Text>
        ) : (
          <>
            {tshirts.items.map((tshirt, index) => {
              return <ProductCard key={index + tshirt.code} tshirt={tshirt} />;
            })}
          </>
        )}
      </Box>
    </Container>
  );
}
