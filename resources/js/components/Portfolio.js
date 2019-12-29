import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="portfolio">
                    <div class="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-image-wrapper">
                            <img class="img-fluid" src={this.props.link} alt="person image" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{this.props.name}</h5>
                            <p class="card-text">{this.props.daw}</p>
                            <a href="#" class="btn btn-primary">Match</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;



