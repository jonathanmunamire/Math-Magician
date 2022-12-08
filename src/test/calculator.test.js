import React from "react";
import Calculator from '../components/calculator';
import renderer from "react-test-renderer";

describe("test if the page renders components", ()=>{
    test("test if calculator is rendered", ()=>{
        const calcul = renderer
        .create(<Calculator />)
        .toJSON();

        expect(calcul).toMatchSnapshot();
    })
})