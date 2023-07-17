var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var x = 10;

var list = ["cat", "dog", "lion"];
var cars = ["BMW", "Audi", "Tesla"];

setTimeout(function () {
    console.log("After 1000ms");
    list.push("tiger");
    console.log(list);
}, 1000);

var products = [{
    id: 0,
    type: "car",
    name: "Audi A8"
}, {
    id: 1,
    type: "plane",
    name: "Extra 330"
}, {
    id: 3,
    type: "dog",
    name: "Patron"
}];

var showText = false;

var List = function List(_ref) {
    var _ref$arr = _ref.arr,
        arr = _ref$arr === undefined ? [] : _ref$arr,
        _ref$tag = _ref.tag,
        tag = _ref$tag === undefined ? "ul" : _ref$tag;

    var CustomTag = "" + tag; // <ul>, <ol>

    return arr.length ? React.createElement(
        CustomTag,
        null,
        arr.map(function (item, index) {
            return React.createElement(ListItem, { key: index, item: item });
        })
    ) : null;
};

var ListItem = function ListItem(_ref2) {
    var item = _ref2.item;

    return React.createElement(
        "li",
        null,
        item,
        " ",
        React.createElement(Button, { text: "Delete" })
    );
};

var Button = function Button(_ref3) {
    var text = _ref3.text;

    return React.createElement(
        "button",
        null,
        text
    );
};

var App = React.createElement(
    React.Fragment,
    null,
    React.createElement(
        "h1",
        { className: "heading" },
        "Hello, world!"
    ),
    React.createElement(
        "h2",
        null,
        "H2 text ",
        x
    ),
    React.createElement(List, { arr: list, tag: "ul" }),
    React.createElement(List, { arr: cars, tag: "ol" }),
    React.createElement(List, null),
    React.createElement(
        "table",
        null,
        React.createElement(
            "tbody",
            null,
            React.createElement(
                "tr",
                null,
                list.map(function (item, index) {
                    return React.createElement(
                        "td",
                        { key: index },
                        item
                    );
                })
            )
        )
    ),
    React.createElement(
        "table",
        null,
        React.createElement(
            "thead",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    null,
                    "Type"
                ),
                React.createElement(
                    "th",
                    null,
                    "Name"
                )
            )
        ),
        React.createElement(
            "tbody",
            null,
            products.map(function (item) {
                return React.createElement(
                    "tr",
                    { key: item.id },
                    Object.keys(item).filter(function (i, k) {
                        return i !== "id";
                    }).map(function (el, i) {
                        return React.createElement(
                            "td",
                            { key: i },
                            item[el]
                        );
                    })
                );
            })
        )
    ),
    showText ? React.createElement(
        "h3",
        null,
        "ConditionalText"
    ) : null,
    showText && React.createElement(
        "h3",
        null,
        "ConditionalText"
    )
);

root.render(App);