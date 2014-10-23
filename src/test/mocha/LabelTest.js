/** @jsx React.DOM */

var React  = require("react/addons"),
	ReactTestUtils = React.addons.TestUtils;
var Label = require("../../main/app/Label");
var assert = require("assert");
var jsdom = require('jsdom').jsdom;

describe("Label Test", function() {

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

    it("Check Text Assignment", function() {
    	var label = ReactTestUtils.renderIntoDocument(<Label>Some Text We Need for Test</Label>);
    	assert.equal(label.refs.p.props.children, "Some Text We Need for Test");
    });

    it("Click", function () {
    	var label = ReactTestUtils.renderIntoDocument(<Label>Some Text We Need to Test</Label>);

        ReactTestUtils.Simulate.click(label.refs.p);
        assert.equal(label.refs.p.props.children, "Text After Click");
    });
});
