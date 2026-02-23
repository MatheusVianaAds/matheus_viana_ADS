import React from "react";

// Import dinâmico do Typebot
const Standard = React.lazy(() => import("@typebot.io/react").then(mod => ({ default: mod.Standard })));

const LeadQualificationPage = () => {
  return (
      <Standard
        typebot="form-qualification"
        apiHost="https://typebot.io"
        style={{ width: "100vw", height: "100vh" }}
      />
  );
}

export default LeadQualificationPage;