import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "無料のモックテール",
        info: "無制限のウェルカムドリンク"
      },
      {
        icon: <FaHiking />,
        title: "無限のハイキング",
        info: "さまざまなハイキングオプション"
      },
      {
        icon: <FaShuttleVan />,
        title: "無料シャトルサービス",
        info: "各地へのシャトルサービス"
      },
      {
        icon: <FaBeer />,
        title: "無料のビール",
        info: "2000円以上の食べ物を買うと無料のビール"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="サービス" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
