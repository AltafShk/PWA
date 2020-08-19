import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";


export default function Converter () {
    const [currencies, setCurrencies] = useState('');
    const [amount, setAmt] = useState('');
    const [fromCurrency, setFromCur] = useState('USD');
    const [toCurrency, setToCur] = useState('PKR');
    const [result, setResult] = useState('');

    useEffect(() => {
        axios.get('https://free.currconv.com/api/v7/currencies?apiKey=0b15c491fe7a9edb357d')
        .then((res) => {
            var a = [];
            for (const key in res.data.results){
                a.push(key);
            }
            setCurrencies(a);
        })
        .catch(err => console.log(err))
    }, []);

    const selectHandler = event => {
          if (event.target.name === "from") {
            setFromCur(event.target.value);
          } else {
            if (event.target.name === "to") {
              setToCur(event.target.value);
            }
          }
        };
    const convertHandler = () => {
            if (fromCurrency !== toCurrency) {
                axios
                .get(
                    `https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=0b15c491fe7a9edb357d`
                )
                .then(response => {
                    console.log(response);
                    const conv = `${fromCurrency}_${toCurrency}`;
                    const ans = response.data[conv] * amount;
                    setResult(ans.toFixed(3));
                })
                .catch(error => {
                console.log("Opps", error);
                });
            } else {
              setResult("You cant convert the same currency!");
            }
        };
    return(
        <Container fluid className="Converter">
          <Container fluid>
          <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "bts-txt">CURRENCY CONVERTER</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/cc-img-1.jpg')}/>
                </Col> 

            </Row>
          </Container>
          <h2>
            <span>Currency</span>Converter
          </h2>
          <div className="From">
            <input
              name="amount"
              type="text"
              value={amount}
              onChange={event => setAmt(event.target.value)}
            />
            <select
              name="from"
              onChange={event => selectHandler(event)}
              value={fromCurrency}
            >
              {currencies && currencies.map(cur => (
                <option key={cur}>{cur}</option>
              ))}
            </select>
            <select
              name="to"
              onChange={event => selectHandler(event)}
              value={toCurrency}
            >
              {currencies && currencies.map(cur => (
                <option key={cur}>{cur}</option>
              ))}
            </select>
            <button onClick={convertHandler}>Convert</button>
            {result && <h3>{result}</h3>}
          </div>
        </Container>
    )
}
