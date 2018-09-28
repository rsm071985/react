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

    };
    changeTitle = (newTitle) => {
        this.setState({
            title: newTitle
        });
    };
    handleInput = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    render() {
        // const cars = this.state.cars;
        return (
            <div className="App">
                <input name="title" onChange={this.handleInput}/>
                <button onClick={this.changeTitle.bind(this, 'Изменили значение')}>Нажми</button>
                <h1>{this.state.title}</h1>
                {this.state.cars.map((car, index) => {
                    return (
                        <Car
                            key = {index}
                            name = {car.name}
                            year = {car.year}
                            changeTitle = {() => this.changeTitle(car.name)}
                        />
                    )
                })}
                {/*<Car*/}
                {/*name={cars[0].name}*/}
                {/*year={cars[0].year}*/}
                {/*onChangeTitle={this.changeTitle.bind(this, cars[0].name)}*/}
                {/*/>*/}
                {/*<Car*/}
                {/*name={cars[1].name}*/}
                {/*year={cars[1].year}*/}
                {/*onChangeTitle={() => this.changeTitle(cars[1].name)}*/}
                {/*/>*/}
                {/*<Car*/}
                {/*name={cars[2].name}*/}
                {/*year={cars[2].year}*/}
                {/*onChangeTitle={() => this.changeTitle(cars[2].name)}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default App;
