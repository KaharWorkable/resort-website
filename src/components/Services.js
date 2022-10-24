import React, { Component } from 'react';
import Title from './Title';
import {FaWater, FaHiking, FaShuttleVan, FaTree} from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [{
            icon: <FaWater/>,
            title: "Huge Pool",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate libero id eros efficitur feugiat. Maecenas fringilla aliquet ipsum, in malesuada turpis vehicula ac.'  
        },
        {
            icon: <FaHiking/>,
            title: "Endless Hiking",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate libero id eros efficitur feugiat. Maecenas fringilla aliquet ipsum, in malesuada turpis vehicula ac.'  
        },
        {
            icon: <FaShuttleVan/>,
            title: "Free Shuttle",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate libero id eros efficitur feugiat. Maecenas fringilla aliquet ipsum, in malesuada turpis vehicula ac.'  
        },
        {
            icon: <FaTree/>,
            title: "Varities of Flora",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate libero id eros efficitur feugiat. Maecenas fringilla aliquet ipsum, in malesuada turpis vehicula ac.'  
        }
           
        ]
    }
  render() {
    return (
      <section className="services">
        <Title title="Services"/>
        <div className='services-center'>
            {this.state.services.map((item, index) =>{
                return <article key={index} className="services">
                    <span style={{fontSize: 40, color: "#1746A2"}}>{item.icon}</span>
                    <h6 style={{color: "#1746A2"}}>{item.title}</h6>
                    <p style={{color: "#1746A2"}}>{item.info}</p>
                </article>
            })}
        </div>
      </section>
    )
  }
}
