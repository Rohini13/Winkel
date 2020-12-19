import SimpleReactFooter from "simple-react-footer";

import React, { Component } from 'react'

const imageStyle = {
    float: "center",
    width: "100%",
}

const footer ={
    marginTop: '10rem'
}

export class Footer extends Component {
    render() {
        const description = "Winkel is here to deliver smiles at your doorsteps. It has an amazing collection of toys ranging from cute stuffed animals to inquisitive games that will ignite the curiosity within your child. Don't let your kid get bored during this lockdown. Bring home a friend for your child. Bring home happiness.";
        const title = "Winkel"
        const columns = [
            {
                title: "About",
                resources: [
                    {
                        name: "Winkels",
                        link: "/about"
                    },
                    {
                        name: "Developers",
                        link: "/developers"
                    },
                ]
            },
            {
                title: "Catalog",
                resources: [
                    {
                        name: "Wooden",
                        link: "/woodentoys"
                    },
                    {
                        name: "Stuffed",
                        link: "/stuffedtoys"
                    },

                ]
            },
            {
                title: "Delivery",
                resources: [
                    {
                        name: "Locations",
                        link: "/locations"
                    },
                ]
            }
        ];
        return (<div style={footer}>
            <SimpleReactFooter
                style={footer}
                description={description}
                title={title}
                columns={columns}
                copyright="Rohini & Cheena"
                iconColor="white"
                backgroundColor="yellowgreen"
                fontColor="white"
                copyrightColor="grey"
            />
        </div>)
        
    };
}

export default Footer
