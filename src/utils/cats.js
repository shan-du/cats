import { default as _map } from 'lodash/map';
import { default as _reduce } from 'lodash/reduce';
import { default as _orderBy } from 'lodash/orderBy';
import { default as _isString } from 'lodash/isString';
import { default as _assign } from 'lodash/assign';

/**
 * @returns an array of all the text values in all the @tag elements
 * @param {String} xmlString
 * @param {String} tag
 */
const getDataListFromXmlTag = (xmlString, tag) => {
  if (!xmlString || !tag) {
    return [];
  }

  const xmlParser = new DOMParser();
  const xmlDoc = xmlParser.parseFromString(xmlString, 'text/xml');
  const tagElements = xmlDoc.getElementsByTagName(tag);
  return _map(
    tagElements,
    (item) => item.innerHTML
  );
};

/**
 * @returns an array of images array & facts array
 * @param {any[]} allResponses - contains images html & facts json
 */
const cleanUpResponses = (allResponses) => _reduce(
  allResponses,
  (prev, next) => {
    if (next.facts) {
      return _assign(
        {},
        prev,
        { facts: next.facts }
      );
    }
    else if (_isString(next)) {
      return _assign(
        {},
        prev,
        { images: getDataListFromXmlTag(next, 'url') },
      );
    }
    else {
      return prev;
    }
  },
  {
    images: [],
    facts: [],
  }
);

/**
 * Parses response data into an array of objects like this
 [
   { image: 'url1', fact: 'fact string 1' },
   { image: 'url2', fact: 'fact string 2' },
   ...
 ]
 * @param {any[]} allResponses - contains images html & facts json
 */
export function parseAllResponses(allResponses) {
  const parsedResponses = cleanUpResponses(allResponses);

  if (parsedResponses.images.length >= parsedResponses.facts.length ) {
    return _map(
      parsedResponses.images,
      (item, index) => (
        {
          image: item,
          fact: parsedResponses.facts[index] || '',
        }
      )
    );
  }
  else {
    return _map(
      parsedResponses.facts,
      (item, index) => (
        {
          image: parsedResponses.images[index] || '',
          fact: item,
        }
      )
    );
  }
}

/**
 * @returns Sorted cats data by the length of the fact
 * @param {Object[]} data - array of cats data
 * @param {String} sortOrder
 */
export function sortDataByFacts(data, sortOrder) {
  // clean up sort order value
  const order = (sortOrder === 'asc' || sortOrder === 'desc') ? sortOrder : 'asc';
  return _orderBy(
    data,
    (item) => item.fact.length,
    order
  );
}
