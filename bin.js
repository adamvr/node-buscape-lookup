#!/usr/bin/env node

/**
 * Dependencies
 */
var buscape = require('./')
  , nomnom = require('nomnom');

var opts = nomnom
  .script('buscape')
  .nocolors()
  .option('id', {
    abbr: 'i',
    required: true,
    help: 'Lomadee api key'
  })
  .option('price', {
    abbr: 'p',
    help: 'Price range in the form <min>..<max>'
  })
  .option('source', {
    help: 'Set source id'
  })
  .option('country', {
    abbr: 'c',
    help: 'Country to query in'
  })
  .option('keywords', {
    abbr: 'k',
    required: true,
    help: 'Keywords to search'
  })
  .option('test', {
    abbr: 't',
    flag: true,
    help: 'Test mode'
  })
  .option('limit', {
    abbr: 'l',
    help: 'Limit number of returned products'
  })
  .option('one', {
    abbr: '1',
    help: 'Return only one product',
    flag: true,
    default: false
  })
  .option('client', {
    help: 'Set client ip'
  })
  .option('seller', {
    help: 'Set seller id',
    abbr: 's'
  })
  .option('page', {
    help: 'Set page',
    abbr: 'p'
  })
  .parse();

buscape({keywords: opts.keywords})
  .id(opts.id)
  .country(opts.country)
  .test(opts.test)
  .one(opts.one)
  .limit(opts.limit)
  .source(opts.source)
  .client(opts.client)
  .seller(opts.seller)
  .page(opts.page)
  .done(function (err, res) {
    console.log(JSON.stringify(res));
  });
