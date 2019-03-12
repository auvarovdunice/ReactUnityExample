/* eslint-disable */
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Grid, Image, Container, Button, Header, List, Input } from 'semantic-ui-react';
import dictionary from "../../res/dictionary";
import Unity, {UnityContent} from "react-unity-webgl";

import sensorManagementImg from "../../img/sensor-management.jpg"
import actions from "./actions";


class HomePageMain extends PureComponent {
    constructor(props) {
        super(props);
        this.trackingInputRef = React.createRef();

        this.unityContent = new UnityContent(
            "unity/Build/WebGL.json",
            "unity/Build/UnityLoader.js"
        );
    }

    trackingClicked = () => {
        const trackingNum = this.trackingInputRef.current.value;
    }

    render() {
        let language  = this.props.language;
        if (!language) {
            language = 'us';
        }

        let localization = dictionary[language];
        if (!localization) {
            localization = dictionary['us'];
        }

        return (
            <main className="home-main">
                <Container>
                    <div className="preview">
                        <Image className="preview-image"
                               src='https://saas.vignesolutions.com/static/assets/images/login/monitoring-new.jpg'
                               fluid/>
                        <div className="tracking-input-container" columns='equal'>
                            <Input className="tracking-input" placeholder={localization.tracking_number}>
                                <input ref={this.trackingInputRef}/>
                                <Button className="tracking-button" content='OK' onClick={this.trackingClicked} primary/>
                            </Input>
                        </div>
                    </div>


                    <div className="features-section">
                        <Header as='h1' className="section-header">
                            {localization.features}
                        </Header>
                        <div className="features-container">
                            <Grid>
                                <Grid.Row columns={1}>
                                    <Grid.Column>
                                        <div className="unity-container">
                                            <Unity unityContent={this.unityContent}/>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                    </div>

                    <div className="sensor-management-section">
                        <Image src={sensorManagementImg} size='huge' centered/>
                    </div>

                </Container>
            </main>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        language: state.home.language
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setLanguage: actions.setLanguage,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageMain);


