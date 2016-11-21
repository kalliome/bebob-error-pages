var errors = [];

errors.push({
  error: 400,
  title: 'Bad Request',
  message: 'The server cannot process the request due to something that is perceived to be a client error.'
});

errors.push({
  error: 401,
  title: 'Unauthorized',
  message: 'The requested resource requires an authentication.'
});

errors.push({
  error: 403,
  title: 'Access Denied',
  message: 'The requested resource requires an authentication.'
});

errors.push({
  error: 404,
  title: 'Resource not found',
  message: 'The requested resource could not be found but may be available again in the future.'
});

errors.push({
  error: 500,
  title: 'Webservice currently unavailable',
  message: "An unexpected condition was encountered.\nOur service team has been dispatched to bring it back online."
});

errors.push({
  error: 501,
  title: 'Not Implemented',
  message: 'The Webserver cannot recognize the request method.'
});

errors.push({
  error: 502,
  title: 'Webservice currently unavailable',
  message: "We've got some trouble with our backend upstream cluster.\nOur service team has been dispatched to bring it back online."
});

errors.push({
  error: 503,
  title: 'Webservice currently unavailable',
  message: "We've got some trouble with our backend upstream cluster.\nOur service team has been dispatched to bring it back online."
});

errors.push({
  error: 520,
  title: 'Origin Error - Unknown Host',
  message: 'The requested hostname is not routed. Use only hostnames to access resources.'
});

errors.push({
  error: 521,
  title: 'Webservice currently unavailable',
  message: "We've got some trouble with our backend upstream cluster.\nOur service team has been dispatched to bring it back online."
});

errors.push({
  error: 533,
  title: 'Scheduled Maintenance',
  message: "This site is currently down for maintenance.\nOur service team is working hard to bring it back online soon."
});

module.exports = errors;
