import React, { Component } from "react";
import { StyledButtonSubmit } from "./Styling/Styling";

type IProps = {};
type IState = {
  data: any;
  out: any[];
  star: any[];
};

export class Factors extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      data: 0,
      out: [],
      star: [],
    };
  }

  handleffloydsrecurrive = () => {
    var bag = "";
    var number = 1;
    function numberpat(num: any) {
      if (num == 0) {
        return;
      } else {
        bag = bag + number;
        number++;
        numberpat(num - 1);
      }
    }
    function rowsnum(n: any, i: any) {
      if (n == 0) {
        return;
      } else {
        numberpat(i);
        bag = bag + "\n";
        console.log(bag);
        rowsnum(n - 1, i + 1);
      }
    }
    var n = 5;
    rowsnum(n, 1);
  };

  handlefloydstriangle = () => {
    var bag;
    var number = 1;
    for (var i = 0; i < this.state.data; i++) {
      bag = "";
      for (var j = 0; j < i; j++) {
        bag = bag + " " + number;
        number++;
      }
      console.log(bag);
    }
  };

  handleHollowPyramid = () => {
    var bag = "";
    for (var i = 0; i < this.state.data; i++) {
      for (var j = 0; j < this.state.data - i; j++) {
        bag = bag + " ";
      }
      for (var k = 0; k < 2 * i - 1; k++) {
        if (k === 0 || k === 2 * i - 2) {
          bag = bag + "*";
        } else {
          bag = bag + " ";
        }
      }
      bag = bag + "\n";
    }
    for (i = 0; i < 2 * this.state.data - 1; i++) {
      bag = bag + "*";
    }
    console.log(bag);
  };

  handlepyramid = () => {
    var bag = "";
    for (var i = 0; i < this.state.data; i++) {
      for (var j = 0; j < this.state.data - i; j++) {
        bag = bag + " ";
      }
      for (var k = 0; k < 2 * i - 1; k++) {
        bag = bag + "*";
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };

  handlereversepyramid = () => {
    var bag = "";
    for (var i = 0; i < this.state.data; i++) {
      for (var j = 0; j < i; j++) {
        bag = bag + " ";
      }
      for (var k = 0; k < 2 * (this.state.data - i) - 1; k++) {
        bag = bag + "*";
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };

  handlestart = () => {
    var bag = "";
    for (var i = 0; i < this.state.data; i++) {
      for (var j = 0; j < i; j++) {
        bag = bag + "*" + " ";
        this.state.star.push(bag);
      }
      console.log(this.state.star);
    }
  };

  handleClick = () => {
    for (var i = 0; i < this.state.data; i++) {
      if (this.state.data % i == 0) {
        this.state.out.push(i);
      } else {
        console.log(this.state.data);
      }
      console.log(this.state.out, "Data");
    }
  };

  findPrime = () => {
    if (this.state.data <= 1) {
      return false;
    }
    for (var i = 2; i < this.state.data; i++) {
      if (this.state.data % i == 0) {
        console.log("False");
        break;
      } else {
        console.log("True");
      }
    }
  };
  handletri = () => {
    var bag = "";
    for (var i = 1; i <= this.state.data; i++) {
      for (var j = i; j <= i; j++) {
        bag = bag + i + " ";
      }
      console.log(bag);
    }
  };

  handletrio = () => {
    var bag = "";
    for (var i = 1; i <= this.state.data; i++) {
      for (var j = 1; j <= i; j++) {
        bag = bag + i;
      }
      console.log(bag);
    }
  };

  handleAlpha = () => {
    for (var i = 1; i <= this.state.data; i++) {
      var bag = "";
      for (var j = 0; j < i; j++) {
        bag = bag + String.fromCharCode(i + 64) + " ";
      }
      console.log(bag);
    }
  };
  handleReversestar = () => {
    var bag = "";
    for (var i = this.state.data; i >= 0; i--) {
      bag += ("*" + "").repeat(i) + "\n";
    }
    console.log(bag);
  };

  handlerepeat = () => {
    var bag = "";
    for (let i = 0; i < this.state.data; i++) {
      bag += (String.fromCharCode(i + 64) + " ").repeat(i) + "\n";
    }
    console.log(bag);
  };
  handlefizz = () => {
    var arr = [];
    for (var i = 1; i <= this.state.data; i++) {
      if (i % 3 === 0) {
        arr.push("Fizz");
      } else if (i % 5 == 0) {
        arr.push("Buzz");
      } else {
        arr.push(i);
      }
    }
    console.log(arr);
  };

  handlerighttriangl = () => {
    var bag = "";
    for (var i = 0; i < this.state.data; i++) {
      for (var j = 0; j < this.state.data - i; j++) {
        bag = bag + "*";
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };
  handlerighttri = () => {
    var bag = "";
    for (var i = 0; i < this.state.data; i++) {
      for (var j = 0; j < i; j++) {
        bag = bag + "*";
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };
  handlerightrighttri = () => {
    var bag = "";
    for (var i = 0; i < this.state.data; i++) {
      for (var j = 0; j < this.state.data - i; j++) {
        bag = bag + " ";
      }
      for (var k = 0; k < i; k++) {
        bag = bag + "*";
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };

  handlesquare = () => {
    var bag = "";
    for (var i = 0; i < this.state.data; i++) {
      for (var j = 0; j < this.state.data; j++) {
        bag = bag + "*";
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };

  handleHollowsquare = () => {
    var bag = "";
    for (var i = 0; i < this.state.data; i++) {
      for (var j = 0; j < this.state.data; j++) {
        if (i === 0 || i === this.state.data - 1) {
          bag = bag + "*";
        } else {
          if (j === 0 || j === this.state.data - 1) {
            bag = bag + "*";
          } else {
            bag = bag + " ";
          }
        }
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };

  handleHollowtri = () => {
    var bag = "";
    for (var i = 1; i <= this.state.data; i++) {
      for (var j = 0; j < i; j++) {
        if (i === this.state.data) {
          bag = bag + "*";
        } else {
          if (j == 0 || j == i - 1) {
            bag = bag + "*";
          } else {
            bag = bag + " ";
          }
        }
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };
  handleDiamond = () => {
    var bag = "";
    for (var i = 1; i <= this.state.data; i++) {
      for (var j = 0; j < this.state.data - i; j++) {
        bag = bag + " ";
      }
      for (var k = 0; k < 2 * i - 1; k++) {
        bag = bag + "*";
      }
      bag = bag + "\n";
    }
    for (var i = 0; i < this.state.data; i++) {
      for (var j = 0; j < i; j++) {
        bag = bag + " ";
      }
      for (var k = 0; k < 2 * (this.state.data - i) - 1; k++) {
        bag = bag + "*";
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };

  hourglass = () => {
    var bag = "";
    for (var i = 0; i < this.state.data; i++) {
      for (var j = 0; j < i; j++) {
        bag = bag + " ";
      }
      for (var k = 0; k < 2 * (this.state.data - i) - 1; k++) {
        bag = bag + "*";
      }
      bag = bag + "\n";
    }
    for (var i = 0; i < this.state.data; i++) {
      for (var j = 0; j < this.state.data - i; j++) {
        bag = bag + " ";
      }
      for (var k = 0; k < 2 * i - 1; k++) {
        bag = bag + "*";
      }
      bag = bag + "\n";
    }
    console.log(bag);
  };

  pascalstriangle = () => {
    var answer = [];
    for (var i = 0; i < this.state.data; i++) {
      var temparr: any = [];
      for (var j = 0; j < i; j++) {
        // temparr.push(this.pascaltri(i, j));
      }
      answer.push(temparr);
    }
    return answer;
  };

  // pascaltri(i, j) {
  //   if (j === 0) {
  //     return 1;
  //   } else if (i === 0) {
  //     return 0;
  //   } else {
  //     return this.pascaltri(i - 1, j) + this.pascaltri(i - 1, j - 1);
  //   }
  // }

  render() {
    return (
      <>
        {this.state.star.map((item) => {
          return console.log(item);
        })}
        <input
          style={{ height: "30px", borderRadius: "5px" }}
          onChange={(e) => this.setState({ data: e.target.value })}
          type="number"
          placeholder="Enter Number here "
        />
        <div>
          <StyledButtonSubmit onClick={() => this.handleffloydsrecurrive()}>
            Recursive Traingle Floyds
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handlefloydstriangle()}>
            Floyds Triangle
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handleClick()}>
            Submit
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.findPrime()}>
            Prime
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handlestart()}>
            Stars
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handlerighttriangl()}>
            RevRighttri
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handlerighttri()}>
            Righttri
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handletri()}>
            Triangle
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handletrio()}>
            Triangle
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handleAlpha()}>
            HandleAlpha
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handlerepeat()}>
            Alphabet Repeat
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handlefizz()}>
            FizzBuzz
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handleReversestar()}>
            Reverse Star
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handlepyramid()}>
            Pyramid
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handlereversepyramid()}>
            RevPyramid
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handlerightrighttri()}>
            RRtriangle
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handlesquare()}>
            Sqaure
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handleHollowsquare()}>
            Hallow Sqaure
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handleHollowtri()}>
            Hallow Triangle
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handleDiamond()}>
            Diamond
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.hourglass()}>
            HourGlass
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.pascalstriangle()}>
            Pascals Traingle
          </StyledButtonSubmit>
          <StyledButtonSubmit onClick={() => this.handleHollowPyramid()}>
            Hallow Pyramid
          </StyledButtonSubmit>
        </div>
      </>
    );
  }
}

export default Factors;
