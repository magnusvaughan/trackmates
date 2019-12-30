import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="portfolio">
                    <div class="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-image-wrapper">
                            <img class="img-fluid rounded-circle" src={this.props.link} alt="person image" />
                            <h5 class="card-title">{this.props.name}</h5>
                        </div>
                        <div class="card-body">
                            
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



