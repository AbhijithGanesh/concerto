/*
 * IBM Confidential
 * OCO Source Materials
 * IBM Concerto - Blockchain Solution Framework
 * Copyright IBM Corp. 2016
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has
 * been deposited with the U.S. Copyright Office.
 */

'use strict';

const Connection = require('@ibm/ibm-concerto-common').Connection;
const ConnectionManager = require('@ibm/ibm-concerto-common').ConnectionManager;
const WebConnectionManager = require('..');

const chai = require('chai');
chai.should();
chai.use(require('chai-as-promised'));

describe('WebConnectionManager', () => {

    let connectionManager;

    beforeEach(() => {
        connectionManager = new WebConnectionManager();
    });

    describe('#constructor', () => {

        it('should construct a new connection manager', () => {
            connectionManager.should.be.an.instanceOf(ConnectionManager);
        });

    });

    describe('#connect', () => {

        it('should return a new connection', () => {
            return connectionManager.connect({})
                .should.eventually.be.an.instanceOf(Connection);
        });

    });

});
