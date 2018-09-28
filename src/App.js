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
    changeTitle = (newTitle) => {
        this.setState({
            title: newTitle
        });
    };
    toggleCars = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

    render() {
        // const cars = this.state.cars;
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
                                changeTitle={() => this.changeTitle(car.name)}
                            />
                        )

                    }) : null
                }
            </div>
        );
    }
}

export default App;
