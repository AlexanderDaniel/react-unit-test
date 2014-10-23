/** @jsx React.DOM */

// Example from https://facebook.github.io/jest/docs/tutorial-react.html

var React  = require("react/addons"),
	TestUtils = React.addons.TestUtils;
var CheckboxWithLabel = require("../../main/app/CheckboxWithLabel");
var assert = require("assert");

global.initDOM = function () {
	console.log("init test dom");
	var jsdom = require('jsdom');
	global.window = jsdom.jsdom().createWindow('<html><body></body></html>');
	global.document = window.document;
    global.navigator = window.navigator;
};

global.cleanDOM = function() {
	console.log("clean test dom");
	delete global.window;
	delete global.document;
	delete global.navigator;
};

describe('CheckboxWithLabel', function() {
    beforeEach(function() {
        initDOM();
    });

    afterEach(function() {
        cleanDOM();
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
