import React from "react";
import CardContainer from "./cardContainer.jsx";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockData} from "../../mock";

configure({adapter: new Adapter()});

const SPECIAL_CLASS = `card--selected`;
let tree = null;
const cardData = mockData[0];

describe(`e2e CardContainer`, () => {
  beforeEach(() => {
    tree = mount(
        <CardContainer cardData={cardData}/>
    );
  });

  it(`After click and than mouseout event on Card, it should have a special class`, () => {
    tree.find(`.card__event-trigger`).simulate(`click`);
    expect(tree.find(`.card`).hasClass(SPECIAL_CLASS)).toEqual(false);

    tree.find(`.card__event-trigger`).simulate(`mouseOut`);
    expect(tree.find(`.card`).hasClass(SPECIAL_CLASS)).toEqual(true);
  });

  it(`Special class should disappear after click on Card with it`, () => {
    tree.find(`.card__event-trigger`).simulate(`click`);
    tree.find(`.card__event-trigger`).simulate(`mouseOut`);
    tree.update();

    tree.find(`.card__event-trigger`).simulate(`click`);

    expect(tree.find(`.card`).hasClass(SPECIAL_CLASS)).toEqual(false);
  });

  it(`After click on bottom link, Card should have a special class`, () => {
    tree.find(`.card__link`).simulate(`click`);
    expect(tree.find(`.card`).hasClass(SPECIAL_CLASS)).toBe(true);
  });

  it(`After click on bottom link, and then click on Card,
   special class should disappear`, () => {

    tree.find(`.card__link`).simulate(`click`);
    tree.find(`.card__event-trigger`).simulate(`click`);
    tree.find(`.card__event-trigger`).simulate(`mouseOut`);
    expect(tree.find(`.card`).hasClass(SPECIAL_CLASS)).toBe(false);
  });

  it(`After click on Card, additional text content should be changed`, () => {
    const basicText = tree.find(`.card__additional-text`).text();
    tree.find(`.card__event-trigger`).simulate(`click`);
    tree.find(`.card__event-trigger`).simulate(`mouseOut`);
    const changedText = tree.find(`.card__additional-text`).text();

    expect(basicText).not.toEqual(changedText);
  });

  it(`top text should change after hover on selected Card,
   and change back after mouseout`, () => {

    const basicText = tree.find(`.card__upper-text`).text();
    tree.find(`.card__event-trigger`).simulate(`click`);
    tree.find(`.card__event-trigger`).simulate(`mouseOut`);
    tree.find(`.card__event-trigger`).simulate(`mouseOver`);
    const changedText = tree.find(`.card__upper-text`).text();

    expect(basicText).not.toEqual(changedText);

    tree.update();
    tree.find(`.card__event-trigger`).simulate(`mouseOut`);

    expect(tree.find(`.card__upper-text`).text()).toEqual(basicText);
  });
});
