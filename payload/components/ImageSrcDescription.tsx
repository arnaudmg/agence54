import type { FieldDescriptionClientProps } from "payload";

const TOOLTIP_TEXT =
  "Pour une URL complète : allez dans Media (sidebar) → Create new → uploadez le fichier → remplissez les champs → sauvegardez → cliquez sur l’icône Copy URL qui apparaît au bout du nom de l’image → collez ce lien ici.";

export function ImageSrcDescription(_: FieldDescriptionClientProps) {
  return (
    <span>
      Chemin dans /public (ex: /studio.jpg) ou{" "}
      <span
        title={TOOLTIP_TEXT}
        style={{ textDecoration: "underline dotted", cursor: "help" }}
      >
        URL complète
      </span>
      .
    </span>
  );
}

