import * as React from "react";
import { CarEntry } from "../../store/cars/state";

interface Props {
  addNewCar(payload: CarEntry): void;
}


class AddNewCar extends React.Component<Props, CarEntry> {
  constructor(props: Props) {
    super(props);
    this.state = {
        id: 0,
        car_make: "",
        car_model: "",
        car_year: 0,
        car_color: "",
        car_image: ""
    };
  }

  private setValue = (field: string, number: boolean, e) => {
    let object = {
      [field]: number ? parseInt(e.target.value, 10) : e.target.value
    };
    this.setState({
      ...this.state,
      ...object
    });
  };

  private saveCar = () => {
    // let carInfo = this.state
    this.props.addNewCar(this.state);
  };

  public render(): JSX.Element {
    return (
      <div>
        <input type="number" onChange={this.setValue.bind(this, "id", true)} />
        <input
          type="text"
          onChange={this.setValue.bind(this, "car_make", false)}
        />
        <input
          type="text"
          onChange={this.setValue.bind(this, "car_model", false)}
        />
        <input
          type="text"
          onChange={this.setValue.bind(this, "car_year", true)}
        />
        <input
          type="text"
          onChange={this.setValue.bind(this, "car_color", false)}
        />
        <input
          type="text"
          onChange={this.setValue.bind(this, "car_image", false)}
        />
          <button onClick={this.saveCar} >Save</button>
      </div>
    );
  }
}

export default AddNewCar;
