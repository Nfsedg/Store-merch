import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Home } from "../containers/Home";
import { Checkout } from "../containers/Checkout"
import { Information } from "../containers/Information";
import { Payments } from "../containers/Paymets";
import { Success } from "../containers/Success";
import { NotFound } from "../containers/NotFound";
import { Layout } from "../components/Layout";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";
import "../styles/components/App.css"

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
            <Layout>
                <Routes >
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/checkout" element={<Checkout/>}/>
                    <Route exact path="/checkout/information" element={<Information/>}/>
                    <Route exact path="/checkout/payment" element={<Payments/>}/>
                    <Route exact path="/checkout/success" element={<Success/>}/>
                    <Route element={<NotFound/>}/>
                </Routes >
            </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export { App }