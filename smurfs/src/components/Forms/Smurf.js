import React from "react";
import { connect } from "react-redux";
import { fetchSmurf, addSmurf, deleteSmurf} from '../store/actions';
import FormikSmurfForm from './SmurfForm';
import { Button} from './StyledSmurfs.js';

function Smurf(props) {
    const deleteSmurfs = id => {
        props.deleteSmurf(id);
    };

  return (
    <div>
        <FormikSmurfForm addSmurf={props.addSmurf} />
        <div className="smurfslist">
            <Button onClick={() => {props.fetchSmurf()}}> Fetch the Smurfs </Button>
            {props.smurfs ? (
                props.smurfs.map(smurf => (
                <div className="smurfs" key={smurf.name}>
                    <h4>Name: {smurf.name}</h4>
                    <h4>Age: {smurf.age}</h4>
                    <h4>Height: {smurf.height}</h4>
                    <Button onClick={() => deleteSmurfs(smurf.id)}>Smurf Left the Village</Button>
                </div>
                ))
            ) : (
                <h1> Smurfs will be here soon, please wait...</h1>
            )}
        </div>
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
  { fetchSmurf, addSmurf, deleteSmurf}
)(Smurf);