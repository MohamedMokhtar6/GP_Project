import React, { useEffect } from "react";
import Navs from "../../Components/NavBar/Navs";
import CompetitionCard from "../../Components/Competition/CompetitionCard";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { gatAllCompetitions } from "../../Redux/Actions/CompetitionActions";

function CompetitionPage() {
  const Competition = useSelector(
    (state) => state.CompetitionReducer.Competitions
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gatAllCompetitions());
  }, []);
  let Competitions = [];
  if (Competition.responseObject) {
    Competitions = Competition.responseObject;
  } else {
    Competitions = [];
  }

  return (
    <>
      <Navs />
      <Container
        className="d-flex justify-content-center"
        style={{ minHeight: "90vh" }}
      >
        {Competitions ? (
          Competitions.map((item, index) => {
            return (
              <CompetitionCard
                key={index}
                title={item.title}
                prize={item.prize}
                startDate={item.startDate}
                endtDate={item.endtDate}
                description={item.description}
                id={item.id}
              />
            );
          })
        ) : (
          <h1>No Competition Found</h1>
        )}
      </Container>
    </>
  );
}

export default CompetitionPage;
