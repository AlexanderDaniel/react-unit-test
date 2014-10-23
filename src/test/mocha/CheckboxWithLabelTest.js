/** @jsx React.DOM */

// Example from https://facebook.github.io/jest/docs/tutorial-react.html

var React  = require("react/addons"),
	TestUtils = React.addons.TestUtils;
var CheckboxWithLabel = require("../../main/app/CheckboxWithLabel");
var assert = require("assert");
var jsdom = require('jsdom');

describe('CheckboxWithLabel', function() {
    beforeEach(function(done) {
        jsdom.env(
            '<html><body></body></html>',
            function (errors, window) {
                global.window = window;
                global.document = window.document;
                global.navigator = window.navigator;
                done();
            }
        );
    });

    afterEach(function() {
    	delete global.window;
    	delete global.document;
        delete global.navigator;
    });

    it('changes the text after click', function() {

        // Render a checkbox with label in the document
        var checkbox = TestUtils.renderIntoDocument(
            <CheckboxWithLabel labelOn="On" labelOff="Off" />
        );

        // Verify that it's Off by default
        var label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
        assert.equal(label.getDOMNode().textContent, "Off");

        // Simulate a click and verify that it is now On
        var input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
        TestUtils.Simulate.change(input);
        assert.equal(label.getDOMNode().textContent, "On");
    });
});
