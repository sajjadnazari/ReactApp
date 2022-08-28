import React, { PureComponent } from 'react'
import getInfo from '../Services/GetInoService';

class IpInfo extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            info: '',
            isLoading: true
        }
    }

    componentDidMount() {
        getInfo().then(data => {
            this.setState({
                info: data,
                isLoading: false
            })
        });
    }

    render() {
        return (
            <div>
                <div className="card-container">
                    <span className="info">Info</span>
                    <img className="round" src={this.state.info.country_flag} alt={this.state.info.country} />
                    <h3>{this.state.info.country}</h3>
                    <h6>{this.state.info.city}</h6>
                    <p>isp: {this.state.info.isp}</p>
                    <div className="footer">
                        <p>{this.state.info.ip}</p>
                        <p>{this.state.info.latitude}</p>
                        <p>{this.state.info.longitude}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default IpInfo