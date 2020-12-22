import SimpleReactFooter from "simple-react-footer";

import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        const description = "Winkel is here to deliver smiles at your doorsteps. It has an amazing collection of toys ranging from cute stuffed animals to inquisitive games that will ignite the curiosity within your child. Don't let your kid get bored during this lockdown. Bring home a friend for your child. Bring home happiness.";
        const title = "Winkel"
        const columns = [
            {
                title: "About",
                resources: [
                    {
                        name: "Winkel",
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
                        link: "/stuffedanimals"
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
        return (
            <div>
                <SimpleReactFooter
                    description={description}
                    title={title}
                    columns={columns}
                    copyright="Rohini & Cheena"
                    iconColor="white"
                    backgroundColor="pink"
                    fontColor="white"
                    copyrightColor="grey"
                />

            </div>
            )
        
    };
}

export default Footer
