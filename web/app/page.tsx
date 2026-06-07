import { Cover } from "./sheets/cover";
import { FieldSite } from "./sheets/field-site";
import { Primitives } from "./sheets/primitives";

export default function Page() {
  return (
    <main id="main">
      <Cover />
      <FieldSite />
      <Primitives />
    </main>
  );
}
