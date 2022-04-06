import React, { Fragment } from "react";
import { HeaderLogged } from "../../../components/header_logged/header_logged";
import { Notes } from "../../../components/notes/notes_component";

const NoteScreen = () => (
  <Fragment>
    <HeaderLogged />
    <Notes />
  </Fragment>
);

export default NoteScreen;
