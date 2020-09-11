import React, { useEffect } from "react";
import "./App.css";
import SmurfList from "./components/SmurfList";
import SmurfForm from "./components/SmurfForm";
import Testingthing from "./Testingthing";
import { connect } from "react-redux";
import { fetchSmurfs } from "./actions/smurfActions";

function App(props) {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <SmurfList />
      <SmurfForm />
      <Testingthing />
    </div>
  );
}

export default connect(null, { fetchSmurfs })(App);
