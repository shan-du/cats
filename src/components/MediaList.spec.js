// Must have at least one test file in this directory or Mocha will throw an error.
import React from 'react';
import { shallow } from 'enzyme';

import MediaList from './MediaList';
import Loading from './Loading';
import NoData from './NoData';
import Image from './Image';

import objectAssign from 'object-assign';

describe('<MediaList />', () => {

  describe('Data Loading or No Data', () => {
    it('should only render <Loading> component when isLoading is true', () => {
      const component = shallow(<MediaList isLoading />);
      expect(component.is(Loading)).toEqual(true);
    });

    it('should only render <NoData> component when data is empty', () => {
      const component = shallow(<MediaList data={[]} />);
      expect(component.is(NoData)).toEqual(true);
    })
  });

  describe('Data Loaded', () => {
    const props = {
      data: [
        { image: 'url1', fact: 'fact 1' },
        { image: 'url11', fact: 'fact 11' },
      ],
    };
    const len = props.data.length;

    describe('Rendering Elements', () => {
      const component = shallow(<MediaList {...props} />);
      let header, content;

      beforeEach(() => {
        header = component.find('div.header');
        expect(header.length).toEqual(1);
        content = component.find('div.content');
        expect(content.length).toEqual(1);
      });

      it('should render a sort button in the header <div>', () => {
        const sortButton = header.find('button');
        expect(sortButton.length).toEqual(1);
      });

      it('should render 2 <Image> elements in content <div>', () => {
        const images = content.find(Image);
        expect(images.length).toEqual(2);
      });

      it('should render 2 <p> elements in content <div>', () => {
        const facts = content.find('p.fact');
        expect(facts.length).toEqual(2);
      });

      it('should render 2 remove <button> in content <div>', () => {
        const removeButtons = content.find('button.removeButton');
        expect(removeButtons.length).toEqual(2);
      });
    });


    describe('Data and Event Bindings', () => {
      const removeMock = jest.fn();
      const sortMock = jest.fn();

      const newProps = objectAssign(
        {
          onRemove: removeMock,
          onSort: sortMock,
        },
        props,
      );

      const component = shallow(<MediaList {...newProps} />);
      let i;

      it('sort button should fire click event', () => {
        const sortButton = component.find('div.header button');
        sortButton.simulate('click');
        expect(sortMock).toHaveBeenCalled();
      });

      it('<Image> elements should contain the right url', () => {
        const images = component.find(Image);
        for (i = 0; i < len; i++) {
          expect(images.at(i).prop('src')).toEqual(props.data[i].image);
        }
      });

      it('facts <p> elements should contain the right fact', () => {
        const facts = component.find('p.fact');
        for (i = 0; i < len; i++) {
          expect(facts.at(i).text()).toEqual(props.data[i].fact);
        }
      });

      it('should render 2 remove <button> in content <div>', () => {
        const removeButtons = component.find('button.removeButton');
        for (i = 0; i < len; i++) {
          removeButtons.at(i).simulate('click');
          expect(removeMock).toHaveBeenCalled();
        }
      });
    });
  });
});
