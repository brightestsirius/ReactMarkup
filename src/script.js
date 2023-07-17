const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const x = 10;

const list = [`cat`, `dog`, `lion`];
const cars = [`BMW`, `Audi`, `Tesla`];

setTimeout(() => {
    console.log(`After 1000ms`);
    list.push(`tiger`);
    console.log(list);
}, 1000);

const products = [
    {
        id: 0,
        type: `car`,
        name: `Audi A8`
    },
    {
        id: 1,
        type: `plane`,
        name: `Extra 330`
    },
    {
        id: 3,
        type: `dog`,
        name: `Patron`
    }
]

const showText = false;

const List = ( {arr=[], tag="ul"} ) => {
    const CustomTag = `${tag}`; // <ul>, <ol>

    return arr.length 
    ? <CustomTag>
        {arr.map((item, index) => <ListItem key={index} item={item} />)}
    </CustomTag>
    : null
}

const ListItem = ({item}) => {
    return <li>{item} <Button text="Delete" /></li>
}

const Button = ({text}) => {
    return <button>{text}</button>;
}

const App = <React.Fragment>
    <h1 className="heading">Hello, world!</h1>
    <h2>H2 text {x}</h2>

    <List arr={list} tag="ul" />
    <List arr={cars} tag="ol" />
    <List />

    <table>
        <tbody>
            <tr>
                {list.map((item, index) => <td key={index}>{item}</td>)}
            </tr>
        </tbody>
    </table>

    <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {products.map((item) => <tr key={item.id}>
                {
                    Object.keys(item)
                    .filter((i,k) => i !== `id`)
                    .map((el, i) => <td key={i}>{item[el]}</td>)
                }
            </tr>)}
        </tbody>
    </table>

    {showText ? <h3>ConditionalText</h3> : null}

    {showText && <h3>ConditionalText</h3>}
    
</React.Fragment>

root.render(App);