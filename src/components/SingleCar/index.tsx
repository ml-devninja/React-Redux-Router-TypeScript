import * as React from "react";
import {CarEntry} from "../../store/cars/state";

interface Props {
    car: CarEntry | any;
    removeCar(id: number) : void
}

class SingleCar extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render(): JSX.Element {
        const { car, removeCar } = this.props;

        return (
            <div
                style={{
                    display: "flex",
                    padding: "15px 0",
                    borderBottom: "1px solid #606060"
                }}
            >
                <div style={{width: 150, marginRight:15}}>
                    <img src={car.car_image} alt="" style={{width:150, height: 150}}/>
                    <button onClick={() => removeCar(car.id)}>Remove</button>

                </div>
                <div>
                    <h2>
                        {`${car.car_make} ${car.car_model}`}
                    </h2>
                    <h3>{car.car_year}</h3>
                    <small>Color: {car.car_color}</small>
                </div>
            </div>
        );
    }
}

export default SingleCar;
