import Text from "./Text";
import Header from "./Header";
export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Header color="blue" level={4}>
          Header
        </Header>
      </div>
      {children}
      <div>
        <Text fontSize>footer</Text>
      </div>
    </div>
  );
}
