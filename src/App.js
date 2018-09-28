import React, {Component} from 'react';
import './App.css';
import Car from './components/Car/Car'

class App extends Component {
    state = {
        cars: [
            {
                name: 'Car 1',
                year: '2018'
            },
            {
                name: 'Car 2',
                year: '2017'
            },
            {
                name: 'Car 3',
                year: '2016'
            }
        ],
        title: 'Components',
        showCars: false

    };
    changeName(name, index) {
        const car = this.state.cars[index];
        car.name = name;
        const cars = this.state.cars.concat();
        cars[index] = car;
        this.setState({
            cars: cars
        })
    };
    deleteCar(index){
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({cars: cars});
    };
    toggleCars = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.toggleCars}>Toggle cars</button>
                {this.state.showCars ?
                    this.state.cars.map((car, index) => {
                        return (
                            <Car
                                key={index}
                                name={car.name}
                                year={car.year}
                                deleteCar = {this.deleteCar.bind(this, index)}
                                changeName={(event) => this.changeName(event.target.value, index)}
                            />
                        )

                    }) : null
                }
            </div>
        );
    }
}

export default App;
