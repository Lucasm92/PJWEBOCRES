import React, { Component } from 'react'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


export default class Data extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mesure: [
                {   
                    name:"Bathroom",
                    Temperature : 20,
                    Humidity:100,
                    Airpollution:22,
 
                },
            
                {   
                    name:"Lounge",
                    Temperature : 25,
                    Humidity:50,
                    Airpollution:60,
 
                },

                {   
                    name:"Kitchen",
                    Temperature : 18,
                    Humidity:68,
                    Airpollution:42,
 
                },

                {   
                    name:"Bedroom",
                    Temperature : 20,
                    Humidity:100,
                    Airpollution:22,
 
                },

                {   
                    name:"Entrance",
                    Temperature : 20,
                    Humidity:100,
                    Airpollution:22,
 
                },
            ],
            selected: 'Temperature',
            color:'#EC0B16'
        }
        this.handleClick1 = this.handleClick1.bind(this) 
        this.handleClick2 = this.handleClick2.bind(this) 
        this.handleClick3 = this.handleClick3.bind(this) 
        }

        handleClick1(){ 
    
            // Changing state 
            this.setState({selected : 'Temperature'})
            this.setState({color : '#EC0B16'})
          }

          handleClick2(){ 
    
            // Changing state 
            this.setState({selected : 'Humidity'})
            this.setState({color : '#2B46E6'})
            
          }
          handleClick3(){ 
    
            // Changing state 
            this.setState({selected : 'Airpollution'}) 
            this.setState({color : '#82ca9d'})
          }
        
    

    changeM(selected) {
        this.setState({ selected});
    }



    render() {
        const { mesure, selected,color } = this.state;
        const {  changeM } = this.props;

        return (
            <div class='mainContent'>



                 <div className="container-fluid">
                 <div className=" card shadow-lg p-3 mb-5 bg-white rounded text-dark card-deck mb-1 text-center mb-4 shadow-sm offset-sm-1">
                 <div class="card-body">
                
                <div class="row">
                <div class='col-md'>
                <h3 class="sensors"> HOME</h3>
                <BarChart 
                 width={500}
                height={300}
                data={mesure}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}>
                 <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
             <Tooltip />
                 <Legend />
                <Bar dataKey={selected} fill={color} />
                </BarChart>
                </div>
                <div class='col-md'>
                <div class="row">
                <button class='btn btn-danger' onClick={this.handleClick1}>
                    Temperature
                </button>
                </div>
                <div class="row">
                <button class='btn btn-primary' onClick={this.handleClick2}>
                    Humidity
                </button>
                </div>
                <div class="row">
                <button class='btn btn-success' onClick={this.handleClick3}>
                    Airpollution
                </button> 
                </div>

                </div>
                </div>
                </div>
                </div>
                </div>


            </div>
            
             
            )
    }
}