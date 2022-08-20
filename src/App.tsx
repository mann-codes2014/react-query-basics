import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './App.css';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {Paginated} from "./queries/pagination";
import {Basic} from "./queries/basic";
import {Dependent} from "./queries/dependent";

const queryClient = new QueryClient();


function Queries() {
    return (
        <div className="container">
            <h1 className="heading">React Query Queries</h1>
            <Tabs>
                <TabList>
                    <Tab>Basic</Tab>
                    <Tab>Paginated</Tab>
                    <Tab>Dependent</Tab>
                </TabList>

                <TabPanel>
                    <Basic/>
                </TabPanel>
                <TabPanel>
                    <Paginated/>
                </TabPanel>
                <TabPanel><Dependent/></TabPanel>
            </Tabs>
            {/*<h1 className="heading">React Query Mutation</h1>*/}
            {/*<Tabs>*/}
            {/*    <TabList>*/}
            {/*        <Tab>Basic</Tab>*/}
            {/*    </TabList>*/}

            {/*    <TabPanel>*/}
            {/*        <BasicMutation/>*/}
            {/*    </TabPanel>*/}
            {/*</Tabs>*/}
            {/*<ReactQueryDevtools initialIsOpen/>*/}

        </div>
    );
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Queries/>
        </QueryClientProvider>
    );
}

export default App;
