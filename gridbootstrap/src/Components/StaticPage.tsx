import { relative } from "path";
import React, { Component } from "react";

class StaticPage extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="row">
            <div style={{ textAlign: "left" }} className="col-8">
              <p style={{ fontSize: "25px", color: "grey" }}>logo</p>
            </div>
            <div className="col-1">pa</div>
            <div className="col-1">ge</div>
            <div className="col-1">ag</div>
            <div className="col-1">ge</div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-6">
              <img
                style={{ height: "250px", width: "390px",marginLeft:"-30px" }}
                src="https://t3.ftcdn.net/jpg/03/03/77/46/360_F_303774649_NPa6T7U22KBI2P8BxQ7MhIGJLB7KBd3P.jpg"
              />
            </div>
            <div
              className="col-6"
              style={{
                display: "inline",
                textAlign: "left",
                marginLeft:"-120px"
              }}
            >
              <p style={{ color: "rgb(56,19,63)", fontSize: "30px" }}>
                We're a global consultancy
              </p>
              <p style={{ fontSize: "10px" }}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. It
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking
              </p>
              <button
                style={{
                  width: "130px",
                  backgroundColor: "rgb(240,196,13)",
                  border: "none",
                }}
              >
                New Value
              </button>
            </div>
          </div>
          <div className="container text-center" style={{ display: "flex" }}>
            <div
              className="row"
              style={{
                backgroundColor: "rgb(56,19,63)",
                paddingBottom: "50px",
                paddingRight:"-150px",
                
              }}
            >
              <div style={{ margin: "auto",textAlign: "left" }} className="col-6">
                <p
                  style={{
                    color: "white",
                    fontSize: "10px",
                    marginTop: "50px",
                  }}
                >
                  Lorem psum is user
                </p>
                <p
                  style={{
                    color: "rgb(240,196,13)",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginTop: "-10px",
                  }}
                >
                  About Us & our Work
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "10px",
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "10px",
                    marginTop: "50px",
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when.
                </p>
                <button
                  style={{
                    width: "130px",
                    backgroundColor: "rgb(240,196,13)",
                    border: "none",
                  }}
                >
                  New Value
                </button>
              </div>
              <div
                style={{
                  marginTop: "100px",
                  marginLeft: "100px",
                  marginRight: "-20px",
                  height: "100px",
                  width: "120px",
                  textAlign: "left",
                  backgroundColor: "rgb(56,19,63)",
                }}
                className="col-6"
              >
                <p
                  style={{
                    marginTop: "10px",
                    color: "white",
                    fontSize: "10px",
                  }}
                >
                  CLIENTS
                </p>
                <p
                  style={{
                    color: "rgb(240,196,13)",
                    fontSize: "35px",
                    fontWeight: "600",
                    marginTop: "-20px",
                  }}
                >
                  156
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "rgb(240,196,13)",
                  height: "125px",
                  width: "120px",
                  marginTop: "200px",
                  marginLeft: "-100px",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    color: "rgb(56,19,63)",
                    fontSize: "10px",
                    marginTop: "30px",
                    marginBottom: "-5px",
                  }}
                >
                  CASES
                </p>
                <p
                  style={{
                    color: "rgb(56,19,63)",
                    fontSize: "45px",
                    fontWeight: "600",
                  }}
                >
                  879
                </p>
              </div>
              <div
                style={{
                  height: "130px",
                  width: "120px",
                  marginLeft: "-250px",
                  marginTop: "150px",
                  backgroundColor: "white",
                  textAlign: "left",
                  marginRight:"250px"
                }}
              >
                <p
                  style={{
                    color: "rgb(56,19,63)",
                    fontSize: "10px",
                    marginTop: "30px",
                    marginBottom: "-5px",
                  }}
                >
                  AWARDS
                </p>
                <p
                  style={{
                    color: "rgb(56,19,63)",
                    fontSize: "45px",
                    fontWeight: "600",
                  }}
                >
                  26
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center" style={{ marginTop: "50px" }}>
          <div className="row">
            <div className="col-6">
              <div
                style={{
                  height: "180px",
                  width: "170px",
                  marginTop: "20px",
                  marginLeft:"200px"
                }}
              >
                <img
                  style={{
                    height: "180px",
                    width: "170px",
                  }}
                  src="https://c8.alamy.com/comp/P4GH77/original-film-title-star-wars-episode-vii-the-force-awakens-english-title-star-wars-episode-vii-the-force-awakens-film-director-jj-abrams-year-2015-stars-daisy-ridley-credit-lucas-filmsbad-robotwalt-disney-productions-album-P4GH77.jpg"
                />
              </div>
              <div
                style={{
                  height: "160px",
                  width: "170px",
                  backgroundColor: "rgb(56,19,63)",
                  textAlign: "left",
                  marginLeft:"200px"
                }}
              >
                <p
                  style={{
                    margin: "0px 10px 0px 10px",
                    color: "#fdfdfa",
                    fontSize: "20px",
                    fontWeight: "1000",
                  }}
                >
                  ,,
                </p>
                <p
                  style={{
                    margin: "0px 10px 0px 10px",
                    color: "rgb(240,196,13)",
                    fontSize: "18px",
                  }}
                >
                  Alone we can do so little, together we can do so much
                </p>
              </div>
              <div
                style={{
                  height: "200px",
                  width: "170px",
                  marginLeft: "540px",
                  marginTop: "-200px",
                }}
              >
                <img
                  style={{
                    height: "200px",
                    width: "170px",
                  }}
                  src="https://images.unsplash.com/photo-1586136194012-35ceaddbd773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&w=1000&q=80"
                />
              </div>
            </div>
            <div className="col-6">
              <div style={{     marginRight:"250px",textAlign: "right" }}>
                <p
                  style={{
                    marginTop: "-30px",
                    color: "rgb(56,19,63)",
                    fontSize: "35px",
                    fontWeight: "600",
                  }}
                >
                  Our Team
                </p>
                <p style={{ fontSize: "10px", marginTop: "-10px" }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "rgb(240,196,13)",
                  height: "200px",
                  width: "170px",
                  marginLeft: "-290px",
                  marginTop: "-10px",
                }}
              >
                <p
                  style={{
                    color: "rgb(56,19,63)",
                    fontSize: "25px",
                    fontWeight: "600",
                    marginTop: "20px",
                    marginBottom: "10px",
                  }}
                >
                  About Us
                </p>
                <p style={{ fontSize: "10px", marginTop: "-5px" }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <p style={{ fontSize: "10px", marginTop: "50px" }}>Know More</p>
              </div>
              <div
                style={{
                  height: "180px",
                  width: "170px",
                  marginLeft: "-290px",
                  marginBottom: "-100px",
                }}
              >
                <img
                  style={{ height: "180px", width: "170px" }}
                  src="https://wallpapercave.com/wp/wp1971127.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="container text-center"
          style={{ marginTop: "130px", backgroundColor: "rgb(56,19,63)" }}
        >
          <div className="row">
            <div className="col-12">
              <p
                style={{
                  fontSize: "35px",
                  fontWeight: "500",
                  color: "rgb(240,196,13)",
                  marginTop: "15px",
                }}
              >
                Consulting Services
              </p>
              <p
                style={{
                  margin: "0px 10px 0px 10px",
                  color: "#fdfdfa",
                  fontSize: "10px",
                  marginTop: "-15px",
                }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. by
                the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="container text-center" style={{ marginTop: "30px" }}>
            <div className="row" style={{ columnGap: "12px" }}>
              <div
                className="col"
                style={{
                  height: "170px",
                  width: "170px",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    margin: "auto",
                    marginTop: "20px",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "50%",
                      height: "30px",
                      width: "30px",
                      margin: "auto",
                    }}
                    src="https://previews.123rf.com/images/aspi13/aspi131907/aspi13190700012/126399734-light-bulb-icon.jpg"
                  />
                </div>
                <p style={{ fontSize: "12px", marginTop: "10px" }}>
                  Innovative Thinking
                </p>
                <p style={{ fontSize: "8px" }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when eadable content of a
                  page when{" "}
                </p>
              </div>
              <div
                className="col"
                style={{
                  height: "170px",
                  width: "170px",
                  border: "2px solid rgb(240,196,13)",
                }}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px",
                    margin: "auto",
                    marginTop: "20px",
                    backgroundColor: "rgb(240,196,13)",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "50%",
                      height: "30px",
                      width: "30px",
                      margin: "auto",
                    }}
                    src="https://img.freepik.com/premium-vector/target-icon-black-arrow-mission-winner-business-concept-vector-eps-10-isolated-white-background_399089-2832.jpg?w=2000"
                  />
                </div>
                <p
                  style={{
                    color: "white",
                    fontSize: "12px",
                    marginTop: "10px",
                  }}
                >
                  Target Oriented
                </p>
                <p style={{ color: "white", fontSize: "8px" }}>
                  It is a long established fact that a reader will be distracted
                  by end.
                </p>
              </div>
              <div
                className="col"
                style={{
                  height: "170px",
                  width: "170px",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    margin: "auto",
                    marginTop: "20px",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "50%",
                      height: "30px",
                      width: "30px",
                      margin: "auto",
                    }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAAeHh67u7vu7u5ra2vPz88+Pj7V1dV9fX2enp5WVlZhYWFLS0vc3Nz7+/svLy/m5uarq6tRUVE5OTl3d3clJSXv7+8YGBiysrKoqKjJyclwcHAaGhqVlZULCwu4uLiLi4s8PDyDg4MrKyuglr1kAAAEVUlEQVR4nO2da3vaMAxGEy6BknIrlJRLCx38/9+4lUub7FlkyXax1L3n65zEpyZxLGVWlgEAAAAAAAAAAAAAcF8mo3FHNatyMw/wW89yC4y3nn7zRequs9lNfQSL1N2W8Nr74YJ/EN+N89Q9lrKS/lDHqXss5lkm+JS6vx4MRYar1N31oJQIWnvMXJA8T99Sd9aLg8BwkLqzXuwEhvvUnfViLDBM3Vc//A17VU8nVRHJUHDgnZnAsBUYagGG7cBQCzBsB4ZagGE7MNRCMyK4EBxpwXAy6pfNiOBLSbLr1mKq+g39UiplcTteu+HQO2XUry5nUG4YEs3tTM6n0G24CRDMrxkO1YbdMME8//ihajbshQqeg+OaDR+DDfODasMYab+BasP3CIb5RLNhlI8nRooN4+Smx4oN4+T99j/eMFdsuG30bDEZcjFj2BzDR/6BMFQDDFuBoRpg2AoM1QDDVmCoBhi2YtRwdnzgYtTQGxgmBIYwhGF6YAhDGKYHhjC0ZjjusjFq+PPXhzCsAUM1wLAVGKoBhq3AUA0wbAWGamga/tqMuBg19AaGCYEhDGGYHhjCEIbpgSEMYZgeGMIQhumBIQxhmB4YwhCG6Rn+u8eBhvwPj76fSLtUG91HWAAM7QND+8DQPjC0DwztA0P7mDZcluWLs5Fhw4dzwaChqyBX5v4jKOVzF13HOjKzUxewSa0Q4jPZMBuR/6yWRjkksuVfO4GboVF5jfydGi1p1anqhluqaYS9elMwa5RAJKNyWZS9bO+OzHBqccJoVOok98T+aGCuTGf+sbVsDfJRcm4xP92rY9HY1yog0k+SS5vpA9lII4NPQcd899msb61M4Ok6Jbp23v8a62p77Aey6xBXWu6EZytdjuVovX5fulplMZlSV5pJzxYr9xQT+m5+Ep4tVv4wIo6N/k/CUswKDV0PZOEg6jN0vjh0rBu651TZIKoz5Lz72TY8Mq4mGkRthhXnaivLhnQ46IZkEJUZMoveSOZEZYbcxcnaqiF7Eb23ashfX/LvRLdhZ+lcWcQyFJSeeolm+FhU02nv4Kq3E8dQEiJgD6LD8HZHT3d3MGTNhTdW3McpbVh7ZNHh0CiGsigPdxBJw/omEuTCO4qhMBp5imFY1FuSL4wxDKWBOuYgUoavjbwFGU6MICgPKIcbyqL6ochjrbxBVGPoUYaRt8Qg78NG3mL9vYa8RUUT1iCSho0zkJn6YEGvSpqsJQZpWJ9V6Ykz2NAv48FZYtAd/5oQe1SkPdzQMzPHeTt1vLUtrhPG1pH+DDV8mw18OHWDDfP8+VAUG+fXMqGG34iu9eF3EKuGpV7ifOkzcF8oHVFy72+pLSg4MWYnhfs66YiRIhXnZe+L69NRBtK07J0J/9BnnFrBBfmxE4e5+xqJCXzYqH7MXAn6r7IWBLOs6/1d4UL/T/RC9e7ldxLkgNKzPS5fOxLGo0nqPgMAAAAAAAAAAACA/47fJqJvKEx1hxUAAAAASUVORK5CYII="
                  />
                </div>
                <p style={{ fontSize: "12px", marginTop: "10px" }}>
                  System Design
                </p>
                <p style={{ fontSize: "8px" }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when.
                </p>
              </div>
              <div
                className="container text-center"
                style={{ marginTop: "12px" }}
              >
                <div className="row" style={{ columnGap: "12px" }}>
                  <div
                    className="col"
                    style={{
                      height: "170px",
                      width: "170px",
                      border: "2px solid rgb(240,196,13)",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50%",
                        margin: "auto",
                        marginTop: "20px",
                      }}
                    >
                      <img
                        style={{
                          borderRadius: "50%",
                          height: "30px",
                          width: "30px",
                          margin: "auto",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTEMNtOtqib51pZ8vfHDM2oKXwvGSdjmjg5M4o8F8&s"
                      />
                    </div>
                    <p
                      style={{
                        color: "white",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      Multitasking
                    </p>
                    <p style={{ color: "white", fontSize: "8px" }}>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when.
                    </p>
                  </div>
                  <div
                    className="col"
                    style={{
                      height: "170px",
                      width: "170px",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50%",
                        margin: "auto",
                        marginTop: "20px",
                      }}
                    >
                      <img
                        style={{
                          borderRadius: "50%",
                          height: "30px",
                          width: "30px",
                          margin: "auto",
                        }}
                        src="data:image/png;base64,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"
                      />
                    </div>
                    <p style={{ fontSize: "12px", marginTop: "10px" }}>
                      Encapsulation
                    </p>
                    <p style={{ fontSize: "8px" }}>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when.
                    </p>
                  </div>
                  <div
                    className="col"
                    style={{
                      height: "170px",
                      width: "170px",
                      border: "2px solid rgb(240,196,13)",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50%",
                        margin: "auto",
                        marginTop: "20px",
                      }}
                    >
                      <img
                        style={{
                          borderRadius: "50%",
                          height: "30px",
                          width: "30px",
                          margin: "auto",
                        }}
                        src="https://media.istockphoto.com/vectors/handshake-icon-vector-illustration-vector-id967255466?k=20&m=967255466&s=170667a&w=0&h=RpqrPrJBdaMEW4kucmMrsbD-q85Ca1dwjA5Vnn6I_bA="
                      />
                    </div>
                    <p style={{ color:"white",fontSize: "12px", marginTop: "10px" }}>
                      Optimization
                    </p>
                    <p style={{ color:"white",fontSize: "8px" }}>
                      It is a long established fact that a reader will be
                      distracted by the readable content of content of a page when{" "}
                    </p>
                  </div>
                </div>
              </div>
              <button
                style={{
                  width: "130px",
                  backgroundColor: "rgb(240,196,13)",
                  border: "none",
                  margin: "auto",
                  marginTop: "20px",
                  marginBottom:"20px"
                }}
              >
                New Value
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StaticPage;
