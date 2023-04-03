import React from "react";
import { Container } from "react-bootstrap";
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneCourse } from "../../../Redux/Actions/courseAction";
import { useEffect } from "react";
export default function Jupiter() {
  const { id } = useParams();
  const oneCourse = useSelector((state) => state.Courses.oneCourse);
  const dispatch = useDispatch();
  let path = "";
  useEffect(() => {
    dispatch(getOneCourse(id));
  }, []);
  let item = [];
  if (oneCourse.responseObject) {
    item = oneCourse.responseObject;
    path = `"${item.jupiter}"`;
    console.log(path);
  } else {
    item = [];
  }
  const DARK_MODE = true;
  return (
    <Container className="minH">
      <div className="jupiter">
        <JupyterNotebookViewer
          filePath="C:\fakepath\decision_trees.ipynb"
          className="notebook-class"
          outputImageClassName="output-image"
          outputBorderClassName="output-border"
          inputMarkdownDarkTheme={DARK_MODE}
          showInputLineNumbers={true}
          showOutputLineNumbers={true}
          withOnClick={true}
        />
      </div>
    </Container>
  );
}
