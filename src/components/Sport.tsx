import { useState } from "react";

import { VtmnButton } from "@vtmn/react";

import WithDataChart from "./WithDataChart";

interface SportDisplay {
  sport: string;
}

const Sport = ({ sport }: SportDisplay) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="vtmn-card my-card">
      <div className="card-title">
        <h4 onClick={() => setExpanded(!expanded)} className="question-title">
          {sport}
        </h4>
        <div>
          <VtmnButton
            onClick={() => setExpanded(!expanded)}
            iconRight={expanded ? "arrow-up-line" : "arrow-down-line"}
            size="small"
            variant="tertiary"
            aria-label={expanded ? "Masquer les trends" : "Afficher les trends"}
            aria-expanded={expanded}
            aria-controls={`panel-${sport}`}
          >
            {expanded ? <span>Masquer</span> : <span>Afficher</span>}
          </VtmnButton>
        </div>
      </div>
      {expanded && <WithDataChart sport={sport} />}
    </div>
  );
};

export default Sport;
