import React from "react";
import Card from "./card";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockData} from "../../mock";

configure({adapter: new Adapter()});

describe(`e2e Card`, () => {
  it(`After click and than mouseout event on Card, it should have a special class`, () => {
    const SPECIAL_CLASS = `card--selected`;

    const tree = mount(
        <Card cardData={mockData[0]}/>
    );

    tree.find(`.card__event-trigger`).simulate(`click`);
    expect(tree.find(`.card`).hasClass(SPECIAL_CLASS)).toEqual(false);

    tree.find(`.card__event-trigger`).simulate(`mouseOut`);
    expect(tree.find(`.card`).hasClass(SPECIAL_CLASS)).toEqual(true);
  });
});
