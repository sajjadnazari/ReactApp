import React, { PureComponent } from 'react'

class IpInfo extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            Info: null
        }
    }

    async GetIpAddress() {
        const response = await fetch('https://api64.ipify.org?format=json');
        return (await response.json()).ip
    }

    async GetInfo() {
        const ipAddress = await this.GetIpAddress();
        const response = await fetch(`http://ipwhois.app/json/${ipAddress}`);
        return await response.json();
    }

    componentDidMount() {
        this.GetInfo().then(data => {
            this.setState({
                Info: data
            })
        })
    }

    render() {
        return (
            <div>
                <div className="card-container">
                    <span className="info">Info</span>
                    <img className="round" src="./br.svg" alt="brazil" />
                    <h3>Brazil</h3>
                    <h6>Guarulhos</h6>
                    <p>isp: Akamai International B.V.</p>
                    <div className="footer">
                        <p>{this.state.Info}</p>
                        <p>latitude: -23.4543395</p>
                        <p>longitude: -46.5336678</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default IpInfo