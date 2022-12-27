
import React from "react";
import { json } from "stream/consumers";

interface IProps {}

interface IState {
  currentIndex: number;
}

const baseUrl = "https://reqres.in/api"

const images = [
  "https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-blue-technology-web-banner-image_122453.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20201026/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-image_438818.jpg",
  "https://png.pngtree.com/thumb_back/fh260/back_pic/03/93/16/9057e520ba9e1a6.jpg",
  "https://i.pinimg.com/564x/89/e1/b7/89e1b7a45d8f06ff3d0371668e25c646.jpg"
]
export default class Carousel extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }


  componentDidMount() {
    setInterval(() => {
      this.setState({currentIndex: this.state.currentIndex<3 ? this.state.currentIndex+1 : 0})
    }, 5000)
  }

  
  privous = () => {
    this.setState({currentIndex: this.state.currentIndex>1 ? this.state.currentIndex-1 : images.length-1})
  }

  next = () => {
    this.setState({currentIndex: this.state.currentIndex<3 ? this.state.currentIndex+1 : 0})
  }

  render() {
    return (
      <>
        <img src={images[this.state.currentIndex]} style={{width: '100%'}} />
        <h1 onClick={this.privous}>Left</h1>
        <h1 onClick={this.next}>Right</h1>
        {
          images.map((item, index) => {
            return <div
              onClick={() => this.setState({currentIndex: index})}
             style={{height: 50, width: 50, background: 'red', marginLeft: 10, display: 'inline-block', borderRadius: 25,
              backgroundImage: `url(${item})`, backgroundSize: 'cover', border: this.state.currentIndex === index ? '4px solid #000' : 'none'
            }}></div>
          })
        }
        {/* <div className="container">
          <div className="row">
            <div className="col-6" style={{backgroundColor: 'red', height: 200}}>
              s
            </div>
            <div className="col-6" style={{backgroundColor: 'black', overflow: 'hidden'}}>
              <div className="row">
              <div className="col-6" style={{backgroundColor: 'blue', height: 200}}>
                s
              </div>
              <div className="col-6" style={{backgroundColor: 'green', height: 200}}>
                s
              </div>
              <div className="col-6" style={{backgroundColor: 'green', height: 200}}>
                s
              </div>
              <div className="col-6" style={{backgroundColor: 'blue', height: 600, marginBottom: 400}}>
                s
              </div>
              
              </div>
            </div>
            
            <div className="col-4 col-sm-6 col-md-3" style={{backgroundColor: 'black', height: 200}}>
              a
            </div>
            <div className="col-4 col-sm-6 col-md-3" style={{backgroundColor: 'green', height: 200}}>
              a
            </div>
            <div className="col-8 col-sm-6 col-md-3" style={{backgroundColor: 'blue', height: 200}}>
              a
            </div>
          </div>
          
          <div className="row mt-4">
            <div style={{width: '100%'}}>
            <div style={{backgroundColor: 'black', height: 200, width: 200, float: 'left'}}>
                s
            </div>
            <div style={{backgroundColor: 'blue', height: 600, width: 200, float: 'right'}}>
                s
            </div>
            <div style={{clear: "both"}}></div>
            <div style={{backgroundColor: 'green', height: 400, width: 400}}>
                s
            </div>
            </div>
            <div className="col-12" style={{backgroundColor: 'red'}}>
              s
            </div>
            <div className="col-6" style={{backgroundColor: 'black'}}>
              a
            </div>
          </div>
        </div> */}
        
      </>
    );
  }
}