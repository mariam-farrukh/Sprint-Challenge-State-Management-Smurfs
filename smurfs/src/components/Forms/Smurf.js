import React from "react";
import { connect } from "react-redux";
import { fetchSmurf, addSmurf} from '../store/actions';
import FormikSmurfForm from './SmurfForm';

function Smurf(props) {
//   const fetchSmurfs = () => {
//     props.fetchSmurf();
//   };

  return (
    <div className="smurfs">
      <button onClick={() => {props.fetchSmurf()}}> Fetch the Smurfs </button>
      {props.smurfs ? (
        props.smurfs.map(smurf => (
          <>
            <h3>Name: {smurf.name}</h3>
            <h3>Age: {smurf.age}</h3>
            <h3>Height: {smurf.height}</h3>
          </>
        ))
      ) : (
        <h1> Smurfs will be here soon, please wait...</h1>
      )}
      <FormikSmurfForm addSmurf={props.addSmurf} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf, addSmurf}
)(Smurf);