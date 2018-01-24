import React from 'react';
import {Tab, Tabs} from 'material-ui/Tabs';
import HomeGrid from './HomeGrid';
import {Subheader} from 'material-ui/Subheader';
import ManagePosition from './manage-positions/ManagePosition';


const styles = {
    headline : {
        fontSize:24,
        paddingTop:16,
        marginBottom:12,
        fontWeight:400,
    },
    tabs: {
        backgroundColor: 'green',
    },
};


const MyComponent = () => (
    <Tabs>
        <Tab style={styles.tabs} label="Home">
            <div>
                <HomeGrid/>
            </div>
        </Tab>
        <Tab style={styles.tabs} label="Manage Positions">
            <div>
                <ManagePosition/>
            </div>
        </Tab>
        <Tab style={styles.tabs} label="Manage Tests">
            <div>
                <h2 style={styles.headline}>Tab 3</h2>
                <p>This is Manage Tests</p>
            </div>
        </Tab>
        <Tab style={styles.tabs} label="Recruitments">
            <div>
                <h2 style={styles.headline}>Tab 4</h2>
                <p>This is Recruitments</p>
            </div>
        </Tab>
        <Tab style={styles.tabs} label="Analytics">
            <div>
                <h2 style={styles.headline}>Tab 5</h2>
                <p>This is Analytics</p>
            </div>
        </Tab>
        <Tab style={styles.tabs} label="Notifications">
            <div>
                <h2 style={styles.headline}>Tab 6</h2>
                <p>This is Notifications</p>
            </div>
        </Tab>
        <Tab style={styles.tabs} label="Messages">
            <div>
                <h2 style={styles.headline}>Tab 7</h2>
                <p>This is Messages</p>
            </div>
        </Tab>
        <Tab style={styles.tabs} label="Settings">
            <div>
                <h2 style={styles.headline}>Tab 8</h2>
                <p>This is Settings</p>
            </div>
        </Tab>
    </Tabs>
);

export default MyComponent;
