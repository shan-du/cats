import { default as _map } from 'lodash/map';
import { default as _reduce } from 'lodash/reduce';
import { default as _isString } from 'lodash/isString';
import { default as _assign } from 'lodash/assign';

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
