import { Cover } from "./sheets/cover";
import { FieldSite } from "./sheets/field-site";
import { Primitives } from "./sheets/primitives";
import { Districts } from "./sheets/districts";
import { CoordinationLayer } from "./sheets/coordination-layer";
import { LiveNotes } from "./sheets/live-notes";
import { Join } from "./sheets/join";
import { Colophon } from "./sheets/colophon";

export default function Page() {
  return (
    <main id="main">
      <Cover />
      <FieldSite />
      <Primitives />
      <Districts />
      <CoordinationLayer />
      <LiveNotes />
      <Join />
      <Colophon />
    </main>
  );
}
