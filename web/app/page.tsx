import { Cover } from "./sheets/cover";
import { FieldSite } from "./sheets/field-site";
import { Primitives } from "./sheets/primitives";
import { Districts } from "./sheets/districts";
import { CoordinationLayer } from "./sheets/coordination-layer";

export default function Page() {
  return (
    <main id="main">
      <Cover />
      <FieldSite />
      <Primitives />
      <Districts />
      <CoordinationLayer />
    </main>
  );
}
