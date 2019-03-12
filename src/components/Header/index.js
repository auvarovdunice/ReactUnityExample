/* eslint-disable */
import React, {PureComponent} from 'react';
import {Grid, Image, Container, Menu, Dropdown} from 'semantic-ui-react';
import './header.scss';
import {bindActionCreators} from "redux";
import actions from "../../pages/home/actions";
import connect from "react-redux/es/connect/connect";
import dictionary from "../../res/dictionary";

const countryOptions = [
    {key: 'af', value: 'af', flag: 'af', text: 'AF'},
    {key: 'ru', value: 'ru', flag: 'ru', text: 'RU'},
    {key: 'us', value: 'us', flag: 'us', text: 'US'},
]


class Header extends PureComponent {
    onChangeLanguage = (event, data) => {
        let language  = data.value
        if (!language) {
            language = 'us'
        }
        localStorage.setItem('language', language);
        this.props.setLanguage(language);
    }

    componentDidMount() {
        let language = localStorage.getItem('language')
        if (!language) {
            language = 'us'
            localStorage.setItem('language', language);
            this.props.setLanguage(language);
        }

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
            <header className="header">
                <Container>
                    <Grid>
                        <Grid.Column width={4}>
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/220px-Unity_Technologies_logo.svg.png" size="small"/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <div className="menu-section">
                                <Menu className="menu-links" text>
                                    <Menu.Item name={localization.home} link/>
                                    <Menu.Item name={localization.about} link/>
                                    <Menu.Item name={localization.blog}  link/>
                                    <Menu.Item name={localization.contact} link/>
                                </Menu>
                                <div className="language-selector">
                                    <Dropdown
                                        button
                                        className='icon'
                                        floating
                                        labeled
                                        icon='world'
                                        options={countryOptions}
                                        search
                                        placeholder='Language'
                                        defaultValue = {language}
                                        onChange = {this.onChangeLanguage}
                                    />
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Container>
            </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

