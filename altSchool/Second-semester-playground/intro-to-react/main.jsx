import "./style.css";

// console.log(React);

// const div = React.createElement('div', null, "Hello World!");

const Div = (props) => {
    const {greetings, name, id, style} = props;
    console.log(props);
    return (
        

        <p id={id} style={style}>
            Hello from <br/>
             Altschool!
        </p>
        
    );
};
  


ReactDOM.render([Div({ greetings:'Afternoon', name:'React', id:'id', style:({color:'red'})})], document.getElementById('app'));
