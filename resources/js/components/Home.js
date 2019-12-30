import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { people: [
        {
            name: "Dave Smith",
            daw: "Ableton Live",
            link: "https://i.pravatar.cc/300?img=7"
        },
        {
            name: "Diane Jones",
            daw: "Ableton Live",
            link: "https://i.pravatar.cc/300?img=9"
        },
        {
            name: "Alan Caxton",
            daw: "Logic X",
            link: "https://i.pravatar.cc/300?img=3"
        },
        {
        name: "Jenny Miller",
            daw: "Reason",
            link: "https://i.pravatar.cc/300?img=10"
        }
        ]};
      }

    render() {

        console.log(this.state.people);

        const items = this.state.people.map(
            person => <Portfolio name={person.name} daw={person.daw} link={person.link}/>
        );

        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {items}
                </div>
            </div>
        );
    }

}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
