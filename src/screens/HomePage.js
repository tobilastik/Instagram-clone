import React from "react";
import { ScrollView, SafeAreaView, StatusBar } from "react-native";
import { AppLoading, Asset } from "expo";

import { Apps, Position, App as AppModel } from "./components/Model";
import App from "./components/App";
import AppModal, { AppModalProps } from "./components/AppModal";

const apps = [
    {
        id: 0,
        title: "Namaste",
        subtitle: "Best Yoga apps for the summer",
        source: require("./assets/images/yoga.jpg"),
        content: "",
    },
    {
        id: 1,
        title: "Get Fit",
        subtitle: "Wear it while you work out",
        source: require("./assets/images/fitness.jpg"),
        content: "",
    },
    {
        id: 2,
        title: "Classic Games",
        subtitle: "They never get old",
        source: require("./assets/images/chess.jpg"),
        content: "",
    },
];


export default class extends React.PureComponent {
    state = {
        ready: false,
        modal: null,
    };

    async componentDidMount() {
        await Promise.all(apps.map(app => Asset.loadAsync(app.source)));
        this.setState({ ready: true });
    }

    open = (app, position) => {
        this.setState({ modal: { app, position } });
    }

    close = () => {
        this.setState({ modal: null });
    }

    render() {
        const { open, close, activeAppId } = this;
        const { ready, modal } = this.state;
        if (!ready) {
            return (
                <AppLoading />
            );
        }
        return (
            <>
                <StatusBar
                    barStyle="dark-content"
                />
                <SafeAreaView />
                <ScrollView>
                    {
                        apps.map(app => (
                            <App
                                key={app.id}
                                {...{ app, open }}
                            />
                        ))
                    }
                </ScrollView>
                {
                    modal !== null && (
                        <AppModal {...modal} {...{ close }} />
                    )
                }
            </>
        );
    }
}
