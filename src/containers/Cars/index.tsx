import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../../store/state";
import { CarEntry, addCar, removeCar } from "../../store/cars";
import { bindActionCreators, Dispatch } from "redux";
import AddNewCar from "@components/AddNew/Car";
import SingleCar from "@components/SingleCar";

interface Props {
  cars: CarEntry[] | any;
  removeCar(id: number): void;
  addCar(payload: CarEntry): void;
}

interface Actions {
  removeCar(id: number): void;
  addCar(payload: CarEntry): void;
}

class Cars extends React.Component<Props> {
  public removeCar = (id: number) => {
    this.props.removeCar(id);
  };

  public addNewCar = (payload: CarEntry) => {
    // console.log(payload);
    this.props.addCar(payload);
  };

  public render(): JSX.Element {
    return (
      <div className="App">
        <h2>Add new car form:</h2>
        <AddNewCar addNewCar={this.addNewCar} />
          <h2>Cars list</h2>
        {this.props.cars.map(car => (
          <SingleCar key={car.id} car={car} removeCar={this.removeCar} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state: RootState, props: Props): Props {
  return {
    ...props,
    cars: state.cars.items
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): Actions {
  return bindActionCreators(
    {
      addCar,
      removeCar
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
