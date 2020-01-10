import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;
  //componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>そのような部屋は見つかりませんでした...</h3>
          <Link to="/rooms" className="btn-primary">
            部屋に戻る
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    console.log(defaultImg);
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              部屋に戻る
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>詳細</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>情報</h3>
              <h6>価格 : ¥{price}</h6>
              <h6>サイズ : {size} 平方フィート</h6>
              <h6>
                最大容量: {capacity > 1 ? `${capacity} 人` : ` ${capacity} 人`}
              </h6>
              <h6>{pets ? "ペット可" : "ペットは許可されていません"}</h6>
              <h6>{breakfast && "無料の朝食が含まれています"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>エキストラ</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
