import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createCompetition } from "../../Redux/Actions/CompetitionActions";

function AdminCreateCompetition() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prize, setPrize] = useState("");
  const [currency, setCurrency] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndtDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const res = useSelector((state) => state.CompetitionReducer.Competitions);

  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      description === "" ||
      prize === "" ||
      startDate === "" ||
      endtDate === ""
    ) {
      return;
    }
    setIsPress(true);
    setLoading(true);
    await dispatch(
      createCompetition({
        title,
        description,
        prize,
        currency,
        startDate,
        endtDate,
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      setIsPress(false);
      try {
        if (res.data.status) {
          setTitle("");
          setDescription("");
          setPrize("");
          setStartDate("");
          setEndtDate("");
          console.log("تم الانتهاء");
        }
      } catch {}
    }
  }, [loading]);

  return (
    <Container>
      <Row className="m-3 flex-column ">
        <div className=" fw-bold fs-4 my-3">Add New Competition</div>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
          type={"text"}
          className="fit reduce my-2"
          value={title}
        />

        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          style={{ resize: "none", width: "20rem" }}
          rows="7"
          placeholder="description"
        />

        <input
          onChange={(e) => {
            setPrize(e.target.value);
          }}
          placeholder="Prize"
          type={"text"}
          className="fit reduce my-2"
          value={prize}
        />

        <input
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
          placeholder="Start Date"
          type={"datetime-local"}
          className="fit reduce my-2"
          value={startDate}
        />
        <input
          onChange={(e) => {
            setEndtDate(e.target.value);
          }}
          placeholder="End Date"
          type={"datetime-local"}
          className="fit reduce my-2"
          value={endtDate}
        />

        <Button variant="dark" className="fit m-3" onClick={onSubmit}>
          Save
        </Button>
      </Row>
    </Container>
  );
}

export default AdminCreateCompetition;
