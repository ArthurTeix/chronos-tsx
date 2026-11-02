import { Heading } from "./components/Heading";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      {/* tudo escrito entre a tag Heading vai ser o meu children */}
      <Heading>oi amigo</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit
        perferendis, voluptates porro unde repellendus provident nesciunt esse
        ex cumque cum qui iusto similique consequuntur dolor tenetur, accusamus
        natus est.
      </p>
    </>
  );
}
